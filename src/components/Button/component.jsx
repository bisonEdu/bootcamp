import classNames from "classnames";
import styles from "./style.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme.jsx";

export const Button = ({ title, onClickCallback, disabled }) => {
  const [{ theme }] = useContext(ThemeContext);

  return (
    <button
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        border: theme.border,
      }}
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
