import styles from "./styles.module.scss";
import { useSelector } from "react-redux";

export const Reviews = ({ ids }) => {
  const review = useSelector((state) => state.review.entities);

  return (
    <div>
      <h3>Reviews</h3>
      {ids.map((id) => (
        <ul key={id}>
          <li>
            <span className={styles.user}>{review[id].user}</span> -{" "}
            <span>{review[id].text}</span>
          </li>
        </ul>
      ))}
    </div>
  );
};
