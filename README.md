# movie-react
영화 검색 및 영화 소개 페이지

## url
https://park-my-1540.github.io/movie-react

### 기능
HOME : api불러와서 뿌려줌  <br/>
영화검색 : 카테고리 탭 및 검색어로 조회하여 뿌려줌 <br/>
상세페이지 : 영화 포스터 클릭 시 해당 상세페이지로 이동

## API
API : https://yts-proxy.now.sh/list_movies.json <br/>
API 문서 : https://yts.mx/api#list_movies

### router
HashRouter 
### state 관리
contextAPI 사용<br/>
useAsync로 로딩값, 에러, 데이터 관리
