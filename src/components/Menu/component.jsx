import {Dish} from "../Dish/component.jsx";
import styles from './styles.module.scss';

const min = 0;
const max = 5;

export const Menu = ({menu}) => {
    return (
        <div>
            <h3>Menu</h3>
            <ul className={styles.menu}>
                {menu.map(({id, name}) => (
                    <li key={id} className={styles.item}>
                        <Dish name={name} min={min} max={max}/>
                    </li>
                ))}
            </ul>

        </div>
    );
};
