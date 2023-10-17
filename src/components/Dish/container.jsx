import { selectDishById } from "../../redux/entities/dish/selectors.js";
import { useSelector } from "react-redux";
import { Dish } from "./component.jsx";

export const DishContainer = ({ dishId, ...props }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  if (!dish) return null;
  return <Dish {...props} dish={dish} />;
};
