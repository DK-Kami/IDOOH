import React, { FC } from "react";
import { useRouter } from "next/navigation";

import classes from "./index.module.css";

interface IUnitCard {
  creativeId: number;
  creativeName: string;
  creativePhotoUrl: string;
}

const UnitCard: FC<IUnitCard> = ({
  creativeId,
  creativeName,
  creativePhotoUrl,
}) => {
  const router = useRouter();

  const goToUnit = () => {
    console.log(router);
    if (!router) return;
    router.push(`/locations/${creativeId}`);
  };

  return (
    <div className={classes.creativeCard} key={creativeName} onClick={goToUnit}>
      <div
        className={classes.creativeCardImage}
        style={{ backgroundImage: `url(${creativePhotoUrl})` }}
      />
      <div>{creativeName}</div>
    </div>
  );
};

export default UnitCard;
