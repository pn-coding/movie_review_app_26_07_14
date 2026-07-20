import { useEffect, useState } from "react";
import {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
} from "../../api/movieApi";
import { Link } from "react-router-dom";
import Section_1 from "./components/Section_1";
import Loading from "../../components/Loading";
import { W500_URL } from "../../constants/imgBaseUrl";

import Section_2 from "./components/Section_2";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle";

export default function Home() {
  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // console.log(movieData?.nowPlaying?.response?.results[0]);

  // 로딩
  if (loading) {
    return <Loading />;
  }

  const nowPlayingData = movieData?.nowPlaying?.response;
  const popularData = movieData?.popular?.response;
  const topRatedData = movieData?.topRated?.response;
  const upCommingData = movieData?.upComming?.response;
  console.log(movieData);

  return (
    <div className="min-h-screen">
      <PageTitle title={"HOME"} />

      <Section_1 data={nowPlayingData.results[1]} />

      <div
        className="px-[20px] lg:px-[80px] xl:px-[200px] 
      py-[100px] xl:py-[150px]"
      >
        <Section_2 title={"현재 상영중"} data={nowPlayingData} />
        <Section_2 title={"최고평점"} data={topRatedData} />
        <Section_2 title={"인기 영화"} data={popularData} />
        <Section_2 title={"개봉예정"} data={upCommingData} />
      </div>
    </div>
  );
}

// *예외
// =>try ~ catch
// =>조건문과 비슷하게 코드나 함수에 오류나 문제점이 발생했을때
// 핸들링 처리 가능함
// =>if문과 차이점은 if문은 무조건 조건을 작성해야되지만
// try는 조건없이 문제점을 잡아낼수 있음
