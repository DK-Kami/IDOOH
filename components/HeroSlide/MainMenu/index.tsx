import React from "react";
import Link from "next/link";

import classes from "./index.module.css";

const MainMenu = () => {
  return (
    <div className={classes.mainMenu}>
      <Link href="/">Home</Link>
      <Link href="/about">About us</Link>
      <Link href="/locations">Locations</Link>
      <Link href="/clients">Clients</Link>
      <Link href="/contacts">Contacts</Link>
    </div>
  );
};

export default MainMenu;
