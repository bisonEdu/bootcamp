import styles from "./styles.module.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";

export const Tabs = ({ restaurantIds, setActiveRestaurantId, activeTabId }) => {
  const restaurant = useSelector((state) => state.restaurant.entities);
  console.log("restaurantIds", restaurantIds);

  return (
    <div className={styles.tabsContainer}>
      {restaurantIds.map((id) => (
        <button
          key={id}
          onClick={() => setActiveRestaurantId(id)}
          className={classNames(styles.tab, {
            [styles.active]: activeTabId === id,
          })}
        >
          {restaurant[id].name}
        </button>
      ))}
    </div>
  );
};
