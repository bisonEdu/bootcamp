import { Tabs } from "./component.jsx";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors.js";
import { useSelector } from "react-redux";

export const RestaurantTabContainer = (props) => {
  const restaurantIds = useSelector(selectRestaurantIds);
  return <Tabs {...props} restaurantIds={restaurantIds} />;
};
