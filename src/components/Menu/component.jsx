import { Dish } from "../Dish/component.jsx";
import styles from './styles.module.scss';

const min = 0;
const max = 5;

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu</h3>
      {menu.map(({ id, name }) => (
        <ul key={id} className={styles.menu}>
          <li className={styles.item}>
              <span> {name} </span>
            <Dish min={min} max={max} />
          </li>
        </ul>
      ))}
    </div>
  );
};
