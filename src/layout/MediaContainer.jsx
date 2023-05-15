import React, { Fragment } from "react";
import MediaCard from "../components/MediaCard";

const MediaContainer = ({ items, title }) => {
  return (
    <Fragment>
      <h1 className="u-mb-m heading--l">{title}</h1>
      <div className="mediaContainer">
        <ul className="mediaContainer__list">
          {items.map((el, index) => (
            <li className="mediaContainer__item" key={index}>
              <MediaCard item={el} />
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default MediaContainer;
