import { ReviewContainer } from "../Review/container.jsx";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map((id) => (
        <ul key={id}>
          <li>
            <ReviewContainer reviewId={id} />
          </li>
        </ul>
      ))}
    </div>
  );
};
