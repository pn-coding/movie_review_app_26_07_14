import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-red-500 font-bold text-xl mb-4">PNMOVIE</p>

        <h1 className="text-[120px] md:text-[180px] font-black leading-none">
          404
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold mt-4">
          페이지를 찾을 수 없습니다
        </h2>

        <p className="text-gray-400 mt-5 max-w-md mx-auto">
          요청하신 페이지가 존재하지 않거나, 이동되었을 수 있습니다.
        </p>

        <Link
          to="/"
          className="
            inline-block
            mt-10
            px-8
            py-3
            rounded-full
            bg-red-600
            hover:bg-red-700
            transition
            font-semibold
          "
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
