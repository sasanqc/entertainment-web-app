import Searchbar from "./components/Searchbar";

import Sidebar from "./layout/Sidebar";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import Home from "./pages/Home";
import BookMarks from "./pages/BookMarks";
function App() {
  return (
    <main className="app">
      <Sidebar />

      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<TvSeries />} />
          <Route path="bookmarks" element={<BookMarks />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
