import React, { useRef } from "react";
import { ReactComponent as SearchIcon } from "../assets/icons/icon-search.svg";
const Searchbar = ({ placeholder, onSearch }) => {
  const inputRef = useRef();
  return (
    <div className="searchBar">
      <SearchIcon
        className="searchBar__icon"
        onClick={() => onSearch(inputRef.current.value)}
      />
      <input
        type="text"
        placeholder={placeholder}
        className="heading--m searchBar__textInput"
        ref={inputRef}
      />
    </div>
  );
};

export default Searchbar;
