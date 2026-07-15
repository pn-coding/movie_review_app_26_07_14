import { useEffect, useState } from "react";
import {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
} from "../../api/movieApi";
import { Link } from "react-router-dom";

export default function Home() {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const [nowPlaying, popular, topRated, upComming] = await Promise.all([
          getNowPlaying(),
          getPopular(),
          getTopRated(),
          getUpcoming(),
        ]);

        setMovieData({
          nowPlaying,
          popular,
          topRated,
          upComming,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(movieData?.nowPlaying?.response?.results[0]);

  return (
    <div className="min-h-screen">
      <section
        style={{
          background: `#808080 url(https://image.tmdb.org/t/p/original${movieData?.nowPlaying?.response?.results[0].backdrop_path}) no-repeat center / cover`,
        }}
        className="h-[80vh] px-[20px] lg:px-[80px] xl:px-[200px] relative"
      >
        <div
          className="absolute bottom-[100px] 
        left-[20px] lg:left-[80px] xl:left-[200px]"
        >
          <h3 className="text-[30px] lg:text-[50px] xl:text-[70px] font-semibold">
            {movieData?.nowPlaying?.response?.results[0].title}
          </h3>
          <p className="text-[14px] xl:text-[18px] opacity-70 max-w-[800px] mt-4 mb-16">
            {movieData?.nowPlaying?.response?.results[0].overview.slice(
              0,
              100,
            ) + "..."}
          </p>

          <Link
            to={`/movie/${movieData?.nowPlaying?.response?.results[0]}`}
            className="px-8 py-4 
          bg-red-500 rounded-lg hover:bg-red-700 transition"
          >
            More View &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}

// *예외
// =>try ~ catch
// =>조건문과 비슷하게 코드나 함수에 오류나 문제점이 발생했을때
// 핸들링 처리 가능함
// =>if문과 차이점은 if문은 무조건 조건을 작성해야되지만
// try는 조건없이 문제점을 잡아낼수 있음
