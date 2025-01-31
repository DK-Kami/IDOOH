import React from "react";
import { Metadata } from "next";

import HeroSlide from "@/components/HeroSlide";
import MapContainer from "@/components/MapContainer";
import Slide from "@/components/Slide";
import UnitCard from "@/components/UnitCard";
import heroLocations from "@/public/images/hero-locations.jpg";
import { TGeoJson } from "@/shared/types";
import { baseMetadata, INVENTORY } from "@/utils/constants";

import classes from "./page.module.css";

export const metadata: Metadata = {
  title: "Locations",
  ...baseMetadata,
};

const LocationsPage = () => {
  const inventoryGeoJson = {
    type: "FeatureCollection",
    features: INVENTORY.map((unit) => ({
      type: "Feature",
      properties: {
        id: unit.id,
      },
      geometry: {
        type: "Point",
        coordinates: unit.coords,
      },
    })),
  } as TGeoJson;

  return (
    <div>
      <HeroSlide url={heroLocations.src} header="Locations" />

      <Slide>
        <MapContainer markers={inventoryGeoJson} withFitBounds />
      </Slide>

      <div className={classes.creativeList}>
        {INVENTORY.map((creative) => (
          <UnitCard
            key={creative.name as string}
            creativeId={creative.id as number}
            creativeName={creative.name as string}
            creativePhotoUrl={(creative.photos as string[])[0]}
          />
        ))}
        {/*{new Array(3).fill(0).map((_, i) => (*/}
        {/*  <div className={classes.creativeCardEmpty} key={`creative-${i}`}>*/}
        {/*    COMING SOON*/}
        {/*  </div>*/}
        {/*))}*/}
      </div>
    </div>
  );
};

export default LocationsPage;
