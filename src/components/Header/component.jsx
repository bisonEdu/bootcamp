import styles from "./styles.module.scss";
import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme.jsx";

export const Header = ({ className }) => {
  const [, toggleTheme] = useContext(ThemeContext);

  return (
    <header className={classNames(styles.header, className)}>
      <div className={styles.content}>
        <h3> The Restaurant App</h3>
        <button onClick={toggleTheme}>Change Theme</button>
      </div>
    </header>
  );
};
