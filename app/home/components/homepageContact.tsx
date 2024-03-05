import classes from "../style/homepageContact.module.css";
import { FC } from "react";
import Image from "next/image";

const HomePageContact: FC = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["child_container"]}>
        <div className={classes["img_container"]}>
          <Image
            className={classes["contact_img"]}
            src={"/images/home-page-images/contact.jpg"}
            alt="image"
            width={600}
            height={250}
          />
        </div>
        <div className={classes["contact_container"]}></div>
      </div>
    </div>
  );
};

export default HomePageContact;
