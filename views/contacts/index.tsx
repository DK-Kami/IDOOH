"use client";
import React from "react";
import { Metadata } from "next";

import Slide from "@/components/Slide";
import { baseMetadata } from "@/utils/constants";

import classes from "./index.module.css";

export const metadata: Metadata = {
  title: "Contacts",
  ...baseMetadata,
};

const ContactsPage = () => {
  const goTo = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div id="contacts">
      <Slide>
        <div className={classes.contactsContainer}>
          <div className={classes.contactsTitle}>Contacts</div>
          <div className={classes.contactsItem}>
            <div className={classes.contactsItemTitle}>Office</div>
            <div
              className={classes.contactsItemValue}
              onClick={() =>
                goTo(
                  "https://www.google.com/maps/search/1301-0165,+floor+13,+The+One+Tower,+Sheik+Zayed+Road,+Barsha+Heights,+TECOM,+Dubai,+UAE/@25.0992687,55.1745348,1021m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI1MDQwNi4wIKXMDSoASAFQAw%3D%3D",
                )
              }
            >
              1301-0165, floor 13, The One Tower, <br />
              Sheik Zayed Road, Barsha Heights, <br />
              TECOM, Dubai, UAE
            </div>
          </div>
          <div className={classes.contactsItem}>
            <div className={classes.contactsItemTitle}>Email</div>
            <div
              className={classes.contactsItemValue}
              onClick={() => goTo("mailto:faldina@idooh.ae")}
            >
              faldina@idooh.ae
            </div>
          </div>
          <div className={classes.contactsItem}>
            <div className={classes.contactsItemTitle}>Phone</div>
            <div
              className={classes.contactsItemValue}
              onClick={() => goTo("tel:971581733443")}
            >
              + 971 581 733 443
            </div>
          </div>
          <div className={classes.contactsItem}>
            <div className={classes.contactsItemTitle}>LinkedIn</div>
            <div
              className={classes.contactsItemValue}
              onClick={() =>
                goTo("https://www.linkedin.com/company/idooh-advertising/")
              }
            >
              IDOOH
            </div>
          </div>

          <div className={classes.contactsFooter}>
            <div>© Copyright 2024 IDOOH LLC.</div>{" "}
            <div>All rights reserved.</div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default ContactsPage;
