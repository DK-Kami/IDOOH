"use client";

import React, { FC, PropsWithChildren } from "react";
import { Layer, Map, MapEvent, Source } from "react-map-gl";
import { GeoJSON } from "geojson";

import markerDropImage from "@/public/images/maker-drop.png";
import { UNIT_SOURCE_NAME, UNITS_LAYER } from "@/utils/constants";

import "mapbox-gl/dist/mapbox-gl.css";

interface IMapContainer extends PropsWithChildren {
  markers: GeoJSON;
}

const defaultMapOptions = {
  zoom: 10,
  longitude: 55.2678473,
  latitude: 25.0878632,
};

const MapContainer: FC<IMapContainer> = ({ markers }) => {
  const mapboxApiToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? "";
  const mapboxStyleToken = process.env.NEXT_PUBLIC_MAPBOX_STYLE_TOKEN ?? "";

  const handleOnLoad = (e: MapEvent) => {
    e.target.loadImage(markerDropImage.src, (error, image) => {
      if (error || !image) throw error;
      e.target.addImage("drop-marker", image);
    });
  };

  return (
    <Map
      initialViewState={defaultMapOptions}
      style={{ width: "100%", height: "100%" }}
      mapStyle={mapboxStyleToken}
      mapboxAccessToken={mapboxApiToken}
      onLoad={handleOnLoad}
      scrollZoom={false}
    >
      <Source
        id={UNIT_SOURCE_NAME}
        type="geojson"
        data={markers}
        generateId={true}
        cluster={false}
      >
        <Layer {...UNITS_LAYER} />
      </Source>
    </Map>
  );
};

export default MapContainer;
