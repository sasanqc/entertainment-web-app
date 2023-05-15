import React from "react";
import { useStore } from "../store";
import MediaContainer from "../layout/MediaContainer";
import MediaShell from "../components/MediaShell";

const Movies = () => {
  const { media } = useStore()[0];
  const movies = media.filter((el) => el.category === "Movie");
  return (
    <MediaShell placeholder={"Search for movies"} media={movies}>
      <MediaContainer items={movies} title={"Movies"} />
    </MediaShell>
  );
};

export default Movies;
