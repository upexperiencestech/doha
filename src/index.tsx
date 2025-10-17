import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UpExperiences } from "./screens/UpExperiences";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <UpExperiences />
  </StrictMode>,
);
