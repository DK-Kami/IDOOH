import { Metadata } from "next";

import HomeHero from "@/components/HomeHero";
import { baseMetadata } from "@/utils/constants";
import AboutPage from "@/views/about";
import ClientsPage from "@/views/clients";
import ContactsPage from "@/views/contacts";
import LocationsPage from "@/views/locations";

export const metadata: Metadata = {
  title: "IDOOH",
  ...baseMetadata,
};

export default function HomePage() {
  return (
    <div>
      <HomeHero />
      <AboutPage />
      <LocationsPage />
      <ClientsPage />
      <ContactsPage />
    </div>
  );
}
