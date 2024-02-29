import classes from "../style/imagestoPage.module.css";
import { FC } from "react";
import { images } from "./images";
import Image from "next/image";

const ImagestoPage: FC = () => {
  const imagesList = images.map((el, i) => {
    return (
      <div key={i} className={classes["images-list_container"]}>
        <a href={el.href} className={classes["images_a"]}>
          <img src={el.src} className={classes["page_images"]} />
          <h2 className={classes["title-images"]}>{el.title}</h2>
          <p>{el.description}</p>
        </a>
      </div>
    );
  });
  return (
    <div className={classes["container"]}>
      <div className={classes["child_container"]}>{imagesList}</div>
    </div>
  );
};

export default ImagestoPage;
