import styles from "./styles.module.scss";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map(({ id, text, user }) => (
        <ul key={id}>
          <li>
            <span className={styles.user}>{user}</span> - <span>{text}</span>
          </li>
        </ul>
      ))}
    </div>
  );
};
