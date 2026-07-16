import { Link } from "react-router-dom";
import { ORIGIAL_URL } from "../../../constants/imgBaseUrl";

export default function Section_1({ data }) {
  return (
    <section
      style={{
        background: `#808080 url(${ORIGIAL_URL}${data.backdrop_path}) no-repeat center / cover`,
      }}
      className="h-[80vh] px-[20px] lg:px-[80px] xl:px-[200px] relative"
    >
      <div
        className="absolute bottom-[100px] 
        left-[20px] lg:left-[80px] xl:left-[200px]"
      >
        <h3 className="text-[30px] lg:text-[50px] xl:text-[70px] font-semibold">
          {data.title}
        </h3>
        <p className="text-[14px] xl:text-[18px] opacity-70 max-w-[800px] mt-4 mb-16">
          {data.overview.slice(0, 100) + "..."}
        </p>

        <Link
          to={`/movie/${data}`}
          className="px-8 py-4 
          bg-red-500 rounded-lg hover:bg-red-700 transition"
        >
          More View &rarr;
        </Link>
      </div>
    </section>
  );
}
