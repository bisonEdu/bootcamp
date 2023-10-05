import { createContext, useState } from "react";

const themes = {
  dark: {
    backgroundColor: "black",
    border: "1px solid rgba(144, 202, 249, 0.5)",
    color: "rgb(144, 202, 249)",
  },
  white: {
    border: "1px solid rgba(144, 202, 249, 0.5)",
  },
};
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const theme = isDark ? themes.dark : themes.white;

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
