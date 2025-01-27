import React, { FC } from "react";
import { GeoJSON } from "geojson";

import HeroSlide from "@/components/HeroSlide";
import MapContainer from "@/components/MapContainer";
import UnitDescriptionItem from "@/components/UnitLayout/UnitDescriptionItem";
import locationIcon from "@/public/icons/location-icon.png";
import mediaIcon from "@/public/icons/media-icon.png";
import searchIcon from "@/public/icons/search-icon.png";
import sizeIcon from "@/public/icons/size-icon.png";
import trafficIcon from "@/public/icons/traffic-icon.png";
import { INVENTORY } from "@/utils/constants";

import classes from "./index.module.css";

interface IUnitLayout {
  id: number;
}

const UnitLayout: FC<IUnitLayout> = ({ id }) => {
  const unit = INVENTORY.find((unit) => unit.id === id);

  const descriptionItems = [
    { title: "location", icon: locationIcon },
    { title: "media", icon: mediaIcon },
    { title: "traffic", icon: trafficIcon },
    { title: "landmarks", icon: searchIcon },
    { title: "size", icon: sizeIcon },
  ];

  if (!unit) return <></>;

  const markers = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: unit.coords,
        },
      },
    ],
  } as GeoJSON;

  return (
    <div>
      <HeroSlide header={unit.name as string} url={unit.heroPhoto as string} />
      {/*<div*/}
      {/*  className={classes.unitPageHero}*/}
      {/*  style={{ backgroundImage: `url(${unit.heroPhoto})` }}*/}
      {/*>*/}
      {/*  <div className={classes.unitPageHeroTitle}>{unit.name}</div>*/}
      {/*</div>*/}

      <div className={classes.unitDescriptionList}>
        {descriptionItems.map((item) => (
          <UnitDescriptionItem
            key={item.title}
            icon={item.icon}
            title={item.title}
            value={unit[item.title]}
          />
        ))}
      </div>

      <div className={classes.unitGallery}>
        {(unit.photos as string[]).map((photo) => (
          <div
            className={classes.unitPhoto}
            key={photo}
            style={{ backgroundImage: `url(${photo})` }}
          />
        ))}
      </div>

      <div className={classes.unitMapContainer}>
        <div className={classes.unitMapTitle}>Map</div>
        <MapContainer markers={markers} />
      </div>
    </div>
  );
};

export default UnitLayout;
