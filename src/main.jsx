import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import RestAPI from "../restAPI.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RestAPI />
  </StrictMode>
);