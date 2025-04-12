import { LayerProps } from "react-map-gl";
import { Metadata } from "next";

import alAinPhoto1 from "./public/al-ain/AlAin-1.webp";
import alAinPhoto2 from "./public/al-ain/AlAin-2.webp";
import alAinPhoto3 from "./public/al-ain/AlAin-3.webp";
import alAinHero from "./public/al-ain-road-hero.jpg";
import beirutPhoto1 from "./public/beirut/beirut-1.webp";
import beirutPhoto2 from "./public/beirut/beirut-2.webp";
import beirutPhoto3 from "./public/beirut/beirut-3.webp";
import beirutHero from "./public/beirut-street-hero.jpg";
import smbzArabianPhoto1 from "./public/smbz-arabian/ABR-1.webp";
import smbzArabianPhoto2 from "./public/smbz-arabian/ABR-2.webp";
import smbzMirdifPhoto1 from "./public/smbz-mirdif/MBZ-1.webp";
import smbzMirdifPhoto2 from "./public/smbz-mirdif/MBZ-2.webp";
import smbzMirdifPhoto3 from "./public/smbz-mirdif/MBZ-3.webp";
import smbzHero from "./public/smbz-road-hero.jpg";
import szrPalmPhoto1 from "./public/szr-palm-1/SZR-1.webp";
import szrPalmPhoto2 from "./public/szr-palm-1/SZR-2.webp";
import szrPalm2Photo1 from "./public/szr-palm-2/SZR-1.webp";
import szrPalm2Photo2 from "./public/szr-palm-2/SZR-2.webp";

export const INVENTORY: Record<
  string,
  string | string[] | number | number[]
>[] = [
  {
    id: 0,
    street: "SMBZ",
    name: "Mirdif City Centre",
    location: ["Sheikh Mohammed", "Bin Zayed Rd", "before Ras Al Khor Rd exit"],
    media: "Hoarding",
    traffic: 700000,
    size: "80x12 m / front lit",
    mediaKitUrl: "/pdf/smbz-mirdif-mediakit.pdf",
    landmarks: [
      "Abu Dhabi,",
      "Al Maktoum Airport,",
      "Dubai International City,",
      "Mirdif City Centre,",
      "Dragon Mart,",
      "Global Village,",
      "Nad Al Sheba,",
      "Al Khor",
    ],
    videoUrls: ["/videos/MBZ-video-1.mp4"],
    photos: [smbzMirdifPhoto1.src, smbzMirdifPhoto2.src, smbzMirdifPhoto3.src],
    heroPhoto: smbzHero.src,
    coords: [55.3949963, 25.1897052],
  },
  {
    id: 1,
    street: "SMBZ",
    name: "Arabian Ranches",
    location: ["Sheikh Mohammed", "Bin Zayed Rd", "Arabian Ranches"],
    media: "Hoarding",
    traffic: 700000,
    size: "50x12 m / front lit",
    mediaKitUrl: "/pdf/smbz-arabian-mediakit.pdf",
    landmarks: [
      "Abu Dhabi,",
      "Al Maktoum Airport,",
      "Dubai Sports City,",
      "Dubai Autodrome,",
      "Arabian Ranches,",
      "JVC,",
      "Al Barsha South,",
      "Dubai Butterfly Garden",
    ],
    photos: [smbzArabianPhoto1.src, smbzArabianPhoto2.src],
    heroPhoto: smbzHero.src,
    coords: [55.2678473, 25.0578632],
  },
  {
    id: 2,
    street: "AL AIN",
    name: "Nad Al Sheba",
    location: ["Al Ain Road between", "Nad Al Sheba 1", "and Nad Al Sheba 2"],
    media: "Hoarding",
    traffic: 600000,
    size: "50x12 m / front lit",
    mediaKitUrl: "/pdf/al-ain-mediakit.pdf",
    landmarks: [
      "Nad Al Sheba 1,",
      "Nad Al Sheba 2,",
      "Ras Al Khor,",
      "Dubai Racing Club",
    ],
    photos: [alAinPhoto1.src, alAinPhoto2.src, alAinPhoto3.src],
    heroPhoto: alAinHero.src,
    coords: [55.3291623, 25.1619682],
  },
  {
    id: 3,
    street: "SZR",
    name: "#1 Palm Jebel Ali",
    location: ["Sheikh Zayed Rd", "Palm Jebel Ali"],
    media: "Hoarding",
    traffic: 800000,
    size: "50x12 m / front lit",
    mediaKitUrl: "/pdf/szr-palm-1-mediakit.pdf",
    landmarks: [
      "Abu Dhabi,",
      "Al Maktoum Airport,",
      "Palm Jebel Ali,",
      "Downtown Jebel Ali,",
      "Motiongate,",
      "Legoland,",
      "The Outlet Village,",
      "Emarat,",
      "ENOC",
    ],
    photos: [szrPalmPhoto1.src, szrPalmPhoto2.src],
    heroPhoto: beirutHero.src,
    coords: [55.0226873, 24.9339072],
  },
  {
    id: 4,
    street: "SZR",
    name: "#2 Palm Jebel Ali",
    location: ["Sheikh Zayed Rd", "Palm Jebel Ali"],
    media: "Hoarding",
    traffic: 800000,
    size: "50x12 m / front lit",
    mediaKitUrl: "/pdf/szr-palm-2-mediakit.pdf",
    landmarks: [
      "Abu Dhabi,",
      "Al Maktoum Airport,",
      "Palm Jebel Ali,",
      "Downtown Jebel Ali,",
      "Motiongate,",
      "Legoland,",
      "The Outlet Village,",
      "Emarat,",
      "ENOC",
    ],
    photos: [szrPalm2Photo1.src, szrPalm2Photo2.src],
    heroPhoto: beirutHero.src,
    coords: [55.0447173, 24.9415782],
  },
  {
    id: 5,
    street: "BEIRUT STREET",
    name: "Madina Mall",
    location: "Beirut street",
    media: "Unipole",
    traffic: 350000,
    size: "12x6 m / 2 faces / back lit",
    mediaKitUrl: "/pdf/beirut-mediakit.pdf",
    landmarks: [
      "Madina Mall,",
      "Aster Hospital,",
      "Haleb str,",
      "ADNOC,",
      "Emarat",
    ],
    photos: [beirutPhoto1.src, beirutPhoto2.src, beirutPhoto3.src],
    heroPhoto: beirutHero.src,
    coords: [55.396133, 25.2799125],
  },
];

export const UNIT_SOURCE_NAME = "UNIT_SOURCE_NAME";
export const UNIT_LAYER_ID = "UNIT_LAYER_ID";

export const UNITS_LAYER: LayerProps = {
  id: UNIT_LAYER_ID,
  type: "symbol",
  source: UNIT_SOURCE_NAME,
  layout: {
    "icon-allow-overlap": true,
    "icon-image": "drop-marker",
    "icon-size": 1,
    "icon-anchor": "bottom",
  },
};

export const baseMetadata: Metadata = {
  description:
    "IDOOH is a new provider in the outdoor advertising market in Dubai, dedicated to delivering high-quality service.",
  keywords: [
    "IDOOH",
    "Contacts",
    "CEO",
    "Ilya Bulygin",
    "Mariia Faldina",
    "+971 58 173 3443",
  ],
};
