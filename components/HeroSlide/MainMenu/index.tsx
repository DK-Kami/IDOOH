import React, { FC } from "react";
import { useRouter } from "next/navigation";

import classes from "./index.module.css";

interface IMainMenu {
  onCloseMenu: () => void;
}

const MainMenu: FC<IMainMenu> = ({ onCloseMenu }) => {
  const router = useRouter();

  const scrollTo = (blockId: string) => {
    if (location.pathname.includes("locations")) {
      router.push("/");
    }
    const element = document.getElementById(blockId);
    element?.scrollIntoView({ behavior: "smooth" });

    onCloseMenu();
  };

  return (
    <div className={classes.mainMenu}>
      <div onClick={() => scrollTo("home")}>Home</div>
      <div onClick={() => scrollTo("about")}>About us</div>
      <div onClick={() => scrollTo("locations")}>Locations</div>
      <div onClick={() => scrollTo("clients")}>Clients</div>
      <div onClick={() => scrollTo("contacts")}>Contacts</div>
    </div>
  );
};

export default MainMenu;
