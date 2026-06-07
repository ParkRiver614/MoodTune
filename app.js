/* ================================================================
   MoodTune — app.js
   자격증명은 서버(.env)에만 존재. 프론트는 /api/* 만 호출.
   ================================================================ */

/* ───── Local Music Database ───── */
const LOCAL_SONGS = [
  // K-Pop
  { id:1,  title:"Dynamite",          artist:"BTS",                   genre:"kpop",   moods:["happy","energetic"],      weather:["sunny","hot"]      },
  { id:2,  title:"Spring Day",        artist:"BTS",                   genre:"kpop",   moods:["sad","melancholy"],       weather:["cold","snowy"]     },
  { id:3,  title:"Boy With Luv",      artist:"BTS",                   genre:"kpop",   moods:["happy","romantic"],       weather:["sunny"]            },
  { id:4,  title:"Butter",            artist:"BTS",                   genre:"kpop",   moods:["happy","energetic"],      weather:["hot","sunny"]      },
  { id:5,  title:"How You Like That", artist:"BLACKPINK",             genre:"kpop",   moods:["energetic","happy"],      weather:["sunny","hot"]      },
  { id:6,  title:"Lovesick Girls",    artist:"BLACKPINK",             genre:"kpop",   moods:["sad","romantic"],         weather:["rainy","cloudy"]   },
  { id:7,  title:"Through the Night", artist:"IU",                    genre:"kpop",   moods:["calm","romantic"],        weather:["cold","rainy"]     },
  { id:8,  title:"Celebrity",         artist:"IU",                    genre:"kpop",   moods:["happy","calm"],           weather:["sunny"]            },
  { id:9,  title:"eight",             artist:"IU",                    genre:"kpop",   moods:["sad","melancholy"],       weather:["rainy","cloudy"]   },
  { id:10, title:"Hype Boy",          artist:"NewJeans",              genre:"kpop",   moods:["happy","energetic"],      weather:["sunny","hot"]      },
  { id:11, title:"Ditto",             artist:"NewJeans",              genre:"kpop",   moods:["calm","melancholy"],      weather:["cold","cloudy"]    },
  { id:12, title:"OMG",               artist:"NewJeans",              genre:"kpop",   moods:["happy","energetic"],      weather:["sunny"]            },
  { id:13, title:"Feel Special",      artist:"TWICE",                 genre:"kpop",   moods:["happy","calm"],           weather:["sunny"]            },
  { id:14, title:"Next Level",        artist:"aespa",                 genre:"kpop",   moods:["energetic"],              weather:["cloudy","hot"]     },
  { id:15, title:"God's Menu",        artist:"Stray Kids",            genre:"kpop",   moods:["energetic"],              weather:["hot","sunny"]      },
  { id:16, title:"Very Nice",         artist:"SEVENTEEN",             genre:"kpop",   moods:["happy","energetic"],      weather:["sunny"]            },
  { id:17, title:"Psycho",            artist:"Red Velvet",            genre:"kpop",   moods:["energetic","melancholy"], weather:["cloudy"]           },
  { id:18, title:"INVU",              artist:"TAEYEON",               genre:"kpop",   moods:["melancholy","sad"],       weather:["cold","rainy"]     },
  { id:19, title:"Falling For You",   artist:"EXO",                   genre:"kpop",   moods:["romantic","calm"],        weather:["rainy","cloudy"]   },
  { id:20, title:"Snow Flower",       artist:"Park Hyo Shin",         genre:"kpop",   moods:["calm","melancholy"],      weather:["cold","snowy"]     },
  { id:21, title:"Any Song",          artist:"Zico",                  genre:"kpop",   moods:["happy","energetic"],      weather:["sunny"]            },
  { id:22, title:"Don't Wanna Cry",   artist:"SEVENTEEN",             genre:"kpop",   moods:["sad","melancholy"],       weather:["rainy","cloudy"]   },
  { id:23, title:"Attention",         artist:"NewJeans",              genre:"kpop",   moods:["calm","happy"],           weather:["sunny","cloudy"]   },
  // J-Pop
  { id:25, title:"Lemon",             artist:"Kenshi Yonezu",         genre:"jpop",   moods:["sad","melancholy"],       weather:["rainy","cloudy"]   },
  { id:26, title:"Paprika",           artist:"Kenshi Yonezu",         genre:"jpop",   moods:["happy","energetic"],      weather:["sunny"]            },
  { id:27, title:"夜に駆ける",          artist:"YOASOBI",               genre:"jpop",   moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  { id:28, title:"Idol",              artist:"YOASOBI",               genre:"jpop",   moods:["energetic","happy"],      weather:["sunny","hot"]      },
  { id:29, title:"Matsuri",           artist:"Fujii Kaze",            genre:"jpop",   moods:["energetic","happy"],      weather:["sunny","hot"]      },
  { id:30, title:"Shinunoga E-Wa",    artist:"Fujii Kaze",            genre:"jpop",   moods:["romantic","calm"],        weather:["rainy","sunny"]    },
  { id:31, title:"Pretender",         artist:"Official HIGE DANdism", genre:"jpop",   moods:["sad","melancholy"],       weather:["rainy","cloudy"]   },
  { id:32, title:"Subtitle",          artist:"Official HIGE DANdism", genre:"jpop",   moods:["romantic","calm"],        weather:["cold","snowy"]     },
  { id:33, title:"Usseewa",           artist:"Ado",                   genre:"jpop",   moods:["energetic"],              weather:["cloudy","rainy"]   },
  { id:34, title:"Christmas Song",    artist:"back number",           genre:"jpop",   moods:["romantic","calm"],        weather:["cold","snowy"]     },
  { id:35, title:"Say It",            artist:"Yorushika",             genre:"jpop",   moods:["melancholy","calm"],      weather:["cloudy","rainy"]   },
  { id:36, title:"Wherever You Are",  artist:"ONE OK ROCK",           genre:"jpop",   moods:["romantic","sad"],         weather:["rainy","cloudy"]   },
  // Pop
  { id:39, title:"Watermelon Sugar",  artist:"Harry Styles",          genre:"pop",    moods:["happy","energetic"],      weather:["sunny","hot"]      },
  { id:40, title:"As It Was",         artist:"Harry Styles",          genre:"pop",    moods:["sad","melancholy"],       weather:["cloudy","rainy"]   },
  { id:41, title:"drivers license",   artist:"Olivia Rodrigo",        genre:"pop",    moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  { id:42, title:"good 4 u",          artist:"Olivia Rodrigo",        genre:"pop",    moods:["energetic","happy"],      weather:["sunny","cloudy"]   },
  { id:43, title:"Shake It Off",      artist:"Taylor Swift",          genre:"pop",    moods:["happy","energetic"],      weather:["sunny","hot"]      },
  { id:44, title:"Love Story",        artist:"Taylor Swift",          genre:"pop",    moods:["romantic","happy"],       weather:["sunny"]            },
  { id:45, title:"All Too Well",      artist:"Taylor Swift",          genre:"pop",    moods:["sad","melancholy"],       weather:["cold","rainy"]     },
  { id:46, title:"Blinding Lights",   artist:"The Weeknd",            genre:"pop",    moods:["energetic"],              weather:["cloudy","cold"]    },
  { id:47, title:"Levitating",        artist:"Dua Lipa",              genre:"pop",    moods:["happy","energetic"],      weather:["sunny","hot"]      },
  { id:48, title:"Perfect",           artist:"Ed Sheeran",            genre:"pop",    moods:["romantic","calm"],        weather:["rainy","cloudy"]   },
  { id:49, title:"bad guy",           artist:"Billie Eilish",         genre:"pop",    moods:["energetic","melancholy"], weather:["cloudy"]           },
  { id:50, title:"Ocean Eyes",        artist:"Billie Eilish",         genre:"pop",    moods:["calm","melancholy"],      weather:["rainy","cold"]     },
  { id:51, title:"7 rings",           artist:"Ariana Grande",         genre:"pop",    moods:["happy","energetic"],      weather:["sunny","hot"]      },
  { id:52, title:"Just The Way You Are",artist:"Bruno Mars",          genre:"pop",    moods:["romantic","happy"],       weather:["sunny"]            },
  // Hip-Hop
  { id:54, title:"God's Plan",        artist:"Drake",                 genre:"hiphop", moods:["energetic","happy"],      weather:["sunny","hot"]      },
  { id:55, title:"Hotline Bling",     artist:"Drake",                 genre:"hiphop", moods:["melancholy","sad"],       weather:["rainy","cloudy"]   },
  { id:56, title:"Circles",           artist:"Post Malone",           genre:"hiphop", moods:["sad","melancholy"],       weather:["rainy","cloudy"]   },
  { id:57, title:"Sunflower",         artist:"Post Malone",           genre:"hiphop", moods:["happy","calm"],           weather:["sunny"]            },
  { id:58, title:"HUMBLE.",           artist:"Kendrick Lamar",        genre:"hiphop", moods:["energetic"],              weather:["sunny","hot"]      },
  { id:60, title:"Love Yourz",        artist:"J. Cole",               genre:"hiphop", moods:["calm","melancholy"],      weather:["cloudy","rainy"]   },
  { id:61, title:"Artist",            artist:"Zico",                  genre:"hiphop", moods:["calm","melancholy"],      weather:["cloudy","rainy"]   },
  { id:62, title:"Homesick",          artist:"pH-1",                  genre:"hiphop", moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  // R&B
  { id:64, title:"Thinkin Bout You",  artist:"Frank Ocean",           genre:"rnb",    moods:["sad","romantic"],         weather:["rainy","cold"]     },
  { id:65, title:"Good Days",         artist:"SZA",                   genre:"rnb",    moods:["calm","happy"],           weather:["sunny","cloudy"]   },
  { id:66, title:"Best Part",         artist:"H.E.R.",                genre:"rnb",    moods:["romantic","calm"],        weather:["sunny","rainy"]    },
  { id:67, title:"love",              artist:"DEAN",                  genre:"rnb",    moods:["romantic","calm"],        weather:["rainy","cloudy"]   },
  { id:68, title:"Jasmine",           artist:"DPR LIVE",              genre:"rnb",    moods:["calm","romantic"],        weather:["rainy","cloudy"]   },
  { id:69, title:"Swimming",          artist:"Sik-K",                 genre:"rnb",    moods:["calm","happy"],           weather:["sunny","hot"]      },
  // Indie
  { id:71, title:"Loving is Easy",    artist:"Rex Orange County",     genre:"indie",  moods:["happy","calm"],           weather:["sunny","cloudy"]   },
  { id:72, title:"Apocalypse",        artist:"Cigarettes After Sex",  genre:"indie",  moods:["romantic","calm"],        weather:["rainy","cold"]     },
  { id:73, title:"Sofia",             artist:"Clairo",                genre:"indie",  moods:["calm","romantic"],        weather:["sunny","cloudy"]   },
  { id:74, title:"Birds Don't Sing",  artist:"TV Girl",               genre:"indie",  moods:["melancholy","calm"],      weather:["cloudy","rainy"]   },
  { id:75, title:"Take Me to Church", artist:"Hozier",                genre:"indie",  moods:["melancholy","energetic"], weather:["cloudy","rainy"]   },
  { id:76, title:"Moon Song",         artist:"Phoebe Bridgers",       genre:"indie",  moods:["sad","melancholy"],       weather:["cold","cloudy"]    },
  { id:77, title:"Cherry Wine",       artist:"Hozier",                genre:"indie",  moods:["romantic","calm"],        weather:["rainy","cloudy"]   },
];

/* ───── 검색어 매핑 ───── */
const GENRE_SEARCH_TERMS = {
  all:    ['kpop', 'pop', 'hip hop', 'r&b', 'indie'],
  kpop:   ['kpop', 'k-pop'],
  jpop:   ['jpop', 'j-pop'],
  pop:    ['pop'],
  hiphop: ['hip hop', 'rap'],
  rnb:    ['r&b', 'soul'],
  indie:  ['indie pop', 'indie'],
};

/* 기분별 검색 쿼리 (기분 단어 직접 사용 대신 장르·분위기 묘사어 다양화) */
const MOOD_QUERIES = {
  happy: [
    'kpop dance 2023','pop upbeat hits','hip hop party',
    'kpop girl group','r&b groove','indie feel good',
    'kpop cheerful','pop bright summer',
  ],
  energetic: [
    'kpop boy group performance','hip hop hype 2023','pop workout',
    'kpop powerful stage','dance pop','hip hop banger',
    'kpop intense','edm pop',
  ],
  calm: [
    'kpop soft ballad','lo-fi hip hop','indie acoustic folk',
    'r&b slow smooth','jpop mellow','piano instrumental',
    'pop slow jam','jazz cafe',
  ],
  romantic: [
    'kpop drama ost love','r&b slow jam','pop love song 2023',
    'indie folk romance','jpop love ballad','kpop couple song',
    'r&b serenade','ballad sweet',
  ],
  sad: [
    'kpop slow ballad','pop breakup song 2023','indie folk acoustic',
    'r&b heartbreak','jpop emotional','ballad piano',
    'kpop slow night','pop lonely',
  ],
  melancholy: [
    'indie atmospheric','kpop late night','jpop bittersweet',
    'r&b nostalgia','folk acoustic','lo-fi study night',
    'pop reflective','kpop introspective',
  ],
};

/* 날씨별 검색 쿼리 */
const WEATHER_QUERIES = {
  sunny:   ['kpop summer','pop outdoor bright','hip hop summer 2023','r&b sunshine','kpop idol summer','pop beach','indie summer fun','kpop cheer'],
  cloudy:  ['indie dreamy','kpop soft','r&b mellow','lo-fi chill','pop gentle','acoustic soft','kpop moody','jpop hazy'],
  rainy:   ['kpop night rain','indie acoustic rain','jpop rain','r&b night','lo-fi rain study','ballad piano rain','pop midnight','kpop 비 발라드'],
  snowy:   ['kpop winter song','pop cozy christmas','indie winter acoustic','r&b cozy night','jpop snow','ballad winter night','folk fireplace','kpop white'],
  hot:     ['kpop summer dance','hip hop summer','pop tropical','r&b hot summer','dancehall','pop dance floor','kpop fire','afrobeats pop'],
  cold:    ['indie folk winter','kpop cold','piano acoustic','r&b cozy warm','jpop winter','pop winter night','ballad acoustic','ambient cold'],
};

/* 특정 장르 선택 시 조합할 보조 키워드 */
const MOOD_KEYWORDS = {
  happy:      ['dance','upbeat','bright','fun','cheer','summer'],
  energetic:  ['powerful','hype','banger','fire','intense','stage'],
  calm:       ['ballad','soft','slow','acoustic','gentle','peaceful'],
  romantic:   ['love','romance','ballad','tender','sweet','couple'],
  sad:        ['ballad','night','slow','acoustic','piano','emotional'],
  melancholy: ['late night','lonely','bittersweet','acoustic','nostalgic','rain'],
};

const WEATHER_KEYWORDS = {
  sunny:   ['summer','outdoor','bright','beach','sunshine'],
  cloudy:  ['dreamy','soft','hazy','mellow','gentle'],
  rainy:   ['rain','midnight','night','acoustic','piano'],
  snowy:   ['winter','snow','cozy','night','fireplace'],
  hot:     ['summer','heat','tropical','fire','dance'],
  cold:    ['cold','winter','acoustic','cozy','night'],
};

const MOOD_LABELS    = { happy:"😊 행복", energetic:"⚡ 신남", calm:"😌 차분", romantic:"💕 설렘", sad:"😢 슬픔", melancholy:"🌙 쓸쓸" };
const MOOD_EMOJIS    = { happy:"😊", energetic:"⚡", calm:"😌", romantic:"💕", sad:"😢", melancholy:"🌙" };
const WEATHER_LABELS = { sunny:"☀️ 맑음", cloudy:"☁️ 흐림", rainy:"🌧️ 비", snowy:"❄️ 눈", hot:"🌡️ 더움", cold:"🥶 추움" };
const WEATHER_EMOJIS = { sunny:"☀️", cloudy:"☁️", rainy:"🌧️", snowy:"❄️", hot:"🌡️", cold:"🥶" };
const GENRE_COLORS   = { kpop:"#ff6b9d", jpop:"#a78bfa", pop:"#60a5fa", hiphop:"#fb923c", rnb:"#fbbf24", indie:"#34d399" };

/* ================================================================
   iTunes Search API (무료 · 인증 불필요)
   ================================================================ */
const iTunes = (() => {

  async function search(term, limit = 15) {
    const params = new URLSearchParams({ term, limit, country: 'KR', lang: 'ko_kr' });
    const res = await fetch(`/api/itunes?${params}`);
    if (!res.ok) throw new Error(`iTunes 오류 ${res.status}`);
    const data = await res.json();
    return (data.results || []).map(formatTrack);
  }

  async function getByQueries(queryList, keywords, genres) {
    let queries;

    if (genres.includes('all')) {
      // 전체 장르: 미리 정의된 다양한 쿼리 중 랜덤 선택
      queries = [...queryList];
    } else {
      // 특정 장르 선택: 장르어 + 보조 키워드 조합
      queries = genres.flatMap(genre => {
        const gt = GENRE_SEARCH_TERMS[genre]?.[0] || genre;
        return [gt, ...keywords.slice(0, 3).map(kw => `${gt} ${kw}`)];
      });
    }

    // 매 호출마다 랜덤 5개 선택 → 같은 조건도 결과가 달라짐
    const picked = shuffle(queries).slice(0, 5);
    const tracks = [];
    const seen   = new Set();

    for (const q of picked) {
      try {
        const results = await search(q, 12);
        for (const t of results) {
          if (!seen.has(t.id)) { seen.add(t.id); tracks.push(t); }
        }
      } catch (e) {
        console.warn('[iTunes]', q, e.message);
      }
    }

    if (tracks.length === 0) throw new Error('iTunes에서 결과를 찾지 못했습니다');
    return shuffle(tracks).slice(0, 20);
  }

  async function getMoodRecommendations(mood, genres) {
    return getByQueries(MOOD_QUERIES[mood] || [], MOOD_KEYWORDS[mood] || [], genres);
  }

  async function getWeatherRecommendations(weather, genres) {
    return getByQueries(WEATHER_QUERIES[weather] || [], WEATHER_KEYWORDS[weather] || [], genres);
  }

  function formatTrack(t) {
    const art = t.artworkUrl100?.replace('100x100bb', '300x300bb') || null;
    return {
      id:         `itunes_${t.trackId}`,
      title:      t.trackName  || '알 수 없음',
      artist:     t.artistName || '알 수 없음',
      album:      t.collectionName || '',
      albumArt:   art,
      previewUrl: t.previewUrl   || null,
      trackUrl:   t.trackViewUrl || null,
      genre:      guessGenre(t.primaryGenreName),
      source:     'itunes',
    };
  }

  function guessGenre(name) {
    if (!name) return null;
    const n = name.toLowerCase();
    if (n.includes('k-pop') || n.includes('korean')) return 'kpop';
    if (n.includes('j-pop') || n.includes('japanese')) return 'jpop';
    if (n.includes('hip-hop') || n.includes('rap')) return 'hiphop';
    if (n.includes('r&b') || n.includes('soul')) return 'rnb';
    if (n.includes('indie') || n.includes('folk')) return 'indie';
    if (n.includes('pop')) return 'pop';
    return null;
  }

  return { getMoodRecommendations, getWeatherRecommendations };
})();

/* ================================================================
   App State
   ================================================================ */
let selectedMood    = null;
let selectedWeather = null;
let selectedGenres  = new Set(['all']);
let favorites       = new Set(JSON.parse(localStorage.getItem('moodtune_favs') || '[]'));
let moodResults     = [];
let weatherResults  = [];
let currentAudio    = null;
let currentPlayBtn  = null;

/* DOM */
const recommendBtn          = document.getElementById('recommend-btn');
const shuffleBtn            = document.getElementById('shuffle-btn');
const hintText              = document.getElementById('hint-text');
const loadingEl             = document.getElementById('loading-indicator');
const mainPlaceholder       = document.getElementById('main-placeholder');
const moodResultsSection    = document.getElementById('mood-results-section');
const weatherResultsSection = document.getElementById('weather-results-section');
const moodGrid              = document.getElementById('mood-songs-grid');
const weatherGrid           = document.getElementById('weather-songs-grid');
const moodSubtitle          = document.getElementById('mood-results-subtitle');
const weatherSubtitle       = document.getElementById('weather-results-subtitle');
const moodResultsTitle      = document.getElementById('mood-results-title');
const weatherResultsTitle   = document.getElementById('weather-results-title');
const moodNoResults         = document.getElementById('mood-no-results');
const weatherNoResults      = document.getElementById('weather-no-results');
const tabBar                = document.getElementById('tab-bar');
const tabMoodBtn            = document.getElementById('tab-mood-btn');
const tabWeatherBtn         = document.getElementById('tab-weather-btn');
const autoWeatherBtn        = document.getElementById('auto-weather-btn');
const weatherStatus         = document.getElementById('weather-status');
const toast                 = document.getElementById('toast');
const statusEl              = document.getElementById('spotify-status');
const statusLabel           = document.getElementById('spotify-status-label');

/* ================================================================
   Mood Selection
   ================================================================ */
document.querySelectorAll('.mood-card').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mood-card').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedMood = btn.dataset.mood;
    updateRecommendBtn();
  });
});

