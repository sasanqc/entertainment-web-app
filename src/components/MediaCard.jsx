import React from "react";
import { ReactComponent as OIcon } from "../assets/icons/icon-oval.svg";
import { ReactComponent as MoviesIcon } from "../assets/icons/icon-nav-movies.svg";
import { ReactComponent as TvSeriesIcon } from "../assets/icons/icon-category-tv.svg";
import { ReactComponent as BookMarkIcon } from "../assets/icons/icon-bookmark-empty.svg";
import { ReactComponent as BookMarkFullIcon } from "../assets/icons/icon-bookmark-full.svg";
import { ReactComponent as PlayIcon } from "../assets/icons/icon-play.svg";
import { useStore } from "../store";
const MediaCard = ({ item }) => {
  const dispatch = useStore(false)[1];
  const handleToggleBookmark = () => {
    dispatch("TOGGLE_BOOKMARK", item.title);
  };

  return (
    <article className="mediaCard">
      <div className="mediaCard__imageContainer">
        <button className="mediaCard__bookmark" onClick={handleToggleBookmark}>
          {item.isBookmarked ? <BookMarkFullIcon /> : <BookMarkIcon />}
        </button>
        <img
          src={item.thumbnail.regular.medium}
          alt="media thumbnail"
          className="mediaCard__image"
        />

        <div className="mediaCard__play">
          <PlayIcon />
          <h3 className="heading--xs">Play</h3>
        </div>
      </div>
      <div className="mediaCard__textBox">
        <div className="mediaCard__details">
          <p className="body--s">{item.year}</p>
          <OIcon />
          {item.category === "Movie" ? <MoviesIcon /> : <TvSeriesIcon />}
          <p className="body--s">{item.category}</p>
          <OIcon />
          <p className="body--s">{item.rating}</p>
        </div>
        <h3 className="heading--xs">{item.title}</h3>
      </div>
    </article>
  );
};

export default React.memo(MediaCard);
