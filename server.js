import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.static(__dirname));

/* ── Spotify token cache (서버 메모리에만 존재) ── */
let _token = null;
let _tokenExpiry = 0;

async function getSpotifyToken() {
  if (_token && Date.now() < _tokenExpiry) return _token;

  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
    throw new Error('.env에 SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET이 없습니다');
  }

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type':  'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' +
        Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64'),
    },
    body: 'grant_type=client_credentials',
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`Token 발급 실패: ${err.error_description || res.status}`);
  }

  const data = await res.json();
  _token = data.access_token;
  _tokenExpiry = Date.now() + data.expires_in * 1000 - 60_000;
  return _token;
}

/* ── /api/status ── */
app.get('/api/status', (_req, res) => {
  res.json({ itunes: true });
});

/* ── /api/itunes ── iTunes Search API 프록시 (인증 불필요) ── */
app.get('/api/itunes', async (req, res) => {
  try {
    const params = new URLSearchParams({ ...req.query, media: 'music', entity: 'song' });
    const url    = `https://itunes.apple.com/search?${params}`;
    const upstream = await fetch(url);
    const data = await upstream.json();
    res.json(data);
  } catch (err) {
    console.error('[iTunes proxy]', err.message);
    res.status(500).json({ error: err.message });
  }
});

/* ── /api/spotify/:path(*) ── Spotify API 프록시 ── */
app.get('/api/spotify/:path(*)', async (req, res) => {
  try {
    const token = await getSpotifyToken();
    const query = new URLSearchParams(req.query).toString();
    const url   = `https://api.spotify.com/v1/${req.params.path}${query ? '?' + query : ''}`;

    const upstream = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const text = await upstream.text();

    // 빈 응답 처리
    if (!text) {
      return res.status(upstream.status).json({});
    }

    // Spotify가 가끔 JSON 대신 텍스트/HTML 에러를 반환함
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.error(`[Spotify proxy] Non-JSON (${upstream.status}):`, text.slice(0, 120));
      return res.status(502).json({
        error: { status: upstream.status, message: 'Spotify API 응답을 파싱할 수 없습니다.' },
      });
    }

    res.status(upstream.status).json(data);
  } catch (err) {
    console.error('[Spotify proxy]', err.message);
    res.status(500).json({ error: { status: 500, message: err.message } });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  const ok = !!(process.env.SPOTIFY_CLIENT_ID && process.env.SPOTIFY_CLIENT_SECRET);
  console.log(`🎵 MoodTune  →  http://localhost:${PORT}`);
  console.log(`Spotify: ${ok ? '✅ 연동됨' : '⚠️  .env 파일에 자격증명을 설정하세요'}`);
});
