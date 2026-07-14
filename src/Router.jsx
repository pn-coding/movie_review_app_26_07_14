import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Movie from "./pages/movie/Movie";
import Search from "./pages/search/Search";
import ErrorPage from "./pages/ErrorPage";

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/search" element={<Search />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
}
