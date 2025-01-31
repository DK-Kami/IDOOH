export type TGeoJsonItem = {
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: TCoordinates;
  };
  properties: any;
};

export type TGeoJson = {
  type: "FeatureCollection";
  features: TGeoJsonItem[];
};

export type TCoordinates = [number, number];
