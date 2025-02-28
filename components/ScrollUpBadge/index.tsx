"use client";

import React from "react";
import Image from "next/image";

import upArrowIcon from "@/public/icons/up-arrow.svg";

import classes from "./index.module.css";

const ScrollUpBadge = () => {
  const scrollToTop = () => {
    const element = document.getElementById("home");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={classes.badge} onClick={scrollToTop}>
      <Image
        src={upArrowIcon.src}
        alt="what's app logo"
        className={classes.badgeImage}
        width="24"
        height="24"
      />
    </div>
  );
};

export default ScrollUpBadge;
