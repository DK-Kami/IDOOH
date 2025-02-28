import React, { CSSProperties, FC, PropsWithChildren } from "react";

import classes from "./index.module.css";

interface ISlide extends PropsWithChildren {
  style?: CSSProperties;
  isSmall?: boolean;
  isRedSlide?: boolean;
}

const Slide: FC<ISlide> = ({ style, isSmall, isRedSlide, children }) => {
  return (
    <div
      style={{ minHeight: isSmall ? "65vh" : "100vh", ...style }}
      className={`${classes.slide} ${isRedSlide ? classes.slideRed : ""}`}
    >
      <div
        style={{
          minHeight: isSmall ? "65vh" : "100vh",
        }}
        className={classes.slideContainer}
      >
        {children}
      </div>
    </div>
  );
};

export default Slide;
