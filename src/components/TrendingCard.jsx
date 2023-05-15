import React from "react";
import { ReactComponent as OIcon } from "../assets/icons/icon-oval.svg";
import { ReactComponent as MoviesIcon } from "../assets/icons/icon-nav-movies.svg";
import { ReactComponent as TvSeriesIcon } from "../assets/icons/icon-category-tv.svg";
import { ReactComponent as BookMarkIcon } from "../assets/icons/icon-bookmark-empty.svg";
import { ReactComponent as BookMarkFullIcon } from "../assets/icons/icon-bookmark-full.svg";
import { useStore } from "../store";
const TrendingCard = ({ item }) => {
  const dispatch = useStore(false)[1];
  const handleToggleBookmark = () => {
    dispatch("TOGGLE_BOOKMARK", item.title);
  };
  return (
    <article
      className="trendingCard"
      style={{ backgroundImage: `url(${item.thumbnail.trending.large})` }}
    >
      <button className="mediaCard__bookmark" onClick={handleToggleBookmark}>
        {item.isBookmarked ? <BookMarkFullIcon /> : <BookMarkIcon />}
      </button>
      <div className="trendingCard__textBox">
        <div className="trendingCard__details">
          <p className="body--m">{item?.year}</p>
          <OIcon />
          {item.category === "Movie" ? <MoviesIcon /> : <TvSeriesIcon />}
          <p className="body--m">{item?.category}</p>
          <OIcon />
          <p className="body--m">{item?.rating}</p>
        </div>
        <h3 className="heading--s">{item?.title}</h3>
      </div>
    </article>
  );
};

export default React.memo(TrendingCard);
