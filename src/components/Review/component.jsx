import styles from "../Reviews/styles.module.scss";
import { UserContainer } from "../User/container.jsx";

export const Review = ({ text, userId }) => {
  return (
    <div>
      <span className={styles.user}>{<UserContainer userId={userId} />}</span> -{" "}
      <span>{text}</span>
    </div>
  );
};
