import React from "react";
import { ReactComponent as LogoIcon } from "../assets/icons/logo.svg";
import { ReactComponent as BookmarkIcon } from "../assets/icons/icon-nav-bookmark.svg";
import { ReactComponent as HomeIcon } from "../assets/icons/icon-nav-home.svg";
import { ReactComponent as TvIcon } from "../assets/icons/icon-nav-tv-series.svg";
import { ReactComponent as MoviesIcon } from "../assets/icons/icon-nav-movies.svg";

const Sidebar = () => {
  return (
    <article className="sideBar">
      <LogoIcon className="sideBar__logo" />
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/" className="nav__link">
              <HomeIcon className="nav__icon--active" />
            </a>
          </li>

          <li className="nav__item">
            <a href="/" className="nav__link">
              <MoviesIcon className="nav__icon" />
            </a>
          </li>

          <li className="nav__item">
            <a href="/" className="nav__link">
              <TvIcon className="nav__icon" />
            </a>
          </li>

          <li className="nav__item">
            <a href="/" className="nav__link">
              <BookmarkIcon className="nav__icon" />
            </a>
          </li>
        </ul>
      </nav>
      <img src="./assets/image-avatar.png" alt="" className="sideBar__avatar" />
    </article>
  );
};

export default Sidebar;
