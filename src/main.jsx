import ReactDOM from "react-dom/client";
import { MainPage } from "./pages/Main/components.jsx";
import "./index.scss";
import { ThemeProvider } from "./contexts/Theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <MainPage />
  </ThemeProvider>
);
