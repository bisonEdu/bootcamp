import { Tabs } from "../../components/Tabs/component.jsx";
import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/component.jsx";
import styles from "./styles.module.scss";
import { Header } from "../../components/Header/component.jsx";
import { Footer } from "../../components/Footer/component.jsx";
import classNames from "classnames";
import { useSelector } from "react-redux";

export const MainPage = () => {
  const restaurantIds = useSelector((state) => state.restaurant.ids);
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantIds[0]
  );

  return (
    <div className={classNames(styles.content, "main")}>
      <Header className={styles.header} />

      <div className={styles.block}>
        <Tabs
          restaurantIds={restaurantIds}
          setActiveRestaurantId={setActiveRestaurantId}
          activeTabId={activeRestaurantId}
        />
        <Restaurant activeRestaurantId={activeRestaurantId} />
      </div>

      <Footer className={styles.footer} />
    </div>
  );
};
