"use client";

import React, { FC, PropsWithChildren } from "react";
import { Layer, Map, MapEvent, MapMouseEvent, Source } from "react-map-gl";
import { useRouter } from "next/navigation";
import { GeoJSON } from "geojson";

import markerDropImage from "@/public/images/maker-drop.png";
import {
  UNIT_LAYER_ID,
  UNIT_SOURCE_NAME,
  UNITS_LAYER,
} from "@/utils/constants";

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

  const router = useRouter();

  const handleOnLoad = (e: MapEvent) => {
    e.target.loadImage(markerDropImage.src, (error, image) => {
      if (error || !image) throw error;
      e.target.addImage("drop-marker", image);
    });

    e.target.on("click", UNIT_LAYER_ID, (event: MapMouseEvent) => {
      if (event.features?.length) {
        const { id } = event.features[0].properties as { id: number };
        router.push(`/locations/${id}`);
      }
    });
    e.target.on("mouseenter", UNIT_LAYER_ID, () => {
      e.target.getCanvas().style.cursor = "pointer";
    });
    e.target.on("mouseleave", UNIT_LAYER_ID, () => {
      e.target.getCanvas().style.cursor = "";
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
