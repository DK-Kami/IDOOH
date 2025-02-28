import React, { FC, PropsWithChildren } from "react";

import classes from "./index.module.css";

interface ISlide extends PropsWithChildren {
  isRedSlide?: boolean;
}

const Slide: FC<ISlide> = ({ isRedSlide, children }) => {
  return (
    <div className={`${classes.slide} ${isRedSlide ? classes.slideRed : ""}`}>
      {children}
    </div>
  );
};

export default Slide;
