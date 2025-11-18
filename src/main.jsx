import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { SpeedInsights } from "@vercel/speed-insights/react"

AOS.init({
  duration: 800, // animation duration
  once: true, // whether animation should happen only once
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SpeedInsights/>
    <App />
  </StrictMode>
);
