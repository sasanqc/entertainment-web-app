import React, { Fragment } from "react";
import MediaCard from "../components/MediaCard";

const Recommended = () => {
  return (
    <Fragment>
      <h1 className="u-mb-m heading--l">Recommended for you</h1>
      <div className="recommended">
        <ul className="recommended__list">
          <li className="recommended__item">
            <MediaCard />
          </li>
          <li className="recommended__item">
            <MediaCard />
          </li>
          <li className="recommended__item">
            <MediaCard />
          </li>
          <li className="recommended__item">
            <MediaCard />
          </li>
          <li className="recommended__item">
            <MediaCard />
          </li>
          <li className="recommended__item">
            <MediaCard />
          </li>
          <li className="recommended__item">
            <MediaCard />
          </li>
          <li className="recommended__item">
            <MediaCard />
          </li>
          <li className="recommended__item">
            <MediaCard />
          </li>
          <li className="recommended__item">
            <MediaCard />
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Recommended;
