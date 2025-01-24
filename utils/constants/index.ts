import { LayerProps } from "react-map-gl";

import alAinHero from "./public/al-ain-road-hero.jpg";
import alAinPhoto1 from "./public/al-ain-road-photo-1.jpg";
import alAinPhoto2 from "./public/al-ain-road-photo-2.jpg";
import beirutHero from "./public/beirut-street-hero.jpg";
import beirutPhoto1 from "./public/beirut-street-photo-1.jpg";
import beirutPhoto2 from "./public/beirut-street-photo-2.jpg";
import smbzHero from "./public/smbz-road-hero.jpg";
import smbzPhoto1 from "./public/smbz-road-photo-1.jpg";
import smbzPhoto2 from "./public/smbz-road-photo-2.jpg";

export const INVENTORY: Record<
  string,
  string | string[] | number | number[]
>[] = [
  {
    id: 0,
    name: "Beirut Street Unipole",
    location: "Beirut street",
    media: "Unipole",
    traffic: 350000,
    size: "12x6 m / 2 faces / back lit",
    landmarks: [
      "Madina Mall",
      "Aster Hospital",
      "Haleb str",
      "ADNOC",
      "Emarat",
    ],
    photos: [beirutPhoto1.src, beirutPhoto2.src],
    heroPhoto: beirutHero.src,
    coords: [55.3908711, 25.2669488],
  },
  {
    id: 1,
    name: "SMBZ Road Hoarding",
    location: "Sheikh Mohammed Bin Zayed Rd before Ras Al Khor Rd exit",
    media: "Hoarding",
    traffic: 700000,
    size: "80x12 m / front lit",
    landmarks: [
      "Abu Dhabi",
      "Al Maktoum Airport",
      "Dubai International City",
      "City Centre Mirdif",
      "Dragon Mart",
      "Global Village",
      "Nad Al Sheba",
      "Al Khor",
    ],
    photos: [smbzPhoto1.src, smbzPhoto2.src],
    heroPhoto: smbzHero.src,
    coords: [55.3920941, 25.1887028],
  },
  {
    id: 2,
    name: "Al Ain Road Hoarding",
    location: "Al Ain Road between Nad Al Sheba 1 and Nad Al Sheba 2",
    media: "Hoarding",
    traffic: 600000,
    size: "50x12 m / front lit",
    landmarks: [
      "Nad Al Sheba 1",
      "Nad Al Sheba 2",
      "Ras Al Khor",
      "Dubai Racing Club",
    ],
    photos: [alAinPhoto1.src, alAinPhoto2.src],
    heroPhoto: alAinHero.src,
    coords: [55.3255861, 25.1653898],
  },
];

export const UNIT_SOURCE_NAME = "UNIT_SOURCE_NAME";

export const UNITS_LAYER: LayerProps = {
  id: "UNIT_LAYER_ID",
  type: "symbol",
  source: UNIT_SOURCE_NAME,
  layout: {
    "icon-allow-overlap": true,
    "icon-image": "drop-marker",
    "icon-size": 1,
  },
};
