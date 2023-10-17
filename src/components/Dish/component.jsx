import { Button } from "../Button/component.jsx";
import { useState } from "react";
import styles from "./styles.module.scss";

export const Dish = ({ min, max, dish }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className={styles.root}>
      <div>{dish.name}</div>
      <div className={styles.item}>
        <Button
          className={styles.button}
          title="-"
          onClickCallback={handleDecrement}
          disabled={count === min}
        />
        <span className={styles.amount}>{count}</span>
        <Button
          className={styles.button}
          title="+"
          onClickCallback={handleIncrement}
          disabled={count === max}
        />
      </div>
    </div>
  );
};
