import classes from "../style/news.module.css";
import { FC } from "react";
import { news } from "./news";
import Image from "next/image";

const LatestNews: FC = () => {
  const newsList = news.map(({ src, title, description }, index) => {
    return (
      <div className={classes["newslist-container"]} key={index}>
        <a href="/" className={classes["a"]}>
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
