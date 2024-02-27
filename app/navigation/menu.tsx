import classes from "./menu.module.css";
import { FC } from "react";
import Link from "next/link";

const Menu: FC = () => {
  return (
    <div className={classes["container"]}>
      <Link className={classes["nav_link_first"]} href={"/"}>
        ԳԼԽԱՎՈՐ
      </Link>
      <Link className={classes["nav_link"]} href={"/"}>
        ՈՒՂԵՐՁՆԵՐ
      </Link>
      <Link className={classes["nav_link"]} href={"/"}>
        ՄՇԱԿՈՒՅԹ ԵՎ ՍՊՈՐՏ
      </Link>
      <Link className={classes["nav_link"]} href={"/"}>
        ԸՆԴՈՒՆԵԼՈՒԹՅՈՒՆ
      </Link>
      <Link className={classes["nav_link"]} href={"/"}>
        ՍՈՑԻԱԼԱԿԱՆ ՈԼՈՐՏ
      </Link>
      <Link className={classes["nav_link"]} href={"/"}>
        ԲԱՐԵԿԱՐԳՈՒՄ ԵՎ ԿՈՄՈՒՆԱԼ ՍՊԱՍԱՐԿՈՒՄ
      </Link>
    </div>
  );
};

export default Menu;
