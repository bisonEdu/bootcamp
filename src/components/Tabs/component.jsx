import styles from "./styles.module.scss";
import { Tab } from "../Tab/component.jsx";
import { RestaurantTabContainer } from "../RestaurantTab/container.jsx";

export const Tabs = ({ restaurantIds, setActiveRestaurantId, activeTabId }) => {
  console.log("restaurantIds", restaurantIds);

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
