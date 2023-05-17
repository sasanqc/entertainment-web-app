import React, { Fragment, useState } from "react";
import Searchbar from "./Searchbar";
import MediaContainer from "../layout/MediaContainer";
const MediaShell = ({ children, media, placeholder }) => {
  const [searchText, setSearchText] = useState("");
  let searchResult = [];

  const handleSearch = (text) => {
    setSearchText(text);
  };

  if (searchText) {
    searchResult = media.filter((el) =>
      el.title.toLowerCase().includes(searchText)
    );
  }
  return (
    <Fragment>
      <Searchbar placeholder={placeholder} onSearch={handleSearch} />
      {searchText && (
        <MediaContainer
          items={searchResult}
          title={`Found ${searchResult.length} results for '${searchText}'`}
        />
      )}
      {!searchText && children}
    </Fragment>
  );
};

export default MediaShell;
