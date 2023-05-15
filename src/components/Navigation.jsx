import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as BookmarkIcon } from "../assets/icons/icon-nav-bookmark.svg";
import { ReactComponent as HomeIcon } from "../assets/icons/icon-nav-home.svg";
import { ReactComponent as TvIcon } from "../assets/icons/icon-nav-tv-series.svg";
import { ReactComponent as MoviesIcon } from "../assets/icons/icon-nav-movies.svg";
const navItems = [
  { path: "home", icon: <HomeIcon className="nav__icon" /> },
  { path: "movies", icon: <MoviesIcon className="nav__icon" /> },
  { path: "series", icon: <TvIcon className="nav__icon" /> },
  { path: "bookmarks", icon: <BookmarkIcon className="nav__icon" /> },
];

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {navItems.map((el, index) => (
          <li className="nav__item" key={index}>
            <NavLink
              to={el.path}
              className={({ isActive }) =>
                `nav__link ${isActive ? "nav__link--active" : ""}`
              }
            >
              {el.icon}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
