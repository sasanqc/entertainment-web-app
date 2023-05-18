import React, { Fragment, useEffect, useRef } from "react";
import TrendingCard from "./TrendingCard";

const Trending = ({ items }) => {
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
    const dx = e.clientX - pos.x;
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
          {items.map((el, index) => (
            <li className="trending__item" key={index}>
              <TrendingCard item={el} />
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Trending;
