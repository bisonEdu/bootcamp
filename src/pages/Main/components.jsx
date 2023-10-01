import { Tabs } from "../../components/Tabs/component.jsx";
import { useState } from "react";
import { restaurants } from "../../constants/mock.js";
import { Restaurant } from "../../components/Restaurant/component.jsx";
import styles from "./styles.module.scss";

export const MainPage = () => {
  const tabButtons = restaurants.map(({ name }) => name);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabChange = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className={styles.content}>
      <Tabs buttons={tabButtons} onTabChange={handleTabChange} />
      <Restaurant {...restaurants[activeTabIndex]} />
    </div>
  );
};
