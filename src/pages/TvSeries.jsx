import React from "react";
import { useStore } from "../store";
import MediaContainer from "../layout/MediaContainer";
import MediaShell from "../components/MediaShell";
const TvSeries = () => {
  const { media } = useStore()[0];
  const tvSeries = media.filter((el) => el.category === "TV Series");
  return (
    <MediaShell placeholder={"Search for TV Series"} media={tvSeries}>
      <MediaContainer items={tvSeries} title={"TV Series"} />
    </MediaShell>
  );
};

export default TvSeries;
