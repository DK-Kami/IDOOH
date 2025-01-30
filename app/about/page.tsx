import React from "react";
import { Metadata } from "next";
import Image from "next/image";

import HeroSlide from "@/components/HeroSlide";
import LeadershipList from "@/components/LeadershipList";
import Slide from "@/components/Slide";
import aboutCircle from "@/public/images/about-circle.png";
import heroAbout from "@/public/images/hero-about.jpg";
import global from "@/shared/theme/global.module.css";
import { baseMetadata } from "@/utils/constants";

import classes from "./page.module.css";

export const metadata: Metadata = {
  title: "IDOOH",
  ...baseMetadata,
};

const AboutPage = () => {
  return (
    <div>
      <HeroSlide url={heroAbout.src} header="About us" />

      <Slide>
        <div className={classes.aboutContainer}>
          <div className={classes.aboutBody}>
            <Image
              src={aboutCircle}
              alt="IDOOH circle"
              className={classes.aboutBodyImage}
            />

            <div className={classes.aboutText}>
              IDOOH is a new provider of outdoor advertising in Dubai, dedicated
              to delivering high-quality billboard solutions.
            </div>
          </div>

          <div className={classes.aboutFooter}>It’s only the beginning!</div>
        </div>
      </Slide>

      <Slide isRedSlide>
        <div className={global.footerHeader}>
          20+ years <br />
          of experience
        </div>
      </Slide>

      <div className={classes.leadershipContainer}>
        <div className={classes.leadershipTitle}>Our leadership team</div>
        <div className={classes.leadershipText}>
          With 20 years of international experience in media and outdoor
          advertising across Europe and the MENA region, our team is dedicated
          to delivering exceptional results by creating advertising solutions
          with proven effectiveness. We leverage our accumulated expertise to
          develop strategic approach for building effective advertising
          networks.
        </div>
        <div className={classes.leadershipText}>
          Our commitment to high standards of customer service ensures mutually
          beneficial collaboration with our clients. Creativity is at the heart
          of what we do, driving campaigns that truly work for your business.
        </div>

        <div className={classes.leadershipList}>
          <LeadershipList />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