/* ================================================================
   Weather Selection
   ================================================================ */
document.querySelectorAll('.weather-card').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.weather-card').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedWeather = btn.dataset.weather;
    updateRecommendBtn();
  });
});

autoWeatherBtn.addEventListener('click', () => {
  if (!navigator.geolocation) {
    setWeatherStatus('위치 서비스를 지원하지 않는 브라우저입니다.', 'error');
    return;
  }
  autoWeatherBtn.disabled = true;
  setWeatherStatus('위치 감지 중...', 'loading');

  navigator.geolocation.getCurrentPosition(
    async ({ coords }) => {
      try {
        const res  = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&current=weathercode,temperature_2m`
        );
        const data = await res.json();
        const weather = weatherFromCode(data.current.weathercode, data.current.temperature_2m);

        document.querySelectorAll('.weather-card').forEach(b =>
          b.classList.toggle('selected', b.dataset.weather === weather)
        );
        selectedWeather = weather;

        const emoji = { sunny:'☀️', cloudy:'☁️', rainy:'🌧️', snowy:'❄️', hot:'🌡️', cold:'🥶' };
        setWeatherStatus(
          `${emoji[weather]} ${WEATHER_LABELS[weather]} (${data.current.temperature_2m.toFixed(1)}°C)`,
          'success'
        );
        updateRecommendBtn();
      } catch {
        setWeatherStatus('날씨를 불러올 수 없어요. 직접 선택해주세요.', 'error');
      } finally {
        autoWeatherBtn.disabled = false;
      }
    },
    () => {
      setWeatherStatus('위치 접근이 거부됐어요. 직접 선택해주세요.', 'error');
      autoWeatherBtn.disabled = false;
    }
  );
});

function weatherFromCode(code, temp) {
  if (code === 0 || code === 1) { return temp > 28 ? 'hot' : temp < 5 ? 'cold' : 'sunny'; }
  if (code <= 3 || (code >= 45 && code <= 48)) return temp < 5 ? 'cold' : 'cloudy';
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82) || code >= 95) return 'rainy';
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return 'snowy';
  return temp > 28 ? 'hot' : temp < 5 ? 'cold' : 'sunny';
}

function setWeatherStatus(msg, type) {
  weatherStatus.textContent = msg;
  weatherStatus.className = `weather-status ${type}`;
}

/* ================================================================
   Genre Selection
   ================================================================ */
document.querySelectorAll('.genre-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const g = chip.dataset.genre;
    if (g === 'all') {
      selectedGenres = new Set(['all']);
      document.querySelectorAll('.genre-chip').forEach(c =>
        c.classList.toggle('active', c.dataset.genre === 'all')
      );
    } else {
      selectedGenres.delete('all');
      document.querySelector('.genre-chip[data-genre="all"]').classList.remove('active');
      if (selectedGenres.has(g)) { selectedGenres.delete(g); chip.classList.remove('active'); }
      else                       { selectedGenres.add(g);    chip.classList.add('active');    }
      if (selectedGenres.size === 0) {
        selectedGenres.add('all');
        document.querySelector('.genre-chip[data-genre="all"]').classList.add('active');
      }
    }
  });
});

/* ================================================================
   Recommend Button
   ================================================================ */
function updateRecommendBtn() {
  const ready = selectedMood || selectedWeather;
  recommendBtn.disabled = !ready;
  hintText.textContent = ready
    ? '🟢 iTunes 실시간 추천 준비됨'
    : '기분 또는 날씨를 선택해주세요';
}

recommendBtn.addEventListener('click', () => recommend());
shuffleBtn.addEventListener('click',   () => recommend());

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  moodResultsSection.style.display    = tab === 'mood'    ? 'block' : 'none';
  weatherResultsSection.style.display = tab === 'weather' ? 'block' : 'none';
}

/* ================================================================
   Recommendation Engine
   ================================================================ */
async function recommend() {
  stopPreview();
  const genres = [...selectedGenres];

  showLoading(true);

  const [moodRes, weatherRes] = await Promise.allSettled([
    selectedMood    ? iTunes.getMoodRecommendations(selectedMood, genres)       : Promise.resolve([]),
    selectedWeather ? iTunes.getWeatherRecommendations(selectedWeather, genres) : Promise.resolve([]),
  ]);

  // 기분 결과
  if (selectedMood) {
    moodResults = moodRes.status === 'fulfilled'
      ? moodRes.value
      : (showToast('기분 추천 · 로컬 DB로 대체합니다'), localRecommendByMood(genres));
  } else {
    moodResults = [];
  }

  // 날씨 결과 (기분 섹션과 중복 곡 제거)
  if (selectedWeather) {
    let raw = weatherRes.status === 'fulfilled'
      ? weatherRes.value
      : localRecommendByWeather(genres);

    if (moodResults.length > 0) {
      const moodIds = new Set(moodResults.map(s => s.id));
      raw = raw.filter(s => !moodIds.has(s.id));
      if (raw.length < 5) {
        const local = localRecommendByWeather(genres).filter(s => !moodIds.has(String(s.id)));
        raw = [...raw, ...local].slice(0, 12);
      }
    }
    weatherResults = raw;
  } else {
    weatherResults = [];
  }

  showLoading(false);
  mainPlaceholder.classList.add('hidden');
  shuffleBtn.style.display = '';

  if (selectedMood)    renderMoodResults();
  if (selectedWeather) renderWeatherResults();

  // 탭 바 갱신
  const hasMood    = selectedMood    && moodResults.length > 0;
  const hasWeather = selectedWeather && weatherResults.length > 0;
  tabMoodBtn.style.display    = hasMood    ? '' : 'none';
  tabWeatherBtn.style.display = hasWeather ? '' : 'none';
  tabBar.style.display = (hasMood || hasWeather) ? '' : 'none';

  // 기본 활성 탭: 기분 우선, 없으면 날씨
  const defaultTab = hasMood ? 'mood' : 'weather';
  switchTab(defaultTab);

  setTimeout(() => tabBar.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
}

function localRecommendByMood(genres) {
  const filter = genres.includes('all') ? null : genres;
  let pool = LOCAL_SONGS.filter(s =>
    s.moods.includes(selectedMood) && (!filter || filter.includes(s.genre))
  );
  if (pool.length < 4) {
    const extra = LOCAL_SONGS.filter(s =>
      s.moods.includes(selectedMood) && !pool.find(p => p.id === s.id)
    );
    pool = [...pool, ...extra];
  }
  return shuffle(pool).slice(0, 12).map(s => ({ ...s, source: 'local' }));
}

function localRecommendByWeather(genres) {
  const filter = genres.includes('all') ? null : genres;
  let pool = LOCAL_SONGS.filter(s =>
    s.weather.includes(selectedWeather) && (!filter || filter.includes(s.genre))
  );
  if (pool.length < 4) {
    const extra = LOCAL_SONGS.filter(s =>
      s.weather.includes(selectedWeather) && !pool.find(p => p.id === s.id)
    );
    pool = [...pool, ...extra];
  }
  return shuffle(pool).slice(0, 12).map(s => ({ ...s, source: 'local' }));
}

function showLoading(on) {
  loadingEl.style.display = on ? 'block' : 'none';
  if (on) {
    moodResultsSection.classList.remove('visible');
    weatherResultsSection.classList.remove('visible');
  }
}

/* ================================================================
   Render Results
   ================================================================ */
function renderMoodResults() {
  moodResultsTitle.textContent    = `${MOOD_EMOJIS[selectedMood]} 기분 기반 추천`;
  moodSubtitle.textContent        = `${MOOD_LABELS[selectedMood]} · ${moodResults.length}곡 · ${moodResults[0]?.source === 'itunes' ? 'iTunes' : '로컬 DB'}`;
  moodNoResults.style.display     = moodResults.length === 0 ? 'block' : 'none';
  moodGrid.innerHTML              = '';
  moodResults.forEach((song, idx) => moodGrid.appendChild(createSongCard(song, idx)));
  moodResultsSection.classList.add('visible');
  moodResultsSection.style.display = 'none'; // 탭 전환 시 switchTab()이 제어
}

function renderWeatherResults() {
  weatherResultsTitle.textContent    = `${WEATHER_EMOJIS[selectedWeather]} 날씨 기반 추천`;
  weatherSubtitle.textContent        = `${WEATHER_LABELS[selectedWeather]} · ${weatherResults.length}곡 · ${weatherResults[0]?.source === 'itunes' ? 'iTunes' : '로컬 DB'}`;
  weatherNoResults.style.display     = weatherResults.length === 0 ? 'block' : 'none';
  weatherGrid.innerHTML              = '';
  weatherResults.forEach((song, idx) => weatherGrid.appendChild(createSongCard(song, idx)));
  weatherResultsSection.classList.add('visible');
  weatherResultsSection.style.display = 'none'; // 탭 전환 시 switchTab()이 제어
}

/* ================================================================
   Song Card
   ================================================================ */
function createSongCard(song, idx) {
  const isFav      = favorites.has(song.id);
  const card       = document.createElement('div');
  card.className   = 'song-card';
  card.style.animationDelay = `${idx * 0.04}s`;

  const genreKey   = song.genre || '';
  const genreColor = GENRE_COLORS[genreKey] || '#888';
  const ytQuery    = encodeURIComponent(`${song.artist} ${song.title}`);

  const artHTML = song.albumArt ? `
    <div class="song-art-container">
      <img class="song-art-img" src="${song.albumArt}" alt="${escHtml(song.title)}" loading="lazy">
      ${song.previewUrl ? `
        <div class="preview-overlay">
          <button class="play-preview-btn">▶</button>
        </div>
        <div class="preview-progress">
          <div class="preview-progress-fill"></div>
        </div>` : ''}
    </div>` :
    `<div class="song-art-bar" style="background:linear-gradient(90deg,${genreColor}aa,${genreColor}33)"></div>`;

  const genreTag   = genreKey
    ? `<span class="tag tag-genre ${genreKey}">${genreKey.toUpperCase()}</span>` : '';
  const sourceTag  = song.source === 'itunes'
    ? `<span class="tag tag-source-itunes">iTunes</span>`
    : `<span class="tag tag-source-local">로컬 DB</span>`;
  const appleBtnHTML = song.trackUrl
    ? `<button class="apple-btn" onclick="window.open('${song.trackUrl}','_blank')">🍎 Apple Music</button>` : '';

  card.innerHTML = `
    ${artHTML}
    <div class="song-body">
      <div class="song-top">
        <div class="song-info">
          <div class="song-title">${escHtml(song.title)}</div>
          <div class="song-artist">${escHtml(song.artist)}</div>
          ${song.album ? `<div class="song-album">${escHtml(song.album)}</div>` : ''}
        </div>
        <button class="fav-btn" data-id="${song.id}">${isFav ? '❤️' : '🤍'}</button>
      </div>
      <div class="song-tags">${genreTag}${sourceTag}</div>
      <div class="song-footer">
        <button class="yt-btn"
          onclick="window.open('https://www.youtube.com/results?search_query=${ytQuery}','_blank')">
          ▶ YouTube
        </button>
        ${appleBtnHTML}
      </div>
    </div>`;

  card.querySelector('.fav-btn').addEventListener('click', e =>
    toggleFavorite(song.id, e.currentTarget)
  );
  if (song.previewUrl) {
    card.querySelector('.play-preview-btn')?.addEventListener('click', e => {
      e.stopPropagation();
      togglePreview(song.id, song.previewUrl, e.currentTarget);
    });
  }

  return card;
}

/* ================================================================
   Audio Preview
   ================================================================ */
function togglePreview(id, url, btn) {
  if (currentAudio && !currentAudio.paused) {
    currentAudio.pause();
    currentPlayBtn?.classList.remove('playing');
    if (currentPlayBtn) currentPlayBtn.textContent = '▶';
    clearProgressInterval();
    if (currentPlayBtn === btn) { currentAudio = null; currentPlayBtn = null; return; }
  }
  const audio = new Audio(url);
  audio.volume = 0.75;
  currentAudio = audio;
  currentPlayBtn = btn;
  btn.textContent = '⏹';
  btn.classList.add('playing');

  const container = btn.closest('.song-art-container');
  const fill      = container?.querySelector('.preview-progress-fill');
  if (fill) {
    window._progressInterval = setInterval(() => {
      if (audio.duration) fill.style.width = (audio.currentTime / audio.duration * 100) + '%';
    }, 300);
  }
  audio.play().catch(() => showToast('미리듣기를 재생할 수 없어요'));
  audio.addEventListener('ended', () => {
    btn.textContent = '▶';
    btn.classList.remove('playing');
    if (fill) fill.style.width = '0%';
    clearProgressInterval();
  });
}

function stopPreview() {
  currentAudio?.pause();
  currentAudio = null;
  if (currentPlayBtn) {
    currentPlayBtn.textContent = '▶';
    currentPlayBtn.classList.remove('playing');
    currentPlayBtn = null;
  }
  clearProgressInterval();
}

function clearProgressInterval() {
  if (window._progressInterval) {
    clearInterval(window._progressInterval);
    window._progressInterval = null;
  }
}

/* ================================================================
   Favorites
   ================================================================ */
function toggleFavorite(id, btn) {
  if (favorites.has(id)) {
    favorites.delete(id);
    btn.textContent = '🤍';
    showToast('즐겨찾기에서 제거했어요');
  } else {
    favorites.add(id);
    btn.textContent = '❤️';
    showToast('즐겨찾기에 추가했어요 ❤️');
  }
  localStorage.setItem('moodtune_favs', JSON.stringify([...favorites]));
}

/* ================================================================
   Status Indicator
   ================================================================ */
function updateStatusUI() {
  statusEl.className      = 'spotify-status spotify-status--connected';
  statusLabel.textContent = 'iTunes 실시간 추천';
}

/* ================================================================
   Init
   ================================================================ */
updateStatusUI();

/* ================================================================
   Helpers
   ================================================================ */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function escHtml(s) {
  return String(s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}
