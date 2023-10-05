import { Tabs } from "../../components/Tabs/component.jsx";
import { useState } from "react";
import { restaurants } from "../../constants/mock.js";
import { Restaurant } from "../../components/Restaurant/component.jsx";
import styles from "./styles.module.scss";
import { Header } from "../../components/Header/component.jsx";
import { Footer } from "../../components/Footer/component.jsx";
import classNames from "classnames";

export const MainPage = () => {
  const tabButtons = restaurants.map(({ name }) => name);
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  const handleTabChange = (index) => {
    setActiveRestaurantIndex(index);
  };

  return (
    <div className={classNames(styles.content, "main")}>
      <Header className={styles.header} />

      <div className={styles.block}>
        <Tabs buttons={tabButtons} onTabChange={handleTabChange} />
        <Restaurant {...restaurants[activeRestaurantIndex]} />
      </div>

      <Footer className={styles.footer} />
    </div>
  );
};
