import React, { FC } from "react";

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
  return (
    <div className={classes.contactCard}>
      <div className={classes.flipCard}>
        <div className={classes.flipCardInner}>
          {/*<Image*/}
          {/*  src={imageSrc}*/}
          {/*  alt="Contact photo"*/}
          {/*  width="200"*/}
          {/*  height="200"*/}
          {/*  className={classes.flipCardFront}*/}
          {/*/>*/}
          <div
            className={classes.flipCardFront}
            style={{ backgroundImage: `url(${imageSrc})` }}
          />

          <div className={classes.flipCardBack}>{description}</div>
        </div>
      </div>

      <div>
        <div className={classes.contactName}>{name}</div>
        <div className={classes.contactTitle}>{title}</div>
      </div>
    </div>
  );
};

export default ContactCard;
