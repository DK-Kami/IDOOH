"use client";

import React from "react";

import HeroSlide from "@/components/HeroSlide";
import heroMain from "@/public/images/hero-main.png";

const HomeHero = () => {
  const handleDownloadMediaKit = () => {
    window.open("pdf/IDOOH_MediaKit.pdf", "_blank");
  };

  return (
    <HeroSlide
      url={heroMain.src}
      header="We just know how"
      subHeader="DOWNLOAD MEDIAKIT"
      onClickSubheader={handleDownloadMediaKit}
    />
  );
};

export default HomeHero;
