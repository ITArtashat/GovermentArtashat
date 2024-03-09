import classes from "../style/news.module.css";
import { FC } from "react";
import { news } from "./news";
import Image from "next/image";

const LatestNews: FC = () => {
  const newsList = news.map(({ title, description,src,title2,description2 }, index) => {
    return (
      <div className={classes["newslist-container"]} key={index}>
        <a href="/" className={classes["a"]}>
           {src&& <Image src={src} alt="img" width={250} height={150} className={classes["news_image"]}/>}
          <p className={classes["title_p"]}>{title}</p>
          <p className={classes["description_p"]}>{description}</p>
          {title2&& <p className={classes["title_p_2"]}>{title2}</p>}
          {description2&& <p className={classes["description_p"]}>{description2}</p>}
        </a>
      </div>
    );
  });
  return (
    <div className={classes["container"]}>
      <div className={classes["news-title-div"]}>
        <div className={classes["title_div"]}>
          <h2>Վերջին նորություններ</h2>
        </div>
        <div className={classes["news_container"]}>{newsList}</div>
      </div>
    </div>
  );
};

export default LatestNews;
