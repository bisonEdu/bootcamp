import { Menu } from "../Menu/component.jsx";
import { Reviews } from "../Reviews/component.jsx";
import styles from "./styles.module.scss";
import { ReviewForm } from "../ReviewForm/component.jsx";
import { useSelector } from "react-redux";

export const Restaurant = ({ activeRestaurantId }) => {
  const restaurant = useSelector(
    (state) => state.restaurant.entities[activeRestaurantId]
  );

  const { name, menu, reviews } = restaurant;

  return (
    <div className={styles.restaurantContainer}>
      <h3>{name}</h3>
      <Menu ids={menu} />
      <Reviews ids={reviews} />

      <ReviewForm className={styles.reviewForm} />
    </div>
  );
};
