import { useState } from "react";

export const Tabs = ({ buttons, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    onTabChange(index);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-buttons">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            style={{
              fontWeight: index === activeTab ? "bold" : "normal",
              color: index === activeTab ? "blue" : "black",
            }}
            className={index === activeTab ? "active" : ""}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};
