import { useDispatch, useSelector } from "react-redux";
import { selectReviewLoadingStatus } from "../../redux/entities/review/selectors.js";
import { useEffect } from "react";
import { getReviews } from "../../redux/entities/review/thunks/get-reviews.js";
import { getUsers } from "../../redux/entities/user/thunks/get-users.js";
import { REQUEST_STATUS } from "../../constants/statuses.js";
import { Reviews } from "./component.jsx";

export const ReviewsContainer = ({ restaurantId, ...props }) => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector(selectReviewLoadingStatus);
  useEffect(() => {
    dispatch(getReviews(restaurantId));
    dispatch(getUsers());
  }, [restaurantId]);
  return (
    <>
      {loadingStatus === REQUEST_STATUS.pending ? (
        <div>Loading...</div>
      ) : (
        <Reviews {...props} />
      )}
    </>
  );
};
