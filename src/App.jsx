import Sidebar from "./layout/Sidebar";
import { Navigate, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import Home from "./pages/Home";
import BookMarks from "./pages/BookMarks";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useStore } from "./store";
import ErrorPage from "./pages/ErrorPage";
const AuthenticatedRoutes = ({ children }) => {
  const appState = useStore()[0];
  return appState.auth?.userInfo?.email ? (
    <main className="app">
      <Sidebar />
      <div className="content">{children}</div>
    </main>
  ) : (
    <Navigate to="/login" />
  );
};
function App() {
  return (
    <Fragment>
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
          path="/"
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
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
