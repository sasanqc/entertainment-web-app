import React, { Fragment } from "react";
import { useStore } from "../store";
import MediaContainer from "../layout/MediaContainer";
import MediaShell from "../components/MediaShell";
const BookMarks = () => {
  const { media } = useStore()[0];
  const bookmarkedMovies = media.filter(
    (el) => el.category === "Movie" && el.isBookmarked
  );
  const bookmarkedSeries = media.filter(
    (el) => el.category === "TV Series" && el.isBookmarked
  );
  return (
    <MediaShell
      placeholder={"Search for bookmarked shows"}
      media={media.filter((el) => el.isBookmarked)}
    >
      <Fragment>
        {bookmarkedMovies.length > 0 && (
          <MediaContainer
            items={bookmarkedMovies}
            title={"Bookmarked Movies"}
          />
        )}
        {bookmarkedSeries.length > 0 && (
          <MediaContainer
            items={bookmarkedSeries}
            title={"Bookmarked TV Series"}
          />
        )}
        {bookmarkedMovies.length + bookmarkedSeries.length === 0 && (
          <MediaContainer items={[]} title={"There is no Bookmarked media"} />
        )}
      </Fragment>
    </MediaShell>
  );
};

export default BookMarks;
