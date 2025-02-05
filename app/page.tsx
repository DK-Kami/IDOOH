import { Metadata } from "next";

import HomeHero from "@/components/HomeHero";
import { baseMetadata } from "@/utils/constants";

export const metadata: Metadata = {
  title: "IDOOH",
  ...baseMetadata,
};

export default function HomePage() {
  return (
    <div>
      <HomeHero />
    </div>
  );
}
