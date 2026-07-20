import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { W500_URL } from "../../../constants/imgBaseUrl";

export default function Section_2({ title, data }) {
  return (
    <section className="mb-[100px] xl:mb-[150px]">
      <h2 className=" text-2xl lg:text-3xl xl:text-4xl mb-8 font-[600]">
        {title}
      </h2>

      {/* con_wrap */}
      <Swiper
        spaceBetween={15}
        slidesPerView={5}
        breakpoints={{
          320: {
            spaceBetween: 10,
            slidesPerView: 2.3,
          },
          768: {
            spaceBetween: 15,
            slidesPerView: 3.3,
          },
          1024: {
            spaceBetween: 20,
            slidesPerView: 5.3,
          },
        }}
      >
        {data.results.map((movie) => (
          <SwiperSlide>
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <div className="xl:h-[400px]">
                <img
                  className="w-full h-full object-cover"
                  src={W500_URL + movie.poster_path}
                  alt={movie.title}
                />
              </div>

              <h3 className="text-[14px] xl:text-[18px] mt-[15px] font-[600]">
                {movie.title}
              </h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
