import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollTop = () => {
  const { pathname } = useLocation();
  // =>url 정보를 가져옴

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  // =>페이지가 이동될때 pathname이 변경되었다면
  // 스크롤이 위로움직임

  return;
};
