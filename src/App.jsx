import Sidebar from "./layout/Sidebar";
import { Navigate, Route, Routes } from "react-router-dom";

import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import Home from "./pages/Home";
import BookMarks from "./pages/BookMarks";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Fragment } from "react";
const AuthenticatedRoutes = ({ children }) => {
  return true ? (
    <Fragment>
      <Sidebar />
      <div className="content">{children}</div>
    </Fragment>
  ) : (
    <Navigate to="/login" />
  );
};
function App() {
  return (
    <main className="app">
      <Routes>
        <Route
          path="/home"
          element={
            <AuthenticatedRoutes>
              <Home />
            </AuthenticatedRoutes>
          }
        />
        <Route
          path="/movies"
          element={
            <AuthenticatedRoutes>
              <Movies />
            </AuthenticatedRoutes>
          }
        />
        <Route
          path="/series"
          element={
            <AuthenticatedRoutes>
              <TvSeries />
            </AuthenticatedRoutes>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <AuthenticatedRoutes>
              <BookMarks />
            </AuthenticatedRoutes>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </main>
  );
}

export default App;
