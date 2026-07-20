import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle";
import { getDetail } from "../../api/movieApi";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { ORIGIAL_URL, W500_URL } from "../../constants/imgBaseUrl";
import { useParams } from "react-router-dom";

export default function Movie() {
  const { id } = useParams();
  // =>url의 매개변수 값을 객체로 반환
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  // console.log(id);

  useEffect(() => {
    (async () => {
      try {
        const detailData = await getDetail(id);
        setData(detailData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  console.log(data);
  const { response } = data;

  return (
    <div className="text-white bg-black min-h-screen">
      <PageTitle title={response.title} />

      {/* HERO */}
      <div
        className="h-[50vh] md:h-[70vh] bg-cover bg-center relative "
        style={{
          background: `url(${ORIGIAL_URL}${response?.backdrop_path}) no-repeat center / cover`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute bottom-6 md:bottom-10 left-4 md:left-10 z-10">
          <h1 className="text-2xl md:text-5xl font-bold">{response.title}</h1>
          <p className="text-sm md:text-lg opacity-80 mt-6 max-w-[700px]">
            {response.overview}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-10 md:py-16 flex flex-col md:flex-row gap-10">
        {/* POSTER */}
        <div className="w-full bg-gray-400 md:w-[300px] shrink-0">
          <img src={W500_URL + response.poster_path} alt={response.title} />
        </div>

        {/* INFO */}
        <div className="flex-1 space-y-6">
          <div className="flex flex-wrap  gap-4 text-lg xl:text-xl xl:font-semibold opacity-80 ">
            <span>⭐{Math.round(response.vote_average)}점</span>
            <span>•</span>
            <span>100분</span>
            <span>•</span>
            <span>{response.release_date}</span>
          </div>

          {/* 장르 */}
          <ul className="flex flex-wrap gap-2 mt-12 flex-col translate-x-[30px]">
            {response.genres.map((genre) => (
              <li key={genre.id} className="list-disc">
                {genre.name}
              </li>
            ))}
          </ul>

          {/* 줄거리 */}
          <p className="text-base md:text-md leading-relaxed opacity-80 mt-12">
            {response.overview}
          </p>
        </div>
      </div>
    </div>
  );
}
