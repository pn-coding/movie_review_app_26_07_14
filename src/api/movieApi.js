const baseUrl = "https://api.themoviedb.org/3/";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer `,
  },
};

// const nowPlayingUrl = baseUrl + "movie/now_playing" + "language=ko-kr&page=1";
// const popularUrl = baseUrl + "movie/popular" + "language=ko-kr&page=1";
// const topRatedUrl = baseUrl + "movie/top_rated" + "language=ko-kr&page=1";
// const upcomingUrl = baseUrl + "movie/upcoming" + "language=ko-kr&page=1";

const fetchMovie = async (endpoint) => {
  const url = baseUrl + endpoint + "?language=ko-kr&page=1";

  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return { response };
};

export const getNowPlaying = () => fetchMovie("movie/now_playing");
