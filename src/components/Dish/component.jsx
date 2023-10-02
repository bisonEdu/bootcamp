import { Button } from "../Button/component.jsx";
import { useState } from "react";

export const Dish = ({ name, min, max }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <span>
      {name} &nbsp;
      <span>
        <Button
          onClickCallback={handleDecrement}
          disabled={count === min}
          title={"-"}
        />
        &nbsp;
        <span>{count}</span>
        &nbsp;
        <Button
          onClickCallback={handleIncrement}
          disabled={count === max}
          title={"+"}
        />
      </span>
    </span>
  );
};
