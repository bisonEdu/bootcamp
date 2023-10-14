import { Provider } from "react-redux";
import { ThemeProvider } from "./contexts/Theme.jsx";
import { MainPage } from "./pages/Main/components.jsx";
import store from "./redux";
import "./index.scss";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <MainPage />
      </ThemeProvider>
    </Provider>
  );
};
