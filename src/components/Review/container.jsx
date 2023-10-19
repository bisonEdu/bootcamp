import { useSelector } from "react-redux";
import { Review } from "./component.jsx";
import { selectReviewById } from "../../redux/entities/review/selectors.js";

export const ReviewContainer = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));

  if (!review) {
    return null;
  }
  return <Review {...review} />;
};
