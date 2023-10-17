import { Button } from "../Button/component.jsx";
import { useState } from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { selectDishNameById } from "../../redux/entities/dish/selectors.js";

export const Dish = ({ min, max, dishId }) => {
  const name = useSelector((state) => selectDishNameById(state, dishId));
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className={styles.root}>
      <div>{name}</div>
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
