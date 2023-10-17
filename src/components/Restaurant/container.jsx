import { selectRestaurantById } from "../../redux/entities/restaurant/selectors.js";
import { useSelector } from "react-redux";
import { Restaurant } from "./component.jsx";

export const RestaurantContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  if (!restaurant) return null;

  return <Restaurant {...restaurant} />;
};
