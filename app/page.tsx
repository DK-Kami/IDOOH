import { Metadata } from "next";

import HeroSlide from "@/components/HeroSlide";
import { baseMetadata } from "@/utils/constants";

import heroMain from "../public/images/hero-main.jpg";

export const metadata: Metadata = {
  title: "IDOOH",
  ...baseMetadata,
};

export default function HomePage() {
  return (
    <div>
      <HeroSlide
        url={heroMain.src}
        header="We just know how"
        subHeader="DOWNLOAD MEDIAKIT"
      />
    </div>
  );
}
