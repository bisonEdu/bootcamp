import classNames from "classnames";
import styles from "./style.module.scss";

export const Button = ({ title, onClickCallback, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClickCallback}
      disabled={disabled}
      className={classNames(styles["button"], {
        [styles.disabled]: disabled,
      })}
    >
      {title}
    </button>
  );
};
