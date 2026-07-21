const baseUrl = "https://api.themoviedb.org/3/";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
};

// const nowPlayingUrl = baseUrl + "movie/now_playing" + "language=ko-kr&page=1";
// const popularUrl = baseUrl + "movie/popular" + "language=ko-kr&page=1";
// const topRatedUrl = baseUrl + "movie/top_rated" + "language=ko-kr&page=1";
// const upcomingUrl = baseUrl + "movie/upcoming" + "language=ko-kr&page=1";

// const fetchMovie = async (endpoint) => {
//   const url = baseUrl + endpoint + "?language=ko-kr&page=1";

//   const response = await fetch(url, options).then((res) => res.json());

//   return { response };
// };

const fetchMovie = async (endpoint) => {
  const url = new URL(baseUrl + endpoint);
  url.searchParams.set("language", "ko-kr");

  const response = await fetch(url, options);

  return response.json();
};

//영화 리스트 요청
export const getNowPlaying = () => fetchMovie("movie/now_playing");
export const getPopular = () => fetchMovie("movie/popular");
export const getTopRated = () => fetchMovie("movie/top_rated");
export const getUpcoming = () => fetchMovie("movie/upcoming");

//영화 상세 요청
export const getDetail = (movie_id) => fetchMovie(`movie/${movie_id}`);

//영화 검색
export const getSearch = (keyword) =>
  fetchMovie(`search/movie?query=${keyword}`);
