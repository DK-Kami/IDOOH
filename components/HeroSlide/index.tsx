import React, { FC } from "react";
import Image from "next/image";

import logo from "@/public/logo.svg";
import { landingHeader, landingSubHeader } from "@/shared/theme";

import classes from "./index.module.css";

interface IHeroSlide {
  header: string;
  subHeader?: string;
  url: string;
}

const HeroSlide: FC<IHeroSlide> = ({ header, subHeader, url }) => {
  return (
    <div className={classes.hero} style={{ backgroundImage: `url(${url})` }}>
      <div className={classes.heroHeader}>
        <Image src={logo} alt="" />
        <div>hamburger menu</div>
      </div>

      <div className={classes.heroTitle}>
        <div style={landingHeader}>{header}</div>
        {subHeader && <div style={landingSubHeader}>{subHeader}</div>}
      </div>
    </div>
  );
};

export default HeroSlide;
