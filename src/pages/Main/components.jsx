import { Tabs } from "../../components/Tabs/component.jsx";
import { useState } from "react";
import { restaurants } from "../../constants/mock.js";
import { Restaurant } from "../../components/Restaurant/component.jsx";

export const MainPage = () => {
  const tabButtons = restaurants.map(({ name }) => name);
  const [, setActiveTabIndex] = useState(0);
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

  const handleTabChange = (index) => {
    setActiveTabIndex(index);
    setActiveRestaurant(restaurants[index]);
  };

  return (
    <div className="main-wrapper">
      <Tabs buttons={tabButtons} onTabChange={handleTabChange} />
      <Restaurant {...activeRestaurant} />
    </div>
  );
};
