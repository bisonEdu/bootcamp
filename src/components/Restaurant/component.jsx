import { Reviews } from "../Reviews/component.jsx";
import styles from "./styles.module.scss";
import { ReviewForm } from "../ReviewForm/component.jsx";
import { MenuContainer } from "../Menu/container.jsx";
import { ReviewsContainer } from "../Reviews/container.jsx";

export const Restaurant = ({ name, menu, reviews, id }) => {
  return (
    <div className={styles.restaurantContainer}>
      <h3>{name}</h3>
      <MenuContainer restaurantId={id} menu={menu} />
      <ReviewsContainer restaurantId={id} reviews={reviews} />
      <ReviewForm className={styles.reviewForm} />
    </div>
  );
};
