import React from "react";

import HeroSlide from "@/components/HeroSlide";
import Slide from "@/components/Slide";
import greyLogo from "@/public/grey-logo.svg";
import heroClients from "@/public/images/hero-clients.jpg";
import { footerHeader } from "@/shared/theme";

import classes from "./page.module.css";

const ClientsPage = () => {
  return (
    <div>
      <HeroSlide url={heroClients.src} header="Clients" />
      <div className={classes.clientsList}>
        {new Array(20).fill(1).map((_, i) => (
          <div
            key={i}
            className={classes.clientCard}
            style={{ backgroundImage: `url(${greyLogo.src})` }}
          />
        ))}
      </div>
      <Slide isRedSlide>
        <div style={footerHeader}>
          Our Dubai story <br /> is just beginning
        </div>
      </Slide>
    </div>
  );
};

export default ClientsPage;
