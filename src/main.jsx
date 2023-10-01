import ReactDOM from "react-dom/client";
import { MainPage } from "./pages/Main/components.jsx";
import "./index.scss";
import { Header } from "./components/Header/component.jsx";
import { Footer } from "./components/Footer/component.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <MainPage />
    <Footer />
  </>
);
