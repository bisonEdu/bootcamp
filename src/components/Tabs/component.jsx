import styles from "./styles.module.scss";
import { RestaurantTabContainer } from "../RestaurantTab/container.jsx";

export const Tabs = ({ restaurantIds, setActiveRestaurantId, activeTabId }) => {

  return (
    <div className={styles.tabsContainer}>
      {restaurantIds.map((id) => (
        <RestaurantTabContainer
          restaurantId={id}
          key={id}
          tabId={id}
          setActiveRestaurantId={setActiveRestaurantId}
          activeTabId={activeTabId}
        />
      ))}
    </div>
  );
};
