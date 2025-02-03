"use client";

import React, { FC, JSX, PropsWithChildren, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import logo from "@/public/logo.svg";

import MainMenu from "./MainMenu";

import "./hamburger.css";
import classes from "./index.module.css";

interface IHeroSlide extends PropsWithChildren {
  header?: string | JSX.Element;
  subHeader?: string | JSX.Element;
  url?: string;
  withoutLogo?: boolean;
}

const HeroSlide: FC<IHeroSlide> = ({
  header,
  subHeader,
  url,
  children,
  withoutLogo,
}) => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div className={classes.hero} style={{ backgroundImage: `url(${url})` }}>
      {isMenuOpen && <MainMenu />}

      <div className={classes.heroHeader}>
        {withoutLogo ? (
          <div />
        ) : (
          <Image src={logo} alt="" className={classes.heroLogo} />
        )}

        <svg
          id="hamburger"
          className={isMenuOpen ? "open" : "close"}
          viewBox="0 0 60 40"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <g stroke="#fff" strokeWidth="4">
            <path id="top-line" d="M10,10 L50,10 Z"></path>
            <path id="middle-line" d="M10,20 L50,20 Z"></path>
            <path id="bottom-line" d="M10,30 L50,30 Z"></path>
          </g>
        </svg>
      </div>

      <div className={classes.heroTitle}>
        <div className={classes.landingHeader}>{header}</div>
        {subHeader && <div className={classes.heroSubHeader}>{subHeader}</div>}
      </div>
      {children}
    </div>
  );
};

export default HeroSlide;
