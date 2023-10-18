import styles from "./styles.module.scss";
import { DishContainer } from "../Dish/container.jsx";

const min = 0;
const max = 5;

export const Menu = ({ menu }) => {
  return (
    <ul className={styles.menu}>
      {menu.map((id) => (
        <li key={id}>
          <DishContainer dishId={id} min={min} max={max} />
        </li>
      ))}
    </ul>
  );
};
