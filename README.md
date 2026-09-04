# MoodTune

기분과 날씨에 맞는 음악을 추천하는 웹 앱.

> 개발에 AI 코딩 도구를 활용했다.

## 동작

기분(happy · sad · calm · energetic · romantic · melancholy)과 날씨(sunny · rainy · cloudy · cold · hot · snowy)
태그를 붙인 내장 곡 목록에서 후보를 고르고, iTunes Search API로 앨범 아트와 30초 미리듣기를,
Spotify API로 추가 메타데이터를 붙여 보여준다.

## 구성

```
index.html · app.js · style.css     정적 프론트엔드 (바닐라 JS)
server.js                           Express 개발 서버 + API 프록시
api/itunes.js · api/status.js       Vercel 서버리스 함수 (배포용)
```

API 프록시를 둔 이유는 두 가지다. iTunes Search API는 브라우저에서 직접 호출하면 CORS에 막히고,
Spotify Client Secret은 브라우저에 내려보내면 안 되기 때문에 토큰 발급을 서버에서 처리한다.
발급한 토큰은 만료 1분 전까지 서버 메모리에 캐시해 재사용한다.

## 실행

```bash
cp .env.example .env    # SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET 입력
npm install
npm start               # http://localhost:3000
```

Spotify 자격증명이 없어도 iTunes 기반 추천은 동작한다. `/api/status`로 설정 여부를 확인할 수 있다.

## 기술 스택

Node.js 18+ · Express · 바닐라 JavaScript (ES Modules) · iTunes Search API · Spotify Web API · Vercel
