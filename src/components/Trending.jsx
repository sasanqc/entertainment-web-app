import React, { Fragment, useEffect, useRef } from "react";
import { ReactComponent as OIcon } from "../assets/icons/icon-oval.svg";
import { ReactComponent as MoviesIcon } from "../assets/icons/icon-nav-movies.svg";
const Trending = () => {
  const trendingList = useRef();
  useEffect(() => {
    trendingList.current.addEventListener("mousedown", mouseDownHandler);
    return () => {};
  }, []);

  let pos = { left: 0, x: 0 };
  const mouseDownHandler = function (e) {
    pos = {
      // The current scroll
      left: trendingList.current.scrollLeft,

      // Get the current mouse position
      x: e.clientX,
    };
    trendingList.current.style.cursor = "grabbing";
    trendingList.current.style.userSelect = "none";
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };
  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;

    // Scroll the element

    trendingList.current.scrollLeft = pos.left - dx;
  };
  const mouseUpHandler = function () {
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);

    trendingList.current.style.cursor = "grab";
    trendingList.current.style.removeProperty("user-select");
  };
  return (
    <Fragment>
      <h1 className="u-mb-m heading--l">Trending</h1>
      <div className="trending">
        <ul className="trending__list" ref={trendingList}>
          <li className="trending__item">
            <article className="trendingCard">
              <div className="trendingCard__textBox">
                <div className="trendingCard__details">
                  <p className="body--m">2019</p>
                  <OIcon />
                  <MoviesIcon />
                  <p className="body--m">Movie</p>
                  <OIcon />
                  <p className="body--m">PG</p>
                </div>
                <h3 className="heading--s">Beyond Earth1</h3>
              </div>
            </article>
          </li>
          <li className="trending__item">
            <article className="trendingCard">
              <div className="trendingCard__textBox">
                <div className="trendingCard__details">
                  <p className="body--m">2019</p>
                  <OIcon />
                  <MoviesIcon />
                  <p className="body--m">Movie</p>
                  <OIcon />
                  <p className="body--m">PG</p>
                </div>
                <h3 className="heading--s">Beyond Earth2</h3>
              </div>
            </article>
          </li>
          <li className="trending__item">
            <article className="trendingCard">
              <div className="trendingCard__textBox">
                <div className="trendingCard__details">
                  <p className="body--m">2019</p>
                  <OIcon />
                  <MoviesIcon />
                  <p className="body--m">Movie</p>
                  <OIcon />
                  <p className="body--m">PG</p>
                </div>
                <h3 className="heading--s">Beyond Earth3</h3>
              </div>
            </article>
          </li>
          <li className="trending__item">
            <article className="trendingCard">
              <div className="trendingCard__textBox">
                <div className="trendingCard__details">
                  <p className="body--m">2019</p>
                  <OIcon />
                  <MoviesIcon />
                  <p className="body--m">Movie</p>
                  <OIcon />
                  <p className="body--m">PG</p>
                </div>
                <h3 className="heading--s">Beyond Earth4</h3>
              </div>
            </article>
          </li>
          <li className="trending__item">
            <article className="trendingCard">
              <div className="trendingCard__textBox">
                <div className="trendingCard__details">
                  <p className="body--m">2019</p>
                  <OIcon />
                  <MoviesIcon />
                  <p className="body--m">Movie</p>
                  <OIcon />
                  <p className="body--m">PG</p>
                </div>
                <h3 className="heading--s">Beyond Earth5</h3>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Trending;
