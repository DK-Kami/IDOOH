import React from "react";
import { Metadata } from "next";

import HeroSlide from "@/components/HeroSlide";
import Slide from "@/components/Slide";
import greyLogo from "@/public/grey-logo.svg";
import heroClients from "@/public/images/hero-clients.jpg";
import global from "@/shared/theme/global.module.css";
import { baseMetadata } from "@/utils/constants";

import classes from "./page.module.css";

export const metadata: Metadata = {
  title: "Clients",
  ...baseMetadata,
};

const ClientsPage = () => {
  return (
    <div>
      <HeroSlide
        url={heroClients.src}
        header="Clients"
        subHeader="Here could be a kaleidoscope of logos of brands and companies that our team members have successfully developed over the years and we thank them for their trust. These are thousands of companies from small local to the largest and world-famous, including all international advertising holdings. But soon your company logo will be here!"
      />
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
        <div className={global.footerHeader}>
          Our Dubai story <br /> is just beginning
        </div>
      </Slide>
    </div>
  );
};

export default ClientsPage;
