import styles from "./styles.module.scss";
import { DishContainer } from "../Dish/container.jsx";

const min = 0;
const max = 5;

export const Menu = ({ ids }) => {
  return (
    <div>
      <h3>Menu</h3>
      <ul className={styles.menu}>
        {ids.map((id) => (
          <li key={id} className={styles.item}>
            <DishContainer dishId={id} min={min} max={max} />
          </li>
        ))}
      </ul>
    </div>
  );
};
