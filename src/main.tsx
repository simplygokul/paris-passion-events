import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "../app/page";
import ExperiencesPage from "../app/experiences/page";
import JourneyPage from "../app/journey/page";
import ContactPage from "../app/contact/page";
import "../app/globals.css";

const route = window.location.pathname.replace(/\/$/, "").split("/").pop();
const Page = route === "experiences"
  ? ExperiencesPage
  : route === "journey"
    ? JourneyPage
    : route === "contact"
      ? ContactPage
      : Home;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
