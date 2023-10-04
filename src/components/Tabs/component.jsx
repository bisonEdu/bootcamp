import { useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Tabs = ({ buttons, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    onTabChange(index);
  };

  return (
    <div className={styles.tabsContainer}>
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => handleTabClick(index)}
          className={classNames(styles.tab, {
            [styles.active]: index === activeTab,
          })}
        >
          {button}
        </button>
      ))}
    </div>
  );
};
