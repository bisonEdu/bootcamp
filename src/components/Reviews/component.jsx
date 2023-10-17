import { ReviewContainer } from "../Review/container.jsx";

export const Reviews = ({ ids }) => {
  return (
    <div>
      <h3>Reviews</h3>
      {ids.map((id) => (
        <ul key={id}>
          <li>
            <ReviewContainer reviewId={id} />
          </li>
        </ul>
      ))}
    </div>
  );
};
