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
  return (
    <div id="contacts">
      <Slide>
        <div className={classes.contactsContainer}>
          <div className={classes.contactsTitle}>Contacts</div>

          <div className={classes.contactsItem}>
            <div className={classes.contactsItemTitle}>Office</div>
            <div className={classes.contactsItemValue}>
              1301-0165, floor 13, The One Tower, <br />
              Sheik Zayed Road, Barsha Heights, <br />
              TECOM, Dubai, UAE
            </div>
          </div>
          <div className={classes.contactsItem}>
            <div className={classes.contactsItemTitle}>Email</div>
            <div className={classes.contactsItemValue}>faldina@idooh.ae</div>
          </div>
          <div className={classes.contactsItem}>
            <div className={classes.contactsItemTitle}>Phone</div>
            <div className={classes.contactsItemValue}>+ 971 581 733 443</div>
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
