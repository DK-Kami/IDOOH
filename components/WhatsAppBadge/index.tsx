"use client";

import React from "react";
import Image from "next/image";

import whatsAppIcon from "@/public/icons/whats-app-icon.png";

import classes from "./index.module.css";

const WhatsAppBadge = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/971581733443", "_blank");
  };

  return (
    <div className={classes.badge} onClick={openWhatsApp}>
      <div>Get in touch</div>
      <Image
        src={whatsAppIcon.src}
        alt="what's app logo"
        width="50"
        height="50"
      />
    </div>
  );
};

export default WhatsAppBadge;
