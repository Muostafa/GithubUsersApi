import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContext";
import { GithubProvider } from "./context/GithubContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <GithubProvider>
        <App />
      </GithubProvider>
    </ThemeProvider>
  </StrictMode>
);
