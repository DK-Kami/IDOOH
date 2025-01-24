import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

import classes from "./index.module.css";

interface IUnitDescriptionItem {
  icon: StaticImageData;
  title: string;
  value: string | number | string[] | number[];
}

const UnitDescriptionItem: FC<IUnitDescriptionItem> = ({
  icon,
  title,
  value,
}) => {
  return (
    <div className={classes.descriptionItem}>
      <div className={classes.descriptionItemImageWrapper}>
        <Image
          alt={`${title} icon`}
          {...icon}
          className={classes.descriptionItemImage}
        />
      </div>
      <div className={classes.descriptionItemContainer}>
        <div className={classes.descriptionItemTitle}>{title}</div>
        <div className={classes.descriptionItemValue}>
          {Array.isArray(value) ? value.join(", ") : value}
        </div>
      </div>
    </div>
  );
};

export default UnitDescriptionItem;
