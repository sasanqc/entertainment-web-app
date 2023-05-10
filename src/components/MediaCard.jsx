import React from "react";
import { ReactComponent as OIcon } from "../assets/icons/icon-oval.svg";
import { ReactComponent as MoviesIcon } from "../assets/icons/icon-nav-movies.svg";
import { ReactComponent as BookMarkIcon } from "../assets/icons/icon-bookmark-empty.svg";
import { ReactComponent as BookMarkFullIcon } from "../assets/icons/icon-bookmark-full.svg";
const MediaCard = () => {
  return (
    <article className="mediaCard">
      <img
        src="./assets/thumbnails/112/regular/small.jpg"
        alt=""
        className="mediaCard__image"
      />
      <div className="mediaCard__bookmark">
        <BookMarkFullIcon />
      </div>

      <div className="mediaCard__textBox">
        <div className="mediaCard__details">
          <p className="body--s">2019</p>
          <OIcon />
          <MoviesIcon />
          <p className="body--s">Movie</p>
          <OIcon />
          <p className="body--s">PG</p>
        </div>
        <h3 className="heading--xs">Beyond Earth1</h3>
      </div>
    </article>
  );
};

export default MediaCard;
