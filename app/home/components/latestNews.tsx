import classes from "../style/news.module.css";
import { FC } from "react";
import { news } from "./news";
import Image from "next/image";

const LatestNews: FC = () => {
  const newsList = news.map(({ title, description,src }, index) => {
    return (
      <div className={classes["newslist-container"]} key={index}>
        <a href="/" className={classes["a"]}>
           {src&& <Image src={src} alt="img" width={200} height={150}/>}
          <h3>{title}</h3>
          <h4>{description}</h4>
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
