import classes from "./menu.module.css";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Menu: FC = () => {
  return (
    <div className={classes["container"]}>
      <Link className={classes["nav_link_first"]} href={"/"}>
        <Image
          src={"/images/home-page-images/logo.jpg"}
          alt="img"
          width={70}
          height={70}
        />
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
