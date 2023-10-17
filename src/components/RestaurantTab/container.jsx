import { Tab } from "../Tab/component.jsx";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors.js";
import { useSelector } from "react-redux";

export const RestaurantTabContainer = ({ restaurantId, ...props }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) return null;

  return <Tab {...props}>{restaurant.name}</Tab>;
};
