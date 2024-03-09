import classes from "../style/days.module.css";
import { FC } from "react";
import { importantDays } from "./importantDays";

const Days: FC = () => {
  const imDays = importantDays.map((el, i) => {
    return (
      <div key={i} className={classes["days_item"]}>
        <h2>{el.title}</h2>
        <p className={classes["days_description"]}>{el.description}</p>
      </div>
    );
  });

  return <div className={classes["days_container"]}>{imDays}</div>;
};

export default Days;
