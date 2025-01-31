import { TCoordinates } from "@/shared/types";

const isTCoordinates = (coords: any[]): coords is TCoordinates => {
  return (
    coords.length === 2 &&
    coords.every((coordinate) => typeof coordinate === "number")
  );
};

export const getMultiPolygonBounds = (
  coordinates: TCoordinates | TCoordinates[],
  bounds: [TCoordinates, TCoordinates] = [
    [0, 0],
    [Number.MAX_VALUE, Number.MAX_VALUE],
  ],
): [TCoordinates, TCoordinates] => {
  if (isTCoordinates(coordinates)) {
    const [lng, lat] = coordinates;
    bounds[0][0] = Math.abs(lng) > Math.abs(bounds[0][0]) ? lng : bounds[0][0];
    bounds[1][0] = Math.abs(lng) < Math.abs(bounds[1][0]) ? lng : bounds[1][0];
    bounds[0][1] = Math.abs(lat) > Math.abs(bounds[0][1]) ? lat : bounds[0][1];
    bounds[1][1] = Math.abs(lat) < Math.abs(bounds[1][1]) ? lat : bounds[1][1];
  } else {
    coordinates.forEach((coords) => {
      return getMultiPolygonBounds(coords, bounds);
    });
  }
  return bounds;
};
