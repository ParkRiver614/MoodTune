# MoodTune

기분과 날씨에 맞는 음악을 추천하는 웹 앱.

배포: https://mood-tune-liard.vercel.app

> 개발에 AI 코딩 도구를 활용했다.

## 동작

기분(happy · sad · calm · energetic · romantic · melancholy)과 날씨(sunny · rainy · cloudy · cold · hot · snowy)를 고르면
두 가지 출처의 곡을 합쳐 추천한다.

- **내장 곡 목록 10곡**: 기분·날씨 태그를 붙여 둔 곡 목록에서 조건에 맞는 곡을 고른다.
- **iTunes 검색 6곡**: iTunes Search API에서 기분·날씨 키워드로 곡을 더 찾아, 내장 목록과 겹치는 곡은 빼고 붙인다.

내장 목록의 곡에도 iTunes Search API로 앨범 아트와 30초 미리듣기를 붙인다.
위치 기반 날씨 자동 감지, 장르 필터, 즐겨찾기를 제공한다.

## 구성

```
index.html · app.js · style.css     정적 프론트엔드 (바닐라 JS)
server.js                           Express 개발 서버 + API 프록시
api/itunes.js · api/status.js       Vercel 서버리스 함수 (배포용)
```

iTunes Search API는 브라우저에서 직접 호출하면 CORS에 막혀서, 서버(배포 환경에서는 `api/itunes.js`)를 거쳐 호출한다.

## 변경 이력

- **Spotify → iTunes 전환**: 처음에는 Spotify Web API로 곡 정보를 붙였으나, Spotify의 정책 변경으로 API가 403 오류를
  반환해 iTunes Search API로 교체했다. `server.js`에 남아 있는 Spotify 프록시와 `.env.example`은 로컬 개발용 흔적이며,
  현재 앱은 Spotify 없이 동작한다.
- **iTunes 검색 국가 변경**: `country=KR`로 검색하면 결과가 0곡으로 돌아와, iTunes 곡·앨범 아트·미리듣기가 모두 빠지는
  문제가 있었다. 검색 국가를 `US`로 바꿔 해결했다.

## 실행

```bash
npm install
npm start               # http://localhost:3000
```

## 기술 스택

Node.js 18+ · Express · 바닐라 JavaScript (ES Modules) · iTunes Search API · Vercel
