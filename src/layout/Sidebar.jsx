import React from "react";
import { ReactComponent as LogoIcon } from "../assets/icons/logo.svg";
import Navigation from "../components/Navigation";

const Sidebar = () => {
  return (
    <article className="sideBar">
      <LogoIcon className="sideBar__logo" />
      <Navigation />
      <img src="./assets/image-avatar.png" alt="" className="sideBar__avatar" />
    </article>
  );
};

export default Sidebar;
