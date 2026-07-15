import { useEffect, useState } from "react";
import {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
} from "../../api/movieApi";

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

  console.log(movieData);

  return <div>home</div>;
}

// *예외
// =>try ~ catch
// =>조건문과 비슷하게 코드나 함수에 오류나 문제점이 발생했을때
// 핸들링 처리 가능함
// =>if문과 차이점은 if문은 무조건 조건을 작성해야되지만
// try는 조건없이 문제점을 잡아낼수 있음
