import React from "react";
import HeroSlide from "@/components/HeroSlide";
import heroAbout from "@/public/images/hero-about.jpg";
import Slide from "@/components/Slide";
import { footerHeader } from "@/shared/theme";

const AboutPage = () => {
  return (
    <div>
      <HeroSlide url={heroAbout.src} header="About us" />

      <Slide></Slide>

      <Slide isRedSlide>
        <div style={footerHeader}>
          20+ years <br />
          of experience
        </div>
      </Slide>

      <Slide></Slide>
    </div>
  );
};

export default AboutPage;
