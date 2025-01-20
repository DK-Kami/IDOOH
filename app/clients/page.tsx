import React from "react";

import HeroSlide from "@/components/HeroSlide";
import Slide from "@/components/Slide";
import greyLogo from "@/public/grey-logo.svg";
import heroClients from "@/public/images/hero-clients.jpg";
import { footerHeader } from "@/shared/theme";

const ClientsPage = () => {
  return (
    <div>
      <HeroSlide url={heroClients.src} header="Clients" />
      <Slide>
        <div
          style={{
            margin: "122px 236px",
            height: "calc(100vh - 372px)",
            backgroundImage: `url(${greyLogo.src})`,
            backgroundRepeat: "space",
          }}
        />
      </Slide>
      <Slide isRedSlide>
        <div style={footerHeader}>
          Our Dubai story <br /> is just beginning
        </div>
      </Slide>
    </div>
  );
};

export default ClientsPage;
