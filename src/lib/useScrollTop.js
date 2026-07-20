export const useScrollTop = () => {
  //스크롤 작업 해야됨
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return;
};
