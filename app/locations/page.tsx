import React from "react";

import HeroSlide from "@/components/HeroSlide";
import heroLocations from "@/public/images/hero-locations.jpg";

const LocationsPage = () => {
  return (
    <div>
      <HeroSlide url={heroLocations.src} header="Locations" />
    </div>
  );
};

export default LocationsPage;
