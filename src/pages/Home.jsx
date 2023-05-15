import React from "react";
import Trending from "../components/Trending";
import MediaContainer from "../layout/MediaContainer";
import { useStore } from "../store";
import MediaShell from "../components/MediaShell";
const Home = () => {
  const { media } = useStore()[0];
  const trending = media.filter((el) => el.isTrending);
  return (
    <MediaShell placeholder={"Search for movies or TV series"} media={media}>
      <Trending items={trending} />
      <MediaContainer items={media} title={"Recommended for you"} />
    </MediaShell>
  );
};

export default Home;
