"use client";

import React, { FC, PropsWithChildren } from "react";
import {
  Layer,
  Map,
  MapEvent,
  MapMouseEvent,
  NavigationControl,
  Source,
} from "react-map-gl";
import { useRouter } from "next/navigation";

import markerDropImage from "@/public/images/maker-drop.png";
import { TGeoJson } from "@/shared/types";
import { getMultiPolygonBounds } from "@/utils";
import {
  UNIT_LAYER_ID,
  UNIT_SOURCE_NAME,
  UNITS_LAYER,
} from "@/utils/constants";

import "mapbox-gl/dist/mapbox-gl.css";

interface IMapContainer extends PropsWithChildren {
  markers: TGeoJson;
  center?: [number, number];
  withFitBounds?: boolean;
}

const MapContainer: FC<IMapContainer> = ({
  markers,
  center,
  withFitBounds,
}) => {
  const mapboxApiToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? "";
  const mapboxStyleToken = process.env.NEXT_PUBLIC_MAPBOX_STYLE_TOKEN ?? "";

  const router = useRouter();

  const handleOnLoad = (e: MapEvent) => {
    e.target.loadImage(markerDropImage.src, (error, image) => {
      if (error || !image) throw error;
      e.target.addImage("drop-marker", image);
    });

    if (!withFitBounds) return;
    e.target.on("click", UNIT_LAYER_ID, (event: MapMouseEvent) => {
      if (event.features?.length) {
        const { id } = event.features[0].properties as { id: number };
        if (!id) return;
        router.push(`/locations/${id}`);
      }
    });
    e.target.on("mouseenter", UNIT_LAYER_ID, () => {
      e.target.getCanvas().style.cursor = "pointer";
    });
    e.target.on("mouseleave", UNIT_LAYER_ID, () => {
      e.target.getCanvas().style.cursor = "";
    });

    const coordinates = markers.features.map(
      (feature) => feature.geometry.coordinates,
    );
    e.target.fitBounds(getMultiPolygonBounds(coordinates), {
      padding: {
        top: 75,
        bottom: 30,
        left: 30,
        right: 30,
      },
    });
  };

  const defaultMapOptions = {
    zoom: 9,
    longitude: center?.[0] ?? 55.2678473,
    latitude: center?.[1] ?? 25.1278632,
  };

  return (
    <Map
      initialViewState={defaultMapOptions}
      style={{ width: "100%", height: "100%" }}
      mapStyle={mapboxStyleToken}
      mapboxAccessToken={mapboxApiToken}
      onLoad={handleOnLoad}
      scrollZoom={false}
      minZoom={5}
    >
      <NavigationControl showCompass={false} />
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
