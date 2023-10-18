import { Menu } from "./component.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { REQUEST_STATUS } from "../../constants/statuses.js";
import { getDishes } from "../../redux/entities/dish/thunks/get-dishes.js";
import { selectDishLoadingStatus } from "../../redux/entities/dish/selectors.js";

export const MenuContainer = ({ restaurantId, ...props }) => {
  const loadingStatus = useSelector(selectDishLoadingStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes(restaurantId));
  }, [restaurantId]);

  return (
    <>
      {loadingStatus === REQUEST_STATUS.pending ? (
        <div>Loading...</div>
      ) : (
        <Menu {...props} />
      )}
    </>
  );
};
