"use client";

import React, { FC, JSX, PropsWithChildren, useEffect, useMemo } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import Slide from "@/components/Slide";
import logo from "@/public/logo.svg";

import MainMenu from "./MainMenu";

import "./hamburger.css";
import classes from "./index.module.css";

interface IHeroSlide extends PropsWithChildren {
  header?: string | JSX.Element;
  subHeader?: string | JSX.Element;
  onClickSubheader?: () => void;
  url?: string;
  withoutActions?: boolean;
  isParallax?: boolean;
}

const HeroSlide: FC<IHeroSlide> = ({
  header,
  subHeader,
  onClickSubheader,
  url,
  children,
  withoutActions,
  isParallax,
}) => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const isIOS = useMemo(() => {
    if (!window) return false;
    return /iPhone/.test(window?.navigator?.userAgent);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <Slide
      style={{
        backgroundImage: `url(${url})`,
        backgroundAttachment: isParallax && !isIOS ? "fixed" : "unset",
      }}
      isSmall={isParallax}
      isRedSlide
    >
      {isMenuOpen && <MainMenu onCloseMenu={() => setMenuOpen(false)} />}

      <div id="home" className={classes.heroHeader}>
        {isParallax || withoutActions ? (
          <div />
        ) : (
          <Image
            src={logo}
            alt=""
            className={classes.heroLogo}
            onClick={() => router.push("/")}
          />
        )}

        {!isParallax && (
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
        )}
      </div>

      <div className={classes.heroTitle}>
        <div className={classes.landingHeader}>{header}</div>
        {subHeader && (
          <div
            className={classes.heroSubHeader}
            style={{ cursor: onClickSubheader ? "pointer" : "unset" }}
            onClick={onClickSubheader}
          >
            {subHeader}
          </div>
        )}
      </div>
      {children}
    </Slide>
  );
};

export default HeroSlide;
