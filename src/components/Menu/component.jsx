import { Dish } from "../Dish/component.jsx";
import styles from "./styles.module.scss";

const min = 0;
const max = 5;

export const Menu = ({ ids }) => {
  return (
    <div>
      <h3>Menu</h3>
      <ul className={styles.menu}>
        {ids.map((id) => (
          <li key={id} className={styles.item}>
            <Dish dishId={id} min={min} max={max} />
          </li>
        ))}
      </ul>
    </div>
  );
};
