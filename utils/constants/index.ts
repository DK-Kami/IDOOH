import { LayerProps } from "react-map-gl";

import alAinHero from "./public/al-ain-road-hero.jpg";
import alAinPhoto1 from "./public/al-ain-road-photo-1.jpg";
import alAinPhoto2 from "./public/al-ain-road-photo-2.jpg";
import beirutHero from "./public/beirut-street-hero.jpg";
import beirutPhoto1 from "./public/beirut-street-photo-1.jpg";
import beirutPhoto2 from "./public/beirut-street-photo-2.jpg";
import smbzArabianPhoto1 from "./public/SMBZ-arabian-photo-1.png";
import smbzArabianPhoto2 from "./public/SMBZ-arabian-photo-2.png";
import smbzMirdifPhoto1 from "./public/SMBZ-mirdif-photo-1.png";
import smbzMirdifPhoto2 from "./public/SMBZ-mirdif-photo-2.png";
import smbzHero from "./public/smbz-road-hero.jpg";
import szrPalm2Photo1 from "./public/szr-palm-2-photo-1.png";
import szrPalm2Photo2 from "./public/szr-palm-2-photo-2.png";
import szrPalmPhoto1 from "./public/szr-palm-photo-1.png";
import szrPalmPhoto2 from "./public/szr-palm-photo-2.png";

export const INVENTORY: Record<
  string,
  string | string[] | number | number[]
>[] = [
  {
    id: 0,
    name: "SMBZ City Centre Mirdif",
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
    photos: [smbzMirdifPhoto1.src, smbzMirdifPhoto2.src],
    heroPhoto: smbzHero.src,
    coords: [55.3949963, 25.1897052],
  },
  {
    id: 1,
    name: "SMBZ Arabian Ranches",
    location: "Sheikh Mohammed Bin Zayed Rd / Arabian Ranches",
    media: "Sheikh Mohammed Bin Zayed Rd / Arabian Ranches",
    traffic: 700000,
    size: "50x12 m / front lit",
    landmarks: [
      "Abu Dhabi",
      "Al Maktoum Airport",
      "Dubai Sports City",
      "Dubai Autodrome",
      "Arabian Ranches",
      "JVC",
      "Al Barsha South",
      "Dubai Butterfly Garden",
    ],
    photos: [smbzArabianPhoto1.src, smbzArabianPhoto2.src],
    heroPhoto: smbzHero.src,
    coords: [55.2678473, 25.0578632],
  },
  {
    id: 2,
    name: "AL AIN Nad Al Sheba",
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
    coords: [55.3291623, 25.1619682],
  },
  {
    id: 3,
    name: "#1 SZR Palm Jebel Ali",
    location: "Sheikh Zayed Rd Palm Jebel Ali",
    media: "Hoarding",
    traffic: 800000,
    size: "50x12 m / front lit",
    landmarks: [
      "Abu Dhabi",
      "Al Maktoum Airport",
      "Palm Jebel Ali",
      "Downtown Jebel Ali",
      "Motiongate",
      "Legoland",
      "The Outlet Village",
      "Emarat",
      "ENOC",
    ],
    photos: [szrPalmPhoto1.src, szrPalmPhoto2.src],
    heroPhoto: beirutHero.src,
    coords: [55.0226883, 24.9339112],
  },
  {
    id: 4,
    name: "#2 SZR Palm Jebel Ali",
    location: "Sheikh Zayed Rd Palm Jebel Ali",
    media: "Hoarding",
    traffic: 800000,
    size: "50x12 m / front lit",
    landmarks: [
      "Abu Dhabi",
      "Al Maktoum Airport",
      "Palm Jebel Ali",
      "Downtown Jebel Ali",
      "Motiongate",
      "Legoland",
      "The Outlet Village",
      "Emarat",
      "ENOC",
    ],
    photos: [szrPalm2Photo1.src, szrPalm2Photo2.src],
    heroPhoto: beirutHero.src,
    coords: [54.9728838, 24.9739086],
  },
  {
    id: 5,
    name: "BEIRUT STREET Madina Mall",
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
    coords: [55.396133, 25.2799125],
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
