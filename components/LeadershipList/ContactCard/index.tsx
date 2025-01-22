"use client";

import React, { FC, useState } from "react";

import classes from "./index.module.css";

interface IContactCard {
  imageSrc: string;
  name: string;
  title: string;
  description: string;
}

const ContactCard: FC<IContactCard> = ({
  imageSrc,
  name,
  title,
  description,
}) => {
  const [isShowDescription, setIsShowDescription] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsShowDescription(true)}
      onMouseLeave={() => setIsShowDescription(false)}
      className={classes.contactCard}
    >
      <div
        className={classes.contactPhoto}
        style={{
          backgroundImage: !isShowDescription ? `url(${imageSrc})` : "none",
        }}
      >
        {isShowDescription && description}
      </div>

      <div>
        <div className={classes.contactName}>{name}</div>
        <div className={classes.contactTitle}>{title}</div>
      </div>
    </div>
  );
};

export default ContactCard;
