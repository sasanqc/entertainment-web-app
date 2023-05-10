import React from "react";
import { ReactComponent as SearchIcon } from "../assets/icons/icon-search.svg";
const Searchbar = () => {
  return (
    <div className="searchBar">
      <SearchIcon className="searchBar__icon" />
      <input
        type="text"
        placeholder="Search for Movies or TV series"
        className="heading--m searchBar__textInput"
      />
    </div>
  );
};

export default Searchbar;
