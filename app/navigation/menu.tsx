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
        
      </Link>
      <Link className={classes["nav_link"]} href={"/"}>
        ՆՈՐՈՒԹՅՈՒՆՆԵՐ
      </Link>
      <div className={classes["dropdown"]}>
        <button className={`${classes["nav_link"]} ${classes["dropbtn"]}`}>ԳՈՐԾՈՒՆԵՈՒԹՅՈՒՆ</button>
        <div className={classes["dropdown-content"]}>
          <Link href={"/"}>Խրախուսանքներ</Link>
          <Link href={"/"}>Բարեկարգումներ</Link>
          <Link href={"/"}>Սոցիալական</Link>
        </div>
      </div>
      <div className={classes["dropdown"]}>
        <button className={`${classes["nav_link"]} ${classes["dropbtn"]}`}>ԿԱՊ</button>
        <div className={classes["dropdown-content"]}>
          <Link href={"/"}>Ընդունելություն</Link>
          <Link href={"/"}>Կոնտակտ</Link>
          <Link href={"/"}>Նամակ համայնքապետին</Link>
        </div>
      </div>
      
    </div>
  );
};

export default Menu;
