export default async function handler(req, res) {
  try {
    const params = new URLSearchParams({
      ...req.query,
      media: 'music',
      entity: 'song',
    });
    const upstream = await fetch(`https://itunes.apple.com/search?${params}`);
    const data = await upstream.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
