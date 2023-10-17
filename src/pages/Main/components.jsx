import { useState } from "react";
import styles from "./styles.module.scss";
import { Header } from "../../components/Header/component.jsx";
import { Footer } from "../../components/Footer/component.jsx";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { RestaurantTabContainer } from "../../components/Tabs/container.jsx";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors.js";
import { RestaurantContainer } from "../../components/Restaurant/container.jsx";

export const MainPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantIds[0]
  );

  return (
    <div className={classNames(styles.content, "main")}>
      <Header className={styles.header} />

      <div className={styles.block}>
        <RestaurantTabContainer
          activeTabId={activeRestaurantId}
          setActiveRestaurantId={setActiveRestaurantId}
        />
        {activeRestaurantId && (
          <RestaurantContainer restaurantId={activeRestaurantId} />
        )}
      </div>

      <Footer className={styles.footer} />
    </div>
  );
};
