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
  { id:77,  title:"Cherry Wine",               artist:"Hozier",                genre:"indie",  moods:["romantic","calm"],        weather:["rainy","cloudy"]   },
  // K-Pop 추가
  { id:78,  title:"ELEVEN",                    artist:"IVE",                   genre:"kpop",   moods:["happy","energetic"],      weather:["sunny","hot"]      },
  { id:79,  title:"After LIKE",                artist:"IVE",                   genre:"kpop",   moods:["happy","energetic"],      weather:["sunny"]            },
  { id:80,  title:"FEARLESS",                  artist:"LE SSERAFIM",           genre:"kpop",   moods:["energetic"],              weather:["sunny","hot"]      },
  { id:81,  title:"ANTIFRAGILE",               artist:"LE SSERAFIM",           genre:"kpop",   moods:["energetic"],              weather:["sunny","hot"]      },
  { id:82,  title:"Tomboy",                    artist:"(G)I-DLE",              genre:"kpop",   moods:["energetic"],              weather:["sunny","cloudy"]   },
  { id:83,  title:"Queencard",                 artist:"(G)I-DLE",              genre:"kpop",   moods:["happy","energetic"],      weather:["sunny","hot"]      },
  { id:84,  title:"View",                      artist:"SHINee",                genre:"kpop",   moods:["calm","happy"],           weather:["sunny","cloudy"]   },
  { id:85,  title:"Ko Ko Bop",                 artist:"EXO",                   genre:"kpop",   moods:["happy","energetic"],      weather:["sunny","hot"]      },
  { id:86,  title:"Bang Bang Bang",            artist:"BIGBANG",               genre:"kpop",   moods:["energetic"],              weather:["sunny","hot"]      },
  { id:87,  title:"Blue",                      artist:"BIGBANG",               genre:"kpop",   moods:["sad","melancholy"],       weather:["cold","rainy"]     },
  { id:88,  title:"I Am the Best",             artist:"2NE1",                  genre:"kpop",   moods:["energetic"],              weather:["sunny","hot"]      },
  { id:89,  title:"Lonely",                    artist:"2NE1",                  genre:"kpop",   moods:["sad","melancholy"],       weather:["rainy","cloudy"]   },
  { id:90,  title:"Palette",                   artist:"IU",                    genre:"kpop",   moods:["happy","calm"],           weather:["sunny"]            },
  { id:91,  title:"BBIBBI",                    artist:"IU",                    genre:"kpop",   moods:["happy","energetic"],      weather:["sunny"]            },
  { id:92,  title:"Euphoria",                  artist:"BTS",                   genre:"kpop",   moods:["happy","calm"],           weather:["sunny"]            },
  { id:93,  title:"ON",                        artist:"BTS",                   genre:"kpop",   moods:["energetic"],              weather:["cloudy"]           },
  { id:94,  title:"Melted",                    artist:"AKMU",                  genre:"kpop",   moods:["calm","melancholy"],      weather:["cloudy","cold"]    },
  { id:95,  title:"How Can I Love the Heartbreak", artist:"AKMU",             genre:"kpop",   moods:["sad","melancholy"],       weather:["rainy"]            },
  { id:96,  title:"Me After You",              artist:"Paul Kim",              genre:"kpop",   moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  { id:97,  title:"Instagram",                 artist:"DEAN",                  genre:"kpop",   moods:["melancholy","calm"],      weather:["cloudy","cold"]    },
  { id:98,  title:"She's Fine",                artist:"Heize",                 genre:"kpop",   moods:["melancholy","calm"],      weather:["rainy","cloudy"]   },
  { id:99,  title:"Black Swan",                artist:"BTS",                   genre:"kpop",   moods:["melancholy","sad"],       weather:["cloudy"]           },
  { id:100, title:"Im Hero",                   artist:"Lim Young-woong",       genre:"kpop",   moods:["romantic","calm"],        weather:["cloudy","sunny"]   },
  { id:101, title:"Beautiful",                 artist:"MONSTA X",              genre:"kpop",   moods:["romantic","calm"],        weather:["rainy","cloudy"]   },
  { id:102, title:"Lovesong",                  artist:"CNBLUE",                genre:"kpop",   moods:["romantic","sad"],         weather:["rainy","cloudy"]   },
  { id:103, title:"Gravity",                   artist:"WOODZ",                 genre:"kpop",   moods:["romantic","melancholy"],  weather:["rainy","cold"]     },
  { id:104, title:"Flicker",                   artist:"WINNER",                genre:"kpop",   moods:["calm","melancholy"],      weather:["cloudy","cold"]    },
  { id:105, title:"Polaroid",                  artist:"Lim Chang-jung",        genre:"kpop",   moods:["romantic","sad"],         weather:["rainy"]            },
  { id:106, title:"Fine",                      artist:"TAEYEON",               genre:"kpop",   moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  { id:107, title:"Make A Wish",               artist:"EXO-CBX",               genre:"kpop",   moods:["happy","energetic"],      weather:["sunny"]            },
  { id:108, title:"Rollin'",                   artist:"Brave Girls",           genre:"kpop",   moods:["happy","energetic"],      weather:["sunny","hot"]      },
  { id:109, title:"Coin",                      artist:"IU",                    genre:"kpop",   moods:["happy","energetic"],      weather:["sunny"]            },
  { id:110, title:"Christmas Tree",            artist:"V (BTS)",               genre:"kpop",   moods:["romantic","calm"],        weather:["cold","snowy"]     },
  // J-Pop 추가
  { id:111, title:"前前前世",                    artist:"RADWIMPS",              genre:"jpop",   moods:["happy","energetic"],      weather:["sunny"]            },
  { id:112, title:"ダンスホール",                 artist:"Mrs. GREEN APPLE",      genre:"jpop",   moods:["happy","energetic"],      weather:["sunny","hot"]      },
  { id:113, title:"白日",                        artist:"King Gnu",              genre:"jpop",   moods:["melancholy","sad"],       weather:["cold","cloudy"]    },
  { id:114, title:"群青",                        artist:"YOASOBI",               genre:"jpop",   moods:["energetic","happy"],      weather:["sunny"]            },
  { id:115, title:"PaleBlue",                  artist:"Kenshi Yonezu",         genre:"jpop",   moods:["sad","romantic"],         weather:["rainy","cold"]     },
  { id:116, title:"紅蓮華",                      artist:"LiSA",                  genre:"jpop",   moods:["energetic"],              weather:["sunny"]            },
  { id:117, title:"残響散歌",                    artist:"Aimer",                 genre:"jpop",   moods:["energetic","melancholy"], weather:["cloudy"]           },
  { id:118, title:"First Love",                artist:"Hikaru Utada",          genre:"jpop",   moods:["romantic","calm"],        weather:["rainy","cold"]     },
  { id:119, title:"Flavor Of Life",            artist:"Hikaru Utada",          genre:"jpop",   moods:["romantic","calm"],        weather:["cloudy","rainy"]   },
  { id:120, title:"366日",                      artist:"HY",                    genre:"jpop",   moods:["sad","melancholy"],       weather:["rainy","cloudy"]   },
  { id:121, title:"夜空ノムコウ",                  artist:"SMAP",                  genre:"jpop",   moods:["melancholy","calm"],      weather:["cold","cloudy"]    },
  { id:122, title:"Orion",                     artist:"Kenshi Yonezu",         genre:"jpop",   moods:["sad","melancholy"],       weather:["cold","snowy"]     },
  { id:123, title:"Kick Back",                 artist:"Kenshi Yonezu",         genre:"jpop",   moods:["energetic","happy"],      weather:["sunny","hot"]      },
  { id:124, title:"Nanimono",                  artist:"Kenshi Yonezu",         genre:"jpop",   moods:["melancholy","calm"],      weather:["cloudy","rainy"]   },
  // Pop 추가
  { id:125, title:"Save Your Tears",           artist:"The Weeknd",            genre:"pop",    moods:["sad","melancholy"],       weather:["cold","rainy"]     },
  { id:126, title:"Starboy",                   artist:"The Weeknd",            genre:"pop",    moods:["energetic"],              weather:["hot","sunny"]      },
  { id:127, title:"Peaches",                   artist:"Justin Bieber",         genre:"pop",    moods:["calm","happy"],           weather:["sunny"]            },
  { id:128, title:"Love Yourself",             artist:"Justin Bieber",         genre:"pop",    moods:["sad","melancholy"],       weather:["cloudy"]           },
  { id:129, title:"Someone Like You",          artist:"Adele",                 genre:"pop",    moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  { id:130, title:"Hello",                     artist:"Adele",                 genre:"pop",    moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  { id:131, title:"Stay With Me",              artist:"Sam Smith",             genre:"pop",    moods:["sad","romantic"],         weather:["rainy","cold"]     },
  { id:132, title:"Say So",                    artist:"Doja Cat",              genre:"pop",    moods:["happy","energetic"],      weather:["sunny","hot"]      },
  { id:133, title:"Don't Start Now",           artist:"Dua Lipa",              genre:"pop",    moods:["energetic","happy"],      weather:["sunny"]            },
  { id:134, title:"New Rules",                 artist:"Dua Lipa",              genre:"pop",    moods:["energetic","happy"],      weather:["sunny"]            },
  { id:135, title:"Yellow",                    artist:"Coldplay",              genre:"pop",    moods:["romantic","calm"],        weather:["sunny","cloudy"]   },
  { id:136, title:"The Scientist",             artist:"Coldplay",              genre:"pop",    moods:["sad","melancholy"],       weather:["rainy"]            },
  { id:137, title:"Demons",                    artist:"Imagine Dragons",       genre:"pop",    moods:["sad","melancholy"],       weather:["cloudy"]           },
  { id:138, title:"We Don't Talk Anymore",     artist:"Charlie Puth",          genre:"pop",    moods:["sad","melancholy"],       weather:["cold","rainy"]     },
  { id:139, title:"Treat You Better",          artist:"Shawn Mendes",          genre:"pop",    moods:["romantic","energetic"],   weather:["sunny"]            },
  { id:140, title:"Uptown Funk",               artist:"Bruno Mars",            genre:"pop",    moods:["happy","energetic"],      weather:["sunny","hot"]      },
  { id:141, title:"Shape of You",              artist:"Ed Sheeran",            genre:"pop",    moods:["happy","energetic"],      weather:["sunny"]            },
  { id:142, title:"thank u, next",             artist:"Ariana Grande",         genre:"pop",    moods:["happy","energetic"],      weather:["sunny","cloudy"]   },
  { id:143, title:"Lose You To Love Me",       artist:"Selena Gomez",          genre:"pop",    moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  { id:144, title:"positions",                 artist:"Ariana Grande",         genre:"pop",    moods:["romantic","calm"],        weather:["sunny","cloudy"]   },
  { id:145, title:"Flowers",                   artist:"Miley Cyrus",           genre:"pop",    moods:["happy","energetic"],      weather:["sunny"]            },
  { id:146, title:"Anti-Hero",                 artist:"Taylor Swift",          genre:"pop",    moods:["melancholy","calm"],      weather:["cloudy","rainy"]   },
  // Hip-Hop 추가
  { id:148, title:"See You Again",             artist:"Tyler, the Creator",    genre:"hiphop", moods:["calm","happy"],           weather:["sunny"]            },
  { id:149, title:"No Role Modelz",            artist:"J. Cole",               genre:"hiphop", moods:["energetic"],              weather:["sunny","hot"]      },
  { id:150, title:"Good News",                 artist:"Mac Miller",            genre:"hiphop", moods:["calm","happy"],           weather:["sunny"]            },
  { id:151, title:"Redbone",                   artist:"Childish Gambino",      genre:"hiphop", moods:["romantic","calm"],        weather:["cloudy","rainy"]   },
  { id:152, title:"Industry Baby",             artist:"Lil Nas X",             genre:"hiphop", moods:["energetic","happy"],      weather:["sunny","hot"]      },
  { id:153, title:"SICKO MODE",                artist:"Travis Scott",          genre:"hiphop", moods:["energetic"],              weather:["hot","sunny"]      },
  { id:154, title:"CELEB",                     artist:"Zico",                  genre:"hiphop", moods:["happy","energetic"],      weather:["sunny"]            },
  { id:155, title:"Pursuit of Happiness",      artist:"Kid Cudi",              genre:"hiphop", moods:["energetic","melancholy"], weather:["cloudy"]           },
  { id:156, title:"All the Stars",             artist:"Kendrick Lamar",        genre:"hiphop", moods:["calm","energetic"],       weather:["sunny"]            },
  { id:157, title:"WIFI",                      artist:"pH-1",                  genre:"hiphop", moods:["happy","energetic"],      weather:["sunny"]            },
  // R&B 추가
  { id:158, title:"Sure Thing",                artist:"Miguel",                genre:"rnb",    moods:["romantic","calm"],        weather:["sunny"]            },
  { id:159, title:"Trip",                      artist:"Jhené Aiko",            genre:"rnb",    moods:["calm","melancholy"],      weather:["cloudy"]           },
  { id:160, title:"Get You",                   artist:"Daniel Caesar",         genre:"rnb",    moods:["romantic","calm"],        weather:["sunny","rainy"]    },
  { id:161, title:"Heartbreak Anniversary",    artist:"Giveon",                genre:"rnb",    moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  { id:162, title:"Kill Bill",                 artist:"SZA",                   genre:"rnb",    moods:["sad","energetic"],        weather:["cloudy"]           },
  { id:163, title:"Playing Games",             artist:"Summer Walker",         genre:"rnb",    moods:["sad","melancholy"],       weather:["rainy"]            },
  { id:164, title:"Essence",                   artist:"Wizkid",                genre:"rnb",    moods:["romantic","calm"],        weather:["sunny","hot"]      },
  { id:165, title:"Come Through",              artist:"H.E.R.",                genre:"rnb",    moods:["romantic","calm"],        weather:["sunny","cloudy"]   },
  { id:166, title:"Put It On Me",              artist:"Matt Cab",              genre:"rnb",    moods:["romantic","calm"],        weather:["rainy","cloudy"]   },
  // Indie 추가
  { id:167, title:"Anchor",                    artist:"Novo Amor",             genre:"indie",  moods:["calm","melancholy"],      weather:["cold","cloudy"]    },
  { id:168, title:"Skinny Love",               artist:"Bon Iver",              genre:"indie",  moods:["sad","melancholy"],       weather:["cold","snowy"]     },
  { id:169, title:"Somebody Else",             artist:"The 1975",              genre:"indie",  moods:["melancholy","sad"],       weather:["cold","rainy"]     },
  { id:170, title:"Chocolate",                 artist:"The 1975",              genre:"indie",  moods:["energetic","happy"],      weather:["sunny"]            },
  { id:171, title:"Do I Wanna Know?",          artist:"Arctic Monkeys",        genre:"indie",  moods:["melancholy","calm"],      weather:["cloudy"]           },
  { id:172, title:"R U Mine?",                 artist:"Arctic Monkeys",        genre:"indie",  moods:["energetic"],              weather:["cloudy"]           },
  { id:173, title:"Goodie Bag",                artist:"Still Woozy",           genre:"indie",  moods:["happy","calm"],           weather:["sunny"]            },
  { id:174, title:"This Is Home",              artist:"Cavetown",              genre:"indie",  moods:["calm","melancholy"],      weather:["cold","cloudy"]    },
  { id:175, title:"Coffee",                    artist:"beabadoobee",           genre:"indie",  moods:["calm","happy"],           weather:["sunny","cloudy"]   },
  { id:176, title:"Chamber of Reflection",     artist:"Mac DeMarco",           genre:"indie",  moods:["melancholy","calm"],      weather:["cloudy","cold"]    },
  { id:177, title:"Nobody",                    artist:"Mitski",                genre:"indie",  moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  { id:178, title:"Motion Sickness",           artist:"Phoebe Bridgers",       genre:"indie",  moods:["sad","melancholy"],       weather:["rainy","cloudy"]   },
  { id:179, title:"Stick Season",              artist:"Noah Kahan",            genre:"indie",  moods:["melancholy","sad"],       weather:["cold","cloudy"]    },
  { id:180, title:"Everywhere, Everything",    artist:"Noah Kahan",            genre:"indie",  moods:["romantic","happy"],       weather:["sunny"]            },
  { id:181, title:"Mess Is Mine",              artist:"Vance Joy",             genre:"indie",  moods:["romantic","happy"],       weather:["sunny","cloudy"]   },
  { id:182, title:"Riptide",                   artist:"Vance Joy",             genre:"indie",  moods:["happy","calm"],           weather:["sunny","cloudy"]   },
  { id:183, title:"Fast Car",                  artist:"Tracy Chapman",         genre:"indie",  moods:["melancholy","calm"],      weather:["cloudy","rainy"]   },
  { id:184, title:"Sweater Weather",           artist:"The Neighbourhood",     genre:"indie",  moods:["melancholy","calm"],      weather:["cold","cloudy"]    },
  { id:185, title:"Afraid",                    artist:"The Neighbourhood",     genre:"indie",  moods:["sad","melancholy"],       weather:["cold","rainy"]     },
  // K-Pop 추가 2차
  { id:186, title:"Supernova",                 artist:"aespa",                 genre:"kpop",   moods:["energetic"],              weather:["sunny","hot"]      },
  { id:187, title:"Drama",                     artist:"aespa",                 genre:"kpop",   moods:["energetic"],              weather:["cloudy"]           },
  { id:188, title:"Rock with You",             artist:"SEVENTEEN",             genre:"kpop",   moods:["happy","energetic"],      weather:["sunny"]            },
  { id:189, title:"Fallin' Flower",            artist:"SEVENTEEN",             genre:"kpop",   moods:["melancholy","calm"],      weather:["cloudy","cold"]    },
  { id:190, title:"HIP",                       artist:"MAMAMOO",               genre:"kpop",   moods:["energetic"],              weather:["sunny","hot"]      },
  { id:191, title:"Wind Flower",               artist:"MAMAMOO",               genre:"kpop",   moods:["romantic","calm"],        weather:["rainy","cloudy"]   },
  { id:192, title:"위잉위잉",                    artist:"Hyukoh",                genre:"kpop",   moods:["melancholy","calm"],      weather:["rainy","cloudy"]   },
  { id:193, title:"Love YoYo",                 artist:"Hyukoh",                genre:"kpop",   moods:["calm","happy"],           weather:["sunny","cloudy"]   },
  { id:194, title:"Americano",                 artist:"10cm",                  genre:"kpop",   moods:["happy","calm"],           weather:["sunny"]            },
  { id:195, title:"Shoot Me",                  artist:"DAY6",                  genre:"kpop",   moods:["energetic","sad"],        weather:["cloudy"]           },
  { id:196, title:"You Were Beautiful",        artist:"DAY6",                  genre:"kpop",   moods:["sad","melancholy"],       weather:["rainy"]            },
  { id:197, title:"Just Right",                artist:"GOT7",                  genre:"kpop",   moods:["happy","energetic"],      weather:["sunny"]            },
  { id:198, title:"Empty",                     artist:"WINNER",                genre:"kpop",   moods:["sad","melancholy"],       weather:["cold","rainy"]     },
  { id:199, title:"Kick It",                   artist:"NCT 127",               genre:"kpop",   moods:["energetic"],              weather:["sunny","hot"]      },
  { id:200, title:"Candy",                     artist:"NCT DREAM",             genre:"kpop",   moods:["happy","energetic"],      weather:["sunny"]            },
  { id:201, title:"ASAP",                      artist:"STAYC",                 genre:"kpop",   moods:["happy","energetic"],      weather:["sunny"]            },
  { id:202, title:"4 Walls",                   artist:"f(x)",                  genre:"kpop",   moods:["calm"],                   weather:["cloudy"]           },
  { id:203, title:"The Chaser",                artist:"INFINITE",              genre:"kpop",   moods:["energetic"],              weather:["sunny"]            },
  { id:204, title:"Sorry Sorry",               artist:"Super Junior",          genre:"kpop",   moods:["energetic","happy"],      weather:["sunny","hot"]      },
  { id:205, title:"Given-Taken",               artist:"ENHYPEN",               genre:"kpop",   moods:["sad","melancholy"],       weather:["cold","rainy"]     },
  { id:206, title:"0X1=LOVESONG",              artist:"TXT",                   genre:"kpop",   moods:["sad","energetic"],        weather:["rainy","cloudy"]   },
  { id:207, title:"Can't You See Me?",         artist:"TXT",                   genre:"kpop",   moods:["sad"],                    weather:["cold","cloudy"]    },
  { id:208, title:"Kitsch",                    artist:"IVE",                   genre:"kpop",   moods:["happy","energetic"],      weather:["sunny"]            },
  { id:209, title:"Antidote",                  artist:"Kang Daniel",           genre:"kpop",   moods:["happy","energetic"],      weather:["sunny","hot"]      },
  { id:210, title:"Lie",                       artist:"BTS",                   genre:"kpop",   moods:["melancholy","sad"],       weather:["cloudy","cold"]    },
  // J-Pop 추가 2차
  { id:211, title:"新時代",                      artist:"Ado",                   genre:"jpop",   moods:["energetic","happy"],      weather:["sunny","hot"]      },
  { id:212, title:"うたかた花火",                 artist:"Ado",                   genre:"jpop",   moods:["melancholy","sad"],       weather:["rainy"]            },
  { id:213, title:"青と夏",                      artist:"Mrs. GREEN APPLE",      genre:"jpop",   moods:["happy","energetic"],      weather:["sunny","hot"]      },
  { id:214, title:"天体観測",                    artist:"BUMP OF CHICKEN",       genre:"jpop",   moods:["calm","melancholy"],      weather:["cold","cloudy"]    },
  { id:215, title:"しるし",                      artist:"Mr.Children",           genre:"jpop",   moods:["sad","romantic"],         weather:["rainy"]            },
  { id:216, title:"愛をこめて花束を",              artist:"Superfly",              genre:"jpop",   moods:["romantic","calm"],        weather:["sunny"]            },
  { id:217, title:"AGAIN",                     artist:"YUI",                   genre:"jpop",   moods:["energetic"],              weather:["sunny"]            },
  { id:218, title:"廻廻奇譚",                    artist:"Eve",                   genre:"jpop",   moods:["energetic"],              weather:["cloudy"]           },
  { id:219, title:"心臓",                        artist:"Tooboe",                genre:"jpop",   moods:["melancholy","calm"],      weather:["rainy","cold"]     },
  { id:220, title:"ハンサム",                    artist:"zutomayo",              genre:"jpop",   moods:["energetic","happy"],      weather:["sunny"]            },
  { id:221, title:"眩いばかり",                  artist:"Aimer",                 genre:"jpop",   moods:["romantic","calm"],        weather:["sunny","cloudy"]   },
  { id:222, title:"夏色",                        artist:"Yuzu",                  genre:"jpop",   moods:["happy","energetic"],      weather:["sunny","hot"]      },
  // Pop 추가 2차
  { id:223, title:"Halo",                      artist:"Beyoncé",               genre:"pop",    moods:["romantic","calm"],        weather:["sunny"]            },
  { id:224, title:"Talking to the Moon",       artist:"Bruno Mars",            genre:"pop",    moods:["sad","romantic"],         weather:["cold","rainy"]     },
  { id:225, title:"All of Me",                 artist:"John Legend",           genre:"pop",    moods:["romantic","calm"],        weather:["rainy","cloudy"]   },
  { id:226, title:"Sugar",                     artist:"Maroon 5",              genre:"pop",    moods:["happy","energetic"],      weather:["sunny","hot"]      },
  { id:227, title:"Maps",                      artist:"Maroon 5",              genre:"pop",    moods:["sad","melancholy"],       weather:["rainy"]            },
  { id:228, title:"Say You Won't Let Go",      artist:"James Arthur",          genre:"pop",    moods:["romantic","calm"],        weather:["rainy","cloudy"]   },
  { id:229, title:"Someone You Loved",         artist:"Lewis Capaldi",         genre:"pop",    moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  { id:230, title:"vampire",                   artist:"Olivia Rodrigo",        genre:"pop",    moods:["energetic","sad"],        weather:["cloudy"]           },
  { id:231, title:"Matilda",                   artist:"Harry Styles",          genre:"pop",    moods:["sad","calm"],             weather:["cloudy","rainy"]   },
  { id:232, title:"Heather",                   artist:"Conan Gray",            genre:"pop",    moods:["sad","melancholy"],       weather:["cold","rainy"]     },
  { id:233, title:"Astronomy",                 artist:"Conan Gray",            genre:"pop",    moods:["melancholy","sad"],       weather:["cold","cloudy"]    },
  { id:234, title:"Heat Waves",                artist:"Glass Animals",         genre:"pop",    moods:["melancholy","calm"],      weather:["cloudy","rainy"]   },
  { id:235, title:"Let It Happen",             artist:"Tame Impala",           genre:"pop",    moods:["energetic","calm"],       weather:["sunny"]            },
  { id:236, title:"lovely",                    artist:"Billie Eilish",         genre:"pop",    moods:["sad","melancholy"],       weather:["cold","rainy"]     },
  { id:237, title:"Until I Found You",         artist:"Stephen Sanchez",       genre:"pop",    moods:["romantic","calm"],        weather:["sunny","cloudy"]   },
  { id:238, title:"Calm Down",                 artist:"Rema",                  genre:"pop",    moods:["happy","calm"],           weather:["sunny","hot"]      },
  { id:239, title:"Summertime Sadness",        artist:"Lana Del Rey",          genre:"pop",    moods:["sad","melancholy"],       weather:["cloudy","sunny"]   },
  { id:240, title:"Video Games",               artist:"Lana Del Rey",          genre:"pop",    moods:["calm","romantic"],        weather:["cloudy"]           },
  { id:241, title:"HEAVEN",                    artist:"Troye Sivan",           genre:"pop",    moods:["sad","romantic"],         weather:["rainy","cold"]     },
  { id:242, title:"After Hours",               artist:"The Weeknd",            genre:"pop",    moods:["melancholy","sad"],       weather:["cold","rainy"]     },
  { id:243, title:"Sober",                     artist:"Demi Lovato",           genre:"pop",    moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  // Hip-Hop 추가 2차
  { id:244, title:"Passionfruit",              artist:"Drake",                 genre:"hiphop", moods:["romantic","calm"],        weather:["rainy","cloudy"]   },
  { id:245, title:"One Dance",                 artist:"Drake",                 genre:"hiphop", moods:["happy","calm"],           weather:["sunny","hot"]      },
  { id:246, title:"Congratulations",           artist:"Post Malone",           genre:"hiphop", moods:["melancholy","calm"],      weather:["cloudy"]           },
  { id:247, title:"Make It Better",            artist:"Anderson .Paak",        genre:"hiphop", moods:["romantic","calm"],        weather:["sunny"]            },
  { id:248, title:"Self Care",                 artist:"Mac Miller",            genre:"hiphop", moods:["melancholy","calm"],      weather:["cloudy"]           },
  { id:249, title:"EARFQUAKE",                 artist:"Tyler, the Creator",    genre:"hiphop", moods:["romantic","calm"],        weather:["cloudy","rainy"]   },
  { id:250, title:"WUSYANAME",                 artist:"Tyler, the Creator",    genre:"hiphop", moods:["calm","happy"],           weather:["sunny"]            },
  { id:251, title:"SUGAR",                     artist:"Brockhampton",          genre:"hiphop", moods:["happy","energetic"],      weather:["sunny"]            },
  // R&B 추가 2차
  { id:252, title:"Could've Been",             artist:"H.E.R.",                genre:"rnb",    moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  { id:253, title:"Shea Butter Baby",          artist:"Ari Lennox",            genre:"rnb",    moods:["happy","calm"],           weather:["sunny"]            },
  { id:254, title:"Earned It",                 artist:"The Weeknd",            genre:"rnb",    moods:["romantic","melancholy"],  weather:["rainy","cold"]     },
  { id:255, title:"None of Your Concern",      artist:"Jhené Aiko",            genre:"rnb",    moods:["sad","calm"],             weather:["rainy","cold"]     },
  { id:256, title:"Snooze",                    artist:"SZA",                   genre:"rnb",    moods:["romantic","calm"],        weather:["cloudy","rainy"]   },
  { id:257, title:"If I Ain't Got You",        artist:"Alicia Keys",           genre:"rnb",    moods:["romantic","calm"],        weather:["sunny","rainy"]    },
  { id:258, title:"Nights",                    artist:"Frank Ocean",           genre:"rnb",    moods:["melancholy","calm"],      weather:["cold","rainy"]     },
  { id:259, title:"Superposition",             artist:"Daniel Caesar",         genre:"rnb",    moods:["calm","romantic"],        weather:["sunny","cloudy"]   },
  { id:260, title:"Golden Hour",               artist:"JVKE",                  genre:"rnb",    moods:["romantic","happy"],       weather:["sunny"]            },
  // Indie 추가 2차
  { id:261, title:"Work Song",                 artist:"Hozier",                genre:"indie",  moods:["romantic","calm"],        weather:["sunny","cloudy"]   },
  { id:262, title:"Be Sweet",                  artist:"Japanese Breakfast",    genre:"indie",  moods:["happy","energetic"],      weather:["sunny"]            },
  { id:263, title:"Savior Complex",            artist:"Phoebe Bridgers",       genre:"indie",  moods:["melancholy","calm"],      weather:["cold","cloudy"]    },
  { id:264, title:"Not Strong Enough",         artist:"boygenius",             genre:"indie",  moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  { id:265, title:"Show Me How",               artist:"Men I Trust",           genre:"indie",  moods:["calm","romantic"],        weather:["rainy","cloudy"]   },
  { id:266, title:"Lovers Rock",               artist:"TV Girl",               genre:"indie",  moods:["calm","romantic"],        weather:["rainy","cloudy"]   },
  { id:267, title:"Movies",                    artist:"Weyes Blood",           genre:"indie",  moods:["melancholy","calm"],      weather:["cold","cloudy"]    },
  { id:268, title:"circle the drain",          artist:"Soccer Mommy",          genre:"indie",  moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  { id:269, title:"Pristine",                  artist:"Snail Mail",            genre:"indie",  moods:["melancholy","calm"],      weather:["cold","cloudy"]    },
  { id:270, title:"I Wanna Get Better",        artist:"Bleachers",             genre:"indie",  moods:["energetic","happy"],      weather:["sunny"]            },
  { id:271, title:"Archie, Marry Me",          artist:"Alvvays",               genre:"indie",  moods:["happy","romantic"],       weather:["sunny"]            },
  { id:272, title:"Way It Goes",               artist:"Hippo Campus",          genre:"indie",  moods:["melancholy","calm"],      weather:["cloudy","cold"]    },
  { id:273, title:"Sunsetz",                   artist:"Cigarettes After Sex",  genre:"indie",  moods:["romantic","calm"],        weather:["cold","rainy"]     },
  { id:274, title:"Bags",                      artist:"Clairo",                genre:"indie",  moods:["calm","romantic"],        weather:["cloudy","sunny"]   },
  { id:275, title:"Corduroy Dreams",           artist:"Rex Orange County",     genre:"indie",  moods:["calm","melancholy"],      weather:["cloudy","rainy"]   },
  { id:276, title:"State Lines",               artist:"Novo Amor",             genre:"indie",  moods:["calm","melancholy"],      weather:["cold","cloudy"]    },
  { id:277, title:"Death With Dignity",        artist:"Sufjan Stevens",        genre:"indie",  moods:["melancholy","calm"],      weather:["cold","snowy"]     },
  { id:278, title:"Bloodbank",                 artist:"Bon Iver",              genre:"indie",  moods:["calm","romantic"],        weather:["cold","snowy"]     },
  { id:279, title:"Laura",                     artist:"Bat for Lashes",        genre:"indie",  moods:["melancholy","calm"],      weather:["cold","rainy"]     },
  { id:280, title:"Holocene",                  artist:"Bon Iver",              genre:"indie",  moods:["melancholy","calm"],      weather:["cold","cloudy"]    },
  // K-Pop 추가 3차
  { id:281, title:"Pink Venom",               artist:"BLACKPINK",             genre:"kpop",   moods:["energetic"],              weather:["hot","sunny"]      },
  { id:282, title:"Shut Down",                artist:"BLACKPINK",             genre:"kpop",   moods:["energetic"],              weather:["hot","sunny"]      },
  { id:283, title:"Fire",                     artist:"BTS",                   genre:"kpop",   moods:["energetic"],              weather:["hot","sunny"]      },
  { id:284, title:"DNA",                      artist:"BTS",                   genre:"kpop",   moods:["happy","energetic"],      weather:["sunny"]            },
  { id:285, title:"IDOL",                     artist:"BTS",                   genre:"kpop",   moods:["happy","energetic"],      weather:["hot","sunny"]      },
  { id:286, title:"Power",                    artist:"EXO",                   genre:"kpop",   moods:["energetic","happy"],      weather:["hot","sunny"]      },
  { id:287, title:"Love Shot",                artist:"EXO",                   genre:"kpop",   moods:["romantic","energetic"],   weather:["cold","cloudy"]    },
  { id:288, title:"Replay",                   artist:"SHINee",                genre:"kpop",   moods:["romantic","sad"],         weather:["cold","rainy"]     },
  { id:289, title:"Cheer Up",                 artist:"TWICE",                 genre:"kpop",   moods:["happy","energetic"],      weather:["sunny"]            },
  { id:290, title:"TT",                       artist:"TWICE",                 genre:"kpop",   moods:["sad","melancholy"],       weather:["rainy","cloudy"]   },
  { id:291, title:"What is Love?",            artist:"TWICE",                 genre:"kpop",   moods:["happy","romantic"],       weather:["sunny"]            },
  { id:292, title:"Bad Boy",                  artist:"Red Velvet",            genre:"kpop",   moods:["calm","melancholy"],      weather:["cloudy"]           },
  { id:293, title:"Fantastic Baby",           artist:"BIGBANG",               genre:"kpop",   moods:["energetic","happy"],      weather:["hot","sunny"]      },
  { id:294, title:"Loser",                    artist:"BIGBANG",               genre:"kpop",   moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  { id:295, title:"Happen Ending",            artist:"Epik High",             genre:"kpop",   moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  { id:296, title:"Let It Snow",              artist:"BIGBANG",               genre:"kpop",   moods:["romantic","calm"],        weather:["cold","snowy"]     },
  { id:297, title:"It's You",                 artist:"Park Hyo Shin",         genre:"kpop",   moods:["romantic","sad"],         weather:["cold","snowy"]     },
  { id:298, title:"Some",                     artist:"Bolbbalgan4",           genre:"kpop",   moods:["romantic","happy"],       weather:["sunny","cloudy"]   },
  { id:299, title:"Galaxy",                   artist:"Bolbbalgan4",           genre:"kpop",   moods:["romantic","calm"],        weather:["cold","snowy"]     },
  { id:300, title:"Rough",                    artist:"GFriend",               genre:"kpop",   moods:["energetic","happy"],      weather:["sunny"]            },
  { id:301, title:"Nonstop",                  artist:"OH MY GIRL",            genre:"kpop",   moods:["happy","energetic"],      weather:["sunny"]            },
  { id:302, title:"MIROH",                    artist:"Stray Kids",            genre:"kpop",   moods:["energetic"],              weather:["hot","sunny"]      },
  { id:303, title:"Only",                     artist:"Lee Hi",                genre:"kpop",   moods:["sad","melancholy"],       weather:["cold","rainy"]     },
  { id:304, title:"You, Clouds, Rain",        artist:"Heize",                 genre:"kpop",   moods:["sad","melancholy"],       weather:["rainy"]            },
  { id:305, title:"Um Oh Ah Yeah",            artist:"MAMAMOO",               genre:"kpop",   moods:["happy","energetic"],      weather:["hot","sunny"]      },
  { id:306, title:"No. 1",                    artist:"BoA",                   genre:"kpop",   moods:["energetic","happy"],      weather:["hot","sunny"]      },
  { id:307, title:"Beautiful",                artist:"Crush",                 genre:"kpop",   moods:["romantic","calm"],        weather:["rainy","cloudy"]   },
  { id:308, title:"Really Really",            artist:"WINNER",                genre:"kpop",   moods:["happy","romantic"],       weather:["sunny"]            },
  { id:309, title:"Love Scenario",            artist:"iKON",                  genre:"kpop",   moods:["romantic","happy"],       weather:["sunny"]            },
  { id:310, title:"I Smile",                  artist:"DAY6",                  genre:"kpop",   moods:["sad","melancholy"],       weather:["rainy","cloudy"]   },
  { id:311, title:"You Are",                  artist:"GOT7",                  genre:"kpop",   moods:["happy","romantic"],       weather:["sunny"]            },
  { id:312, title:"Superhuman",               artist:"NCT 127",               genre:"kpop",   moods:["energetic"],              weather:["hot","sunny"]      },
  { id:313, title:"Missing You",              artist:"BTOB",                  genre:"kpop",   moods:["sad","melancholy"],       weather:["cold","rainy"]     },
  { id:314, title:"Winter Is Coming",         artist:"BIGBANG",               genre:"kpop",   moods:["melancholy","romantic"],  weather:["cold","snowy"]     },
  { id:315, title:"My Star",                  artist:"Lee Hi",                genre:"kpop",   moods:["romantic","melancholy"],  weather:["cold","snowy"]     },
  // J-Pop 추가 3차
  { id:316, title:"The Beginning",            artist:"ONE OK ROCK",           genre:"jpop",   moods:["energetic"],              weather:["sunny"]            },
  { id:317, title:"怪物",                      artist:"YOASOBI",               genre:"jpop",   moods:["energetic"],              weather:["cloudy"]           },
  { id:318, title:"Kirari",                   artist:"Fujii Kaze",            genre:"jpop",   moods:["happy","energetic"],      weather:["hot","sunny"]      },
  { id:319, title:"Mixed Nuts",               artist:"Official HIGE DANdism", genre:"jpop",   moods:["energetic","happy"],      weather:["sunny"]            },
  { id:320, title:"Brave Shine",              artist:"Aimer",                 genre:"jpop",   moods:["energetic","romantic"],   weather:["sunny"]            },
  { id:321, title:"Inferno",                  artist:"Mrs. GREEN APPLE",      genre:"jpop",   moods:["energetic"],              weather:["cloudy"]           },
  { id:322, title:"STUDY ME",                 artist:"zutomayo",              genre:"jpop",   moods:["melancholy","calm"],      weather:["rainy","cold"]     },
  { id:323, title:"Connect",                  artist:"ClariS",                genre:"jpop",   moods:["happy","energetic"],      weather:["sunny"]            },
  { id:324, title:"Crossing Field",           artist:"LiSA",                  genre:"jpop",   moods:["energetic"],              weather:["sunny"]            },
  { id:325, title:"Sand Planet",              artist:"Kenshi Yonezu",         genre:"jpop",   moods:["energetic","melancholy"], weather:["cloudy"]           },
  { id:326, title:"Sparkle",                  artist:"RADWIMPS",              genre:"jpop",   moods:["romantic","sad"],         weather:["sunny","rainy"]    },
  // Pop 추가 3차
  { id:327, title:"Crazy In Love",            artist:"Beyoncé",               genre:"pop",    moods:["energetic","romantic"],   weather:["hot","sunny"]      },
  { id:328, title:"We Found Love",            artist:"Rihanna",               genre:"pop",    moods:["happy","energetic"],      weather:["hot","sunny"]      },
  { id:329, title:"Can't Stop the Feeling",   artist:"Justin Timberlake",     genre:"pop",    moods:["happy","energetic"],      weather:["hot","sunny"]      },
  { id:330, title:"Grenade",                  artist:"Bruno Mars",            genre:"pop",    moods:["sad","romantic"],         weather:["rainy","cold"]     },
  { id:331, title:"Roar",                     artist:"Katy Perry",            genre:"pop",    moods:["energetic","happy"],      weather:["hot","sunny"]      },
  { id:332, title:"Teenage Dream",            artist:"Katy Perry",            genre:"pop",    moods:["happy","romantic"],       weather:["hot","sunny"]      },
  { id:333, title:"Into You",                 artist:"Ariana Grande",         genre:"pop",    moods:["romantic","energetic"],   weather:["hot","sunny"]      },
  { id:334, title:"Style",                    artist:"Taylor Swift",          genre:"pop",    moods:["romantic","calm"],        weather:["cloudy","rainy"]   },
  { id:335, title:"Cruel Summer",             artist:"Taylor Swift",          genre:"pop",    moods:["happy","energetic"],      weather:["hot","sunny"]      },
  { id:336, title:"brutal",                   artist:"Olivia Rodrigo",        genre:"pop",    moods:["energetic","sad"],        weather:["cloudy"]           },
  { id:337, title:"Dancing With a Stranger",  artist:"Sam Smith",             genre:"pop",    moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  { id:338, title:"Without Me",               artist:"Halsey",                genre:"pop",    moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  { id:339, title:"Havana",                   artist:"Camila Cabello",        genre:"pop",    moods:["energetic","romantic"],   weather:["hot","sunny"]      },
  { id:340, title:"Juice",                    artist:"Lizzo",                 genre:"pop",    moods:["happy","energetic"],      weather:["hot","sunny"]      },
  { id:341, title:"Golden",                   artist:"Harry Styles",          genre:"pop",    moods:["happy","energetic"],      weather:["hot","sunny"]      },
  { id:342, title:"Photograph",               artist:"Ed Sheeran",            genre:"pop",    moods:["romantic","sad"],         weather:["rainy","cloudy"]   },
  { id:343, title:"Thinking Out Loud",        artist:"Ed Sheeran",            genre:"pop",    moods:["romantic","calm"],        weather:["sunny","rainy"]    },
  { id:344, title:"Stone Cold",               artist:"Demi Lovato",           genre:"pop",    moods:["sad","melancholy"],       weather:["cold","rainy"]     },
  { id:345, title:"All I Want for Christmas Is You", artist:"Mariah Carey",  genre:"pop",    moods:["happy","romantic"],       weather:["cold","snowy"]     },
  { id:346, title:"Last Christmas",           artist:"Wham!",                 genre:"pop",    moods:["sad","romantic"],         weather:["cold","snowy"]     },
  { id:347, title:"It's Beginning to Look a Lot Like Christmas", artist:"Michael Bublé", genre:"pop", moods:["happy","calm"], weather:["cold","snowy"]     },
  { id:348, title:"Christmas Tree Farm",      artist:"Taylor Swift",          genre:"pop",    moods:["happy","calm"],           weather:["cold","snowy"]     },
  { id:349, title:"Fix You",                  artist:"Coldplay",              genre:"pop",    moods:["sad","calm"],             weather:["rainy","cold"]     },
  { id:350, title:"Young and Beautiful",      artist:"Lana Del Rey",          genre:"pop",    moods:["romantic","sad"],         weather:["rainy","cloudy"]   },
  { id:351, title:"Is There Someone Else?",   artist:"The Weeknd",            genre:"pop",    moods:["sad","melancholy"],       weather:["cold","rainy"]     },
  { id:352, title:"From Eden",                artist:"Hozier",                genre:"pop",    moods:["romantic","calm"],        weather:["sunny","cloudy"]   },
  { id:353, title:"Young Dumb & Broke",       artist:"Khalid",                genre:"pop",    moods:["happy","energetic"],      weather:["sunny"]            },
  { id:354, title:"Talk",                     artist:"Khalid",                genre:"pop",    moods:["romantic","calm"],        weather:["sunny","cloudy"]   },
  // Hip-Hop 추가 3차
  { id:355, title:"Swimming Pools",           artist:"Kendrick Lamar",        genre:"hiphop", moods:["melancholy","calm"],      weather:["hot","sunny"]      },
  { id:356, title:"Pink + White",             artist:"Frank Ocean",           genre:"hiphop", moods:["calm","happy"],           weather:["sunny"]            },
  { id:357, title:"Apparently",               artist:"J. Cole",               genre:"hiphop", moods:["calm","melancholy"],      weather:["cloudy"]           },
  { id:358, title:"SPOT!",                    artist:"Zico",                  genre:"hiphop", moods:["energetic","happy"],      weather:["hot","sunny"]      },
  { id:359, title:"Counting Stars",           artist:"pH-1",                  genre:"hiphop", moods:["romantic","calm"],        weather:["rainy","cloudy"]   },
  { id:360, title:"Leave The Door Open",      artist:"Silk Sonic",            genre:"hiphop", moods:["romantic","calm"],        weather:["sunny"]            },
  { id:361, title:"Objects in the Mirror",    artist:"Mac Miller",            genre:"hiphop", moods:["melancholy","calm"],      weather:["cloudy"]           },
  { id:362, title:"Day Day",                  artist:"BewhY",                 genre:"hiphop", moods:["energetic","happy"],      weather:["sunny"]            },
  // R&B 추가 3차
  { id:363, title:"With You",                 artist:"Chris Brown",           genre:"rnb",    moods:["romantic","calm"],        weather:["sunny"]            },
  { id:364, title:"Because of You",           artist:"Ne-Yo",                 genre:"rnb",    moods:["romantic","sad"],         weather:["rainy"]            },
  { id:365, title:"Yeah!",                    artist:"Usher",                 genre:"rnb",    moods:["energetic","happy"],      weather:["hot","sunny"]      },
  { id:366, title:"When I'm In Your Arms",    artist:"Cleo Sol",              genre:"rnb",    moods:["romantic","calm"],        weather:["sunny","cloudy"]   },
  { id:367, title:"Cranes in the Sky",        artist:"Solange",               genre:"rnb",    moods:["melancholy","calm"],      weather:["cloudy","rainy"]   },
  { id:368, title:"Smokin Out The Window",    artist:"Silk Sonic",            genre:"rnb",    moods:["sad","melancholy"],       weather:["rainy","cloudy"]   },
  { id:369, title:"Forward",                  artist:"Jordan Ward",           genre:"rnb",    moods:["calm","happy"],           weather:["sunny","cloudy"]   },
  { id:370, title:"Like I Want You",          artist:"Giveon",                genre:"rnb",    moods:["romantic","calm"],        weather:["rainy","cloudy"]   },
  { id:371, title:"Violet",                   artist:"Daniel Caesar",         genre:"rnb",    moods:["romantic","calm"],        weather:["rainy","cloudy"]   },
  { id:372, title:"Mine",                     artist:"Bazzi",                 genre:"rnb",    moods:["romantic","happy"],       weather:["sunny"]            },
  // Indie 추가 3차
  { id:373, title:"Shut Up Kiss Me",          artist:"Angel Olsen",           genre:"indie",  moods:["energetic","happy"],      weather:["sunny"]            },
  { id:374, title:"Silk Chiffon",             artist:"MUNA",                  genre:"indie",  moods:["happy","energetic"],      weather:["sunny"]            },
  { id:375, title:"Chaise Longue",            artist:"Wet Leg",               genre:"indie",  moods:["energetic","happy"],      weather:["sunny","cloudy"]   },
  { id:376, title:"A-Punk",                   artist:"Vampire Weekend",       genre:"indie",  moods:["energetic","happy"],      weather:["sunny"]            },
  { id:377, title:"White Winter Hymnal",      artist:"Fleet Foxes",           genre:"indie",  moods:["calm","melancholy"],      weather:["cold","snowy"]     },
  { id:378, title:"Mystery of Love",          artist:"Sufjan Stevens",        genre:"indie",  moods:["romantic","calm"],        weather:["sunny","cloudy"]   },
  { id:379, title:"Bloodbuzz Ohio",           artist:"The National",          genre:"indie",  moods:["melancholy","energetic"], weather:["cloudy","rainy"]   },
  { id:380, title:"On Melancholy Hill",       artist:"Gorillaz",              genre:"indie",  moods:["melancholy","calm"],      weather:["cloudy","rainy"]   },
  { id:381, title:"Feel Good Inc.",           artist:"Gorillaz",              genre:"indie",  moods:["energetic","melancholy"], weather:["cloudy"]           },
  { id:382, title:"Better Distractions",      artist:"Faye Webster",          genre:"indie",  moods:["calm","melancholy"],      weather:["cloudy"]           },
  { id:383, title:"True Blue",                artist:"boygenius",             genre:"indie",  moods:["calm","melancholy"],      weather:["cold","cloudy"]    },
  { id:384, title:"Feels Like We Only Go Backwards", artist:"Tame Impala",   genre:"indie",  moods:["melancholy","calm"],      weather:["cloudy","rainy"]   },
  { id:385, title:"Hannah Hunt",              artist:"Vampire Weekend",       genre:"indie",  moods:["melancholy","calm"],      weather:["cold","cloudy"]    },
  // ── K-Pop 겨울/눈 집중 보강 ──────────────────────────────────────
  { id:386, title:"First Snow",              artist:"EXO",                   genre:"kpop",   moods:["romantic","calm"],        weather:["cold","snowy"]     },
  { id:387, title:"Sing For You",            artist:"EXO",                   genre:"kpop",   moods:["romantic","sad"],         weather:["cold","snowy"]     },
  { id:388, title:"광화문에서",                  artist:"Kyuhyun",               genre:"kpop",   moods:["romantic","sad"],         weather:["cold","snowy"]     },
  { id:389, title:"All About You",           artist:"Taeyeon",               genre:"kpop",   moods:["romantic","calm"],        weather:["cold","snowy"]     },
  { id:390, title:"Snow Flower",             artist:"MAMAMOO",               genre:"kpop",   moods:["romantic","calm"],        weather:["cold","snowy"]     },
  { id:391, title:"White",                   artist:"INFINITE",              genre:"kpop",   moods:["melancholy","calm"],      weather:["cold","snowy"]     },
  { id:392, title:"Christmas Love",          artist:"BTS",                   genre:"kpop",   moods:["happy","romantic"],       weather:["cold","snowy"]     },
  { id:393, title:"Last Night Story",        artist:"IU",                    genre:"kpop",   moods:["calm","melancholy"],      weather:["cold","snowy"]     },
  { id:394, title:"Fool",                    artist:"WINNER",                genre:"kpop",   moods:["sad","melancholy"],       weather:["cold","snowy"]     },
  { id:395, title:"Marry Me",                artist:"TWICE",                 genre:"kpop",   moods:["romantic","happy"],       weather:["cold","snowy"]     },
  { id:396, title:"Beautiful Goodbye",       artist:"Chen",                  genre:"kpop",   moods:["romantic","calm"],        weather:["cold","snowy"]     },
  { id:397, title:"Ice",                     artist:"Epik High",             genre:"kpop",   moods:["melancholy","calm"],      weather:["cold","snowy"]     },
  { id:398, title:"I Love You",              artist:"Lim Young-woong",       genre:"kpop",   moods:["romantic","calm"],        weather:["cold","snowy"]     },
  { id:399, title:"눈 (Snow)",                artist:"Paul Kim",              genre:"kpop",   moods:["romantic","calm"],        weather:["cold","snowy"]     },
  { id:400, title:"Lucid Dream",             artist:"SHINee",                genre:"kpop",   moods:["sad","melancholy"],       weather:["cold","snowy"]     },
  { id:401, title:"Every Single Day",        artist:"Sung Si-kyung",         genre:"kpop",   moods:["romantic","calm"],        weather:["cold","snowy"]     },
  { id:402, title:"겨울 (Winter)",             artist:"Crush",                 genre:"kpop",   moods:["romantic","calm"],        weather:["cold","snowy"]     },
  { id:403, title:"Awake",                   artist:"BTS",                   genre:"kpop",   moods:["melancholy","sad"],       weather:["cold","snowy"]     },
  { id:404, title:"낙하 (Nakka)",              artist:"AKMU",                  genre:"kpop",   moods:["sad","melancholy"],       weather:["cold","cloudy"]    },
  { id:405, title:"Back Door",               artist:"Stray Kids",            genre:"kpop",   moods:["energetic"],              weather:["hot","sunny"]      },
  // ── J-Pop 겨울/눈 ────────────────────────────────────────────────
  { id:406, title:"Everything",              artist:"Mr.Children",           genre:"jpop",   moods:["romantic","calm"],        weather:["cold","snowy"]     },
  { id:407, title:"なんでもないや",               artist:"RADWIMPS",              genre:"jpop",   moods:["sad","romantic"],         weather:["cold","snowy"]     },
  { id:408, title:"三文小説",                   artist:"King Gnu",              genre:"jpop",   moods:["melancholy","romantic"],  weather:["cold","snowy"]     },
  { id:409, title:"Universe",                artist:"Official HIGE DANdism", genre:"jpop",   moods:["romantic","calm"],        weather:["cold","snowy"]     },
  { id:410, title:"I beg you",               artist:"Aimer",                 genre:"jpop",   moods:["romantic","sad"],         weather:["cold","snowy"]     },
  { id:411, title:"ユズノハナ",                  artist:"Yuzu",                  genre:"jpop",   moods:["calm","melancholy"],      weather:["cold","snowy"]     },
  { id:412, title:"灰色と青",                   artist:"Kenshi Yonezu",         genre:"jpop",   moods:["melancholy","calm"],      weather:["cold","snowy"]     },
  { id:413, title:"スノースマイル",               artist:"BUMP OF CHICKEN",       genre:"jpop",   moods:["romantic","calm"],        weather:["cold","snowy"]     },
  // ── 서양 크리스마스 / 겨울 Pop ────────────────────────────────────
  { id:414, title:"White Christmas",         artist:"Bing Crosby",           genre:"pop",    moods:["happy","calm"],           weather:["cold","snowy"]     },
  { id:415, title:"The Christmas Song",      artist:"Nat King Cole",         genre:"pop",    moods:["romantic","calm"],        weather:["cold","snowy"]     },
  { id:416, title:"Jingle Bell Rock",        artist:"Bobby Helms",           genre:"pop",    moods:["happy","energetic"],      weather:["cold","snowy"]     },
  { id:417, title:"Let It Snow",             artist:"Dean Martin",           genre:"pop",    moods:["happy","romantic"],       weather:["cold","snowy"]     },
  { id:418, title:"Blue Christmas",          artist:"Elvis Presley",         genre:"pop",    moods:["sad","romantic"],         weather:["cold","snowy"]     },
  { id:419, title:"Happy Xmas (War Is Over)",artist:"John Lennon",           genre:"pop",    moods:["calm","romantic"],        weather:["cold","snowy"]     },
  { id:420, title:"Underneath the Tree",     artist:"Kelly Clarkson",        genre:"pop",    moods:["happy","energetic"],      weather:["cold","snowy"]     },
  { id:421, title:"Mistletoe",               artist:"Justin Bieber",         genre:"pop",    moods:["happy","romantic"],       weather:["cold","snowy"]     },
  { id:422, title:"Snowman",                 artist:"Sia",                   genre:"pop",    moods:["sad","romantic"],         weather:["cold","snowy"]     },
  { id:423, title:"Feliz Navidad",           artist:"Jose Feliciano",        genre:"pop",    moods:["happy","energetic"],      weather:["cold","snowy"]     },
  { id:424, title:"River",                   artist:"Joni Mitchell",         genre:"pop",    moods:["sad","melancholy"],       weather:["cold","snowy"]     },
  { id:425, title:"Christmas Lights",        artist:"Coldplay",              genre:"pop",    moods:["melancholy","romantic"],  weather:["cold","snowy"]     },
  { id:426, title:"2000 Miles",              artist:"The Pretenders",        genre:"pop",    moods:["romantic","sad"],         weather:["cold","snowy"]     },
  { id:427, title:"Fairytale of New York",   artist:"The Pogues",            genre:"pop",    moods:["sad","melancholy"],       weather:["cold","snowy"]     },
  { id:428, title:"Sister Winter",           artist:"Sufjan Stevens",        genre:"indie",  moods:["sad","melancholy"],       weather:["cold","snowy"]     },
  { id:429, title:"Winter Song",             artist:"Sara Bareilles",        genre:"pop",    moods:["romantic","sad"],         weather:["cold","snowy"]     },
  { id:430, title:"Have Yourself a Merry Little Christmas", artist:"Frank Sinatra", genre:"pop", moods:["romantic","calm"],   weather:["cold","snowy"]     },
  { id:431, title:"Winter Wonderland",       artist:"Dean Martin",           genre:"pop",    moods:["happy","calm"],           weather:["cold","snowy"]     },
  { id:432, title:"Snowflake",               artist:"Ed Sheeran",            genre:"pop",    moods:["romantic","calm"],        weather:["cold","snowy"]     },
  { id:433, title:"Back to December",        artist:"Taylor Swift",          genre:"pop",    moods:["sad","romantic"],         weather:["cold","snowy"]     },
  { id:434, title:"Snow",                    artist:"Red Hot Chili Peppers", genre:"pop",    moods:["melancholy","calm"],      weather:["cold","snowy"]     },
  { id:435, title:"Driving Home for Christmas", artist:"Chris Rea",          genre:"pop",    moods:["romantic","calm"],        weather:["cold","snowy"]     },
  { id:436, title:"A Holly Jolly Christmas", artist:"Burl Ives",             genre:"pop",    moods:["happy","calm"],           weather:["cold","snowy"]     },
  { id:437, title:"Silver Bells",            artist:"Bing Crosby",           genre:"pop",    moods:["happy","calm"],           weather:["cold","snowy"]     },
  { id:438, title:"Santa Baby",              artist:"Eartha Kitt",           genre:"pop",    moods:["happy","romantic"],       weather:["cold","snowy"]     },
  { id:439, title:"Do They Know It's Christmas?", artist:"Band Aid",         genre:"pop",    moods:["sad","melancholy"],       weather:["cold","snowy"]     },
  { id:440, title:"Hazy Shade of Winter",    artist:"Simon & Garfunkel",     genre:"pop",    moods:["melancholy","energetic"], weather:["cold","snowy"]     },
  { id:441, title:"Stay Another Day",        artist:"East 17",               genre:"pop",    moods:["sad","romantic"],         weather:["cold","snowy"]     },
  // ── K-Pop 여름/더위 보강 ──────────────────────────────────────────
  { id:442, title:"Red Flavor",              artist:"Red Velvet",            genre:"kpop",   moods:["happy","energetic"],      weather:["hot","sunny"]      },
  { id:443, title:"Hot Summer",              artist:"f(x)",                  genre:"kpop",   moods:["energetic","happy"],      weather:["hot","sunny"]      },
  { id:444, title:"Hands Up",               artist:"2PM",                   genre:"kpop",   moods:["energetic","happy"],      weather:["hot","sunny"]      },
  { id:445, title:"Dance the Night Away",    artist:"TWICE",                 genre:"kpop",   moods:["happy","energetic"],      weather:["hot","sunny"]      },
  { id:446, title:"Ice Cream",               artist:"BLACKPINK",             genre:"kpop",   moods:["happy","energetic"],      weather:["hot","sunny"]      },
  { id:447, title:"Dope",                    artist:"BTS",                   genre:"kpop",   moods:["energetic"],              weather:["hot","sunny"]      },
  { id:448, title:"Gee",                     artist:"Girls' Generation",     genre:"kpop",   moods:["happy","energetic"],      weather:["sunny","hot"]      },
  { id:449, title:"WANNABE",                 artist:"ITZY",                  genre:"kpop",   moods:["energetic","happy"],      weather:["sunny","hot"]      },
  { id:450, title:"Punch",                   artist:"NCT 127",               genre:"kpop",   moods:["energetic"],              weather:["hot","sunny"]      },
  { id:451, title:"Energetic",               artist:"Wanna One",             genre:"kpop",   moods:["energetic","happy"],      weather:["hot","sunny"]      },
  // ── Pop 여름 보강 ─────────────────────────────────────────────────
  { id:452, title:"Love On Top",             artist:"Beyoncé",               genre:"pop",    moods:["happy","romantic"],       weather:["hot","sunny"]      },
  { id:453, title:"Physical",                artist:"Dua Lipa",              genre:"pop",    moods:["energetic","happy"],      weather:["hot","sunny"]      },
  { id:454, title:"Summer",                  artist:"Calvin Harris",         genre:"pop",    moods:["happy","energetic"],      weather:["hot","sunny"]      },
  { id:455, title:"Lean On",                 artist:"Major Lazer",           genre:"pop",    moods:["energetic","happy"],      weather:["hot","sunny"]      },
  { id:456, title:"Just Dance",              artist:"Lady Gaga",             genre:"pop",    moods:["energetic","happy"],      weather:["hot","sunny"]      },
  { id:457, title:"Lush Life",               artist:"Zara Larsson",          genre:"pop",    moods:["happy","energetic"],      weather:["hot","sunny"]      },
  { id:458, title:"Want to Want Me",         artist:"Jason Derulo",          genre:"pop",    moods:["energetic","happy"],      weather:["hot","sunny"]      },
  { id:459, title:"Rather Be",               artist:"Clean Bandit",          genre:"pop",    moods:["happy","calm"],           weather:["sunny"]            },
  // ── 슬픔/이별 보강 (sad 집중) ──────────────────────────────────────
  { id:460, title:"Rolling in the Deep",     artist:"Adele",                 genre:"pop",    moods:["energetic","sad"],        weather:["cloudy","rainy"]   },
  { id:461, title:"Set Fire to the Rain",    artist:"Adele",                 genre:"pop",    moods:["sad","energetic"],        weather:["rainy"]            },
  { id:462, title:"Back to Black",           artist:"Amy Winehouse",         genre:"pop",    moods:["sad","melancholy"],       weather:["rainy","cloudy"]   },
  { id:463, title:"The Man Who Can't Be Moved", artist:"The Script",         genre:"pop",    moods:["sad","romantic"],         weather:["rainy","cloudy"]   },
  { id:464, title:"Happier",                 artist:"Ed Sheeran",            genre:"pop",    moods:["sad","melancholy"],       weather:["rainy","cloudy"]   },
  { id:465, title:"Before You Go",           artist:"Lewis Capaldi",         genre:"pop",    moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  { id:466, title:"Hold Back the River",     artist:"James Bay",             genre:"pop",    moods:["sad","melancholy"],       weather:["rainy","cloudy"]   },
  { id:467, title:"Let Her Go",              artist:"Passenger",             genre:"pop",    moods:["sad","melancholy"],       weather:["cold","rainy"]     },
  { id:468, title:"Like Real People Do",     artist:"Hozier",                genre:"indie",  moods:["romantic","sad"],         weather:["rainy","cloudy"]   },
  { id:469, title:"Impossible",              artist:"James Arthur",          genre:"pop",    moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  { id:470, title:"When We Were Young",      artist:"Adele",                 genre:"pop",    moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  { id:471, title:"Too Good at Goodbyes",    artist:"Sam Smith",             genre:"pop",    moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  { id:472, title:"The Heart Wants What It Wants", artist:"Selena Gomez",    genre:"pop",    moods:["sad","romantic"],         weather:["rainy","cold"]     },
  { id:473, title:"Slow Dancing in a Burning Room", artist:"John Mayer",     genre:"pop",    moods:["sad","romantic"],         weather:["rainy","cloudy"]   },
  { id:474, title:"Trouble",                 artist:"Coldplay",              genre:"pop",    moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  { id:475, title:"How to Save a Life",      artist:"The Fray",              genre:"pop",    moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  { id:476, title:"Marvin's Room",           artist:"Drake",                 genre:"hiphop", moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  { id:477, title:"Bad Religion",            artist:"Frank Ocean",           genre:"rnb",    moods:["sad","melancholy"],       weather:["rainy","cold"]     },
  { id:478, title:"The Weekend",             artist:"SZA",                   genre:"rnb",    moods:["sad","melancholy"],       weather:["rainy","cloudy"]   },
  { id:479, title:"Hard Place",              artist:"H.E.R.",                genre:"rnb",    moods:["sad","romantic"],         weather:["rainy","cold"]     },
  { id:480, title:"While We're Young",       artist:"Jhené Aiko",            genre:"rnb",    moods:["romantic","calm"],        weather:["sunny","cloudy"]   },
  { id:481, title:"As Much as I Love You",   artist:"Lucky Daye",            genre:"rnb",    moods:["romantic","calm"],        weather:["rainy","cloudy"]   },
  { id:482, title:"Golden",                  artist:"Cleo Sol",              genre:"rnb",    moods:["romantic","calm"],        weather:["sunny","cloudy"]   },
  { id:483, title:"Rockstar",                artist:"Post Malone",           genre:"hiphop", moods:["energetic","melancholy"], weather:["cloudy"]           },
  { id:484, title:"Swimming",                artist:"Megan Thee Stallion",   genre:"hiphop", moods:["energetic","happy"],      weather:["hot","sunny"]      },
  { id:485, title:"Caramel",                 artist:"NewJeans",              genre:"kpop",   moods:["happy","calm"],           weather:["sunny"]            },
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

/* 기분별 검색 쿼리 */
const MOOD_QUERIES = {
  happy: [
    'kpop dance','pop upbeat','hip hop party',
    'kpop girl group','r&b groove','indie feel good',
    'kpop cheerful','pop bright',
  ],
  energetic: [
    'kpop boy group','hip hop hype','pop workout',
    'kpop powerful','dance pop','hip hop banger',
    'kpop intense','edm pop',
  ],
  calm: [
    'kpop ballad','lo-fi hip hop','indie acoustic',
    'r&b smooth','jpop mellow','piano instrumental',
    'pop slow jam','jazz cafe',
  ],
  romantic: [
    'kpop ost love','r&b slow jam','pop love song',
    'indie folk romance','jpop love ballad','kpop couple',
    'r&b serenade','ballad sweet',
  ],
  sad: [
    'kpop slow ballad','pop breakup','indie folk acoustic',
    'r&b heartbreak','jpop emotional','ballad piano',
    'kpop sad','pop lonely',
  ],
  melancholy: [
    'indie atmospheric','kpop late night','jpop bittersweet',
    'r&b nostalgia','folk acoustic','lo-fi night',
    'pop reflective','kpop introspective',
  ],
};

/* 날씨별 검색 쿼리 */
const WEATHER_QUERIES = {
  sunny:   ['kpop summer','pop outdoor','hip hop summer','r&b sunshine','kpop idol','pop beach','indie summer','kpop cheer'],
  cloudy:  ['indie dreamy','kpop soft','r&b mellow','lo-fi chill','pop gentle','acoustic soft','kpop moody','jpop hazy'],
  rainy:   ['kpop rain','indie acoustic rain','jpop rain','r&b night','lo-fi rain','ballad piano','pop midnight','kpop ballad rain'],
  snowy:   ['kpop winter','pop christmas','indie winter','r&b cozy','jpop snow','ballad winter','folk fireplace','kpop snow'],
  hot:     ['kpop summer dance','hip hop summer','pop tropical','r&b summer','dancehall','pop dance','kpop fire','afrobeats'],
  cold:    ['indie folk winter','kpop cold','piano acoustic','r&b cozy','jpop winter','pop winter','ballad acoustic','ambient'],
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

  async function search(term, limit = 15, offset = 0) {
    const params = new URLSearchParams({ term, limit, offset, country: 'KR', lang: 'ko_kr' });
    const res = await fetch(`/api/itunes?${params}`);
    if (!res.ok) throw new Error(`iTunes 오류 ${res.status}`);
    const data = await res.json();
    return (data.results || []).map(formatTrack);
  }

  async function getByQueries(queryList, keywords, genres, maxTracks = 6) {
    let queries;

    if (genres.includes('all')) {
      queries = [...queryList];
    } else {
      queries = genres.flatMap(genre => {
        const gt = GENRE_SEARCH_TERMS[genre]?.[0] || genre;
        return [gt, ...keywords.slice(0, 3).map(kw => `${gt} ${kw}`)];
      });
    }

    // 쿼리를 셔플 후 5개 선택 (매번 다른 조합)
    const picked = shuffle(queries).slice(0, 5);
    const tracks = [];
    const seen   = new Set();

    for (const q of picked) {
      try {
        const results = await search(q, 15, itunesOffset);
        for (const t of results) {
          if (!seen.has(t.id) && !isJunkTrack(t)) { seen.add(t.id); tracks.push(t); }
        }
      } catch (e) {
        console.warn('[iTunes]', q, e.message);
      }
    }

    if (tracks.length === 0) throw new Error('iTunes에서 결과를 찾지 못했습니다');

    // 이미 본 곡은 후순위로, 새 곡을 앞에 배치
    const newTracks  = tracks.filter(t => !shownSongIds.has(t.id));
    const seenTracks = tracks.filter(t =>  shownSongIds.has(t.id));
    return [...shuffle(newTracks), ...shuffle(seenTracks)].slice(0, maxTracks);
  }

  async function getMoodRecommendations(mood, genres) {
    return getByQueries(MOOD_QUERIES[mood] || [], MOOD_KEYWORDS[mood] || [], genres);
  }

  async function getWeatherRecommendations(weather, genres) {
    return getByQueries(WEATHER_QUERIES[weather] || [], WEATHER_KEYWORDS[weather] || [], genres);
  }

  // 컴필레이션·BGM·커버·반주 앨범 필터
  const JUNK_PATTERNS = [
    /\binstrumental\b/i, /\bbgm\b/i, /\bkaraoke\b/i, /\bbackingtrack\b/i,
    /\btribute\b/i, /\bcover version\b/i, /\bpiano cover\b/i,
    /\bcollection\s+\d{4}\b/i,      // "Collection 2016"
    /\bcollection,?\s+vol\b/i,       // "Collection, Vol."
    /\bvol\.?\s*\d{2,}\b/i,          // "Vol. 253" (두 자리 이상)
    /\bpops,\s*vol\b/i,              // "POPS, Vol."
    /^various\s+artists?\b/i,        // 아티스트명이 "Various Artists"
    /\boriginal\s+motion\s+picture\b/i,
  ];

  function isJunkTrack(t) {
    const title  = t.trackName       || '';
    const artist = t.artistName      || '';
    const album  = t.collectionName  || '';
    return JUNK_PATTERNS.some(re => re.test(title) || re.test(artist) || re.test(album));
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
let favoriteSongs   = JSON.parse(localStorage.getItem('moodtune_fav_songs') || '[]');
let moodResults     = [];
let weatherResults  = [];
let currentAudio    = null;
let currentPlayBtn  = null;
// 이미 추천된 곡 추적 (재추천 시 새 곡 우선)
let shownSongIds    = new Set();
// iTunes 오프셋: 재추천마다 다른 페이지 결과
let itunesOffset    = 0;
// 로컬 곡 iTunes 메타데이터 보강 캐시 (artist::title → {albumArt, previewUrl, trackUrl})
const itunesEnrichCache = new Map();

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

  itunesOffset = (itunesOffset + 20) % 100;
  showLoading(true);

  // 1. 로컬 DB에서 10곡 (기분/날씨 정확 매칭, 히스토리 우선 제외)
  const localMoodSongs    = selectedMood    ? localRecommendByMood(genres, 10)    : [];
  const localMoodIds      = new Set(localMoodSongs.map(s => s.id));
  const localWeatherSongs = selectedWeather
    ? localRecommendByWeather(genres, 10).filter(s => !localMoodIds.has(s.id))
    : [];

  // 2. 로컬 곡 iTunes 보강 + iTunes 보조 추천 (모두 병렬)
  const [enrichedMoodR, enrichedWeatherR, moodItunesRes, weatherItunesRes] = await Promise.allSettled([
    enrichWithItunes(localMoodSongs),
    enrichWithItunes(localWeatherSongs),
    selectedMood    ? iTunes.getMoodRecommendations(selectedMood, genres)    : Promise.resolve([]),
    selectedWeather ? iTunes.getWeatherRecommendations(selectedWeather, genres) : Promise.resolve([]),
  ]);

  const enrichedMood    = enrichedMoodR.status    === 'fulfilled' ? enrichedMoodR.value    : localMoodSongs;
  const enrichedWeather = enrichedWeatherR.status === 'fulfilled' ? enrichedWeatherR.value : localWeatherSongs;

  // 3. 기분 결과: 로컬 10 + iTunes 6
  if (selectedMood) {
    const itSupplement = moodItunesRes.status === 'fulfilled' ? moodItunesRes.value : [];
    const deduped = deduplicateByTitleArtist(itSupplement, enrichedMood).slice(0, 6);
    moodResults = [...enrichedMood, ...deduped];
  } else {
    moodResults = [];
  }

  // 4. 날씨 결과: 로컬 10 + iTunes 6 (기분 중복 제거)
  if (selectedWeather) {
    const itSupplement = weatherItunesRes.status === 'fulfilled' ? weatherItunesRes.value : [];
    const moodKeys     = new Set(moodResults.map(s => `${s.artist.toLowerCase()}::${normalizeTitle(s.title)}`));
    const itFiltered   = itSupplement.filter(t =>
      !moodKeys.has(`${t.artist.toLowerCase()}::${normalizeTitle(t.title)}`)
    );
    const deduped = deduplicateByTitleArtist(itFiltered, enrichedWeather).slice(0, 6);
    weatherResults = [...enrichedWeather, ...deduped];
  } else {
    weatherResults = [];
  }

  // 5. 최종 중복 제거: 같은 곡이 두 섹션에 절대 중복 안 되도록 title+artist 기준으로 한 번 더 정리
  const globalSeen = new Set();
  function finalDedup(songs) {
    return songs.filter(s => {
      const key = `${s.artist.toLowerCase()}::${normalizeTitle(s.title)}`;
      if (globalSeen.has(key)) return false;
      globalSeen.add(key);
      return true;
    });
  }
  moodResults    = finalDedup(moodResults);
  weatherResults = finalDedup(weatherResults);

  // 6. 히스토리 업데이트 (pool 기반 리셋을 사용하므로 전체 pruning 불필요)
  [...moodResults, ...weatherResults].forEach(s => shownSongIds.add(String(s.id)));

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

function localRecommendByMood(genres, count = 10) {
  const filter = genres.includes('all') ? null : genres;
  const pool = LOCAL_SONGS.filter(s =>
    s.moods.includes(selectedMood) && (!filter || filter.includes(s.genre))
  );
  let unshown = pool.filter(s => !shownSongIds.has(String(s.id)));
  // 풀이 소진되면 해당 곡들만 히스토리에서 제거하여 순환 (직전에 본 곡 제외)
  if (unshown.length < Math.min(3, pool.length)) {
    pool.forEach(s => shownSongIds.delete(String(s.id)));
    unshown = pool.filter(s => !shownSongIds.has(String(s.id)));
  }
  return shuffle(unshown).slice(0, count).map(s => ({ ...s, source: 'local' }));
}

function localRecommendByWeather(genres, count = 10) {
  const filter = genres.includes('all') ? null : genres;
  const pool = LOCAL_SONGS.filter(s =>
    s.weather.includes(selectedWeather) && (!filter || filter.includes(s.genre))
  );
  let unshown = pool.filter(s => !shownSongIds.has(String(s.id)));
  // 풀이 소진되면 해당 곡들만 히스토리에서 제거하여 순환
  if (unshown.length < Math.min(3, pool.length)) {
    pool.forEach(s => shownSongIds.delete(String(s.id)));
    unshown = pool.filter(s => !shownSongIds.has(String(s.id)));
  }
  return shuffle(unshown).slice(0, count).map(s => ({ ...s, source: 'local' }));
}

async function enrichWithItunes(songs) {
  if (songs.length === 0) return songs;
  return Promise.all(
    songs.map(async song => {
      const cacheKey = `${song.artist}::${song.title}`.toLowerCase();
      if (itunesEnrichCache.has(cacheKey)) {
        return { ...song, ...itunesEnrichCache.get(cacheKey) };
      }
      try {
        const params = new URLSearchParams({
          term: `${song.artist} ${song.title}`, limit: 5, country: 'KR', media: 'music', entity: 'song',
        });
        const res  = await fetch(`/api/itunes?${params}`);
        if (!res.ok) return song;
        const data = await res.json();
        const match = (data.results || []).find(t => {
          const ta = (t.artistName || '').toLowerCase();
          const sa = song.artist.toLowerCase();
          return ta.includes(sa) || sa.includes(ta);
        }) || (data.results || [])[0];
        if (match) {
          const extra = {
            albumArt:   match.artworkUrl100?.replace('100x100bb', '300x300bb') || null,
            previewUrl: match.previewUrl   || null,
            trackUrl:   match.trackViewUrl || null,
          };
          itunesEnrichCache.set(cacheKey, extra);
          return { ...song, ...extra };
        }
      } catch (e) {
        console.warn('[enrich]', song.title, e.message);
      }
      return song;
    })
  );
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
      <div class="song-tags">${genreTag}</div>
      <div class="song-footer">
        <button class="yt-btn"
          onclick="window.open('https://www.youtube.com/results?search_query=${ytQuery}','_blank')">
          ▶ YouTube
        </button>
        ${appleBtnHTML}
      </div>
    </div>`;

  card.querySelector('.fav-btn').addEventListener('click', e =>
    toggleFavorite(song.id, e.currentTarget, song)
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
function toggleFavorite(id, btn, song) {
  const sid = String(id);
  if (favorites.has(id)) {
    favorites.delete(id);
    favoriteSongs = favoriteSongs.filter(s => String(s.id) !== sid);
    document.querySelectorAll(`.fav-btn[data-id="${id}"]`).forEach(b => { b.textContent = '🤍'; });
    showToast('즐겨찾기에서 제거했어요');
  } else {
    favorites.add(id);
    if (song && !favoriteSongs.find(s => String(s.id) === sid)) favoriteSongs.push(song);
    document.querySelectorAll(`.fav-btn[data-id="${id}"]`).forEach(b => { b.textContent = '❤️'; });
    showToast('즐겨찾기에 추가했어요 ❤️');
  }
  localStorage.setItem('moodtune_favs',      JSON.stringify([...favorites]));
  localStorage.setItem('moodtune_fav_songs', JSON.stringify(favoriteSongs));
  updateFavBadge();
  if (document.getElementById('fav-modal').classList.contains('open')) renderFavorites();
}

function updateFavBadge() {
  const badge = document.getElementById('fav-badge');
  if (!badge) return;
  badge.textContent   = favorites.size;
  badge.style.display = favorites.size > 0 ? '' : 'none';
}

function renderFavorites() {
  const grid     = document.getElementById('fav-songs-grid');
  const noResult = document.getElementById('fav-no-results');
  grid.innerHTML = '';
  if (favoriteSongs.length === 0) { noResult.style.display = 'block'; return; }
  noResult.style.display = 'none';
  favoriteSongs.forEach((song, idx) => grid.appendChild(createSongCard(song, idx)));
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
updateFavBadge();

/* 즐겨찾기 모달 열기/닫기 */
const favModal    = document.getElementById('fav-modal');
const favOpenBtn  = document.getElementById('fav-open-btn');
const favCloseBtn = document.getElementById('fav-close-btn');

favOpenBtn.addEventListener('click', () => {
  renderFavorites();
  favModal.classList.add('open');
  document.body.style.overflow = 'hidden';
});
favCloseBtn.addEventListener('click', closeFavModal);
favModal.addEventListener('click', e => { if (e.target === favModal) closeFavModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeFavModal(); });

function closeFavModal() {
  favModal.classList.remove('open');
  document.body.style.overflow = '';
}

/* ================================================================
   Helpers
   ================================================================ */
function normalizeTitle(title) {
  return title.toLowerCase().replace(/[^a-z0-9가-힣]/g, '').slice(0, 15);
}

function deduplicateByTitleArtist(itunesTracks, localTracks) {
  const localKeys = new Set(
    localTracks.map(t => `${t.artist.toLowerCase()}::${normalizeTitle(t.title)}`)
  );
  return itunesTracks.filter(t =>
    !localKeys.has(`${t.artist.toLowerCase()}::${normalizeTitle(t.title)}`)
  );
}

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
