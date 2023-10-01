import {Menu} from "../Menu/component.jsx";
import {Reviews} from "../Reviews/component.jsx";
import styles from './styles.module.scss'

export const Restaurant = ({name, menu, reviews}) => {
    return (
        <div className={styles.restaurantContainer}>
            <h3>{name}</h3>
            <Menu menu={menu}/>
            <Reviews reviews={reviews}/>
        </div>
    )
}