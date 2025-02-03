import React, { FC } from "react";

import classes from "./index.module.css";

interface IUnitDescriptionItem {
  icon: string;
  title: string;
  value: string | number | string[] | number[];
}

const UnitDescriptionItem: FC<IUnitDescriptionItem> = ({
  icon,
  title,
  value,
}) => {
  const renderLandMarkItem = (landmark: string | number, index: number) => (
    <div key={landmark}>
      {landmark}
      {/*{index !== (value as string[]).length - 1 && ","}*/}
    </div>
  );

  return (
    <div className={classes.descriptionItem}>
      <div
        className={classes.descriptionItemImage}
        style={{ backgroundImage: `url(${icon})` }}
      />
      <div className={classes.descriptionItemContainer}>
        <div className={classes.descriptionItemTitle}>{title}</div>
        <div className={classes.descriptionItemValue}>
          {Array.isArray(value) ? value.map(renderLandMarkItem) : value}
        </div>
      </div>
    </div>
  );
};

export default UnitDescriptionItem;
