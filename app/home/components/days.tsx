import classes from "../style/days.module.css"
import { FC } from "react";
import { importantDays } from "./importantDays";

const Days: FC = () => {
  const imDays = importantDays.map((el, i) => {
    return (
      <div key={i} className={classes["days_item"]}>
        <h3>{el.title}</h3>
        <p>{el.description}</p>
      </div>
    );
  });

  return <div className={classes["days_container"]}>{imDays}</div>;
};

export default Days;
