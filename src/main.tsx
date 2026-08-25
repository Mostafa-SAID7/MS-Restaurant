import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles.css";

const themeInitScript = `(function(){try{var s=localStorage.getItem("portfolio-theme");var d=s==="dark";var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

const script = document.createElement("script");
script.textContent = themeInitScript;
document.head.prepend(script);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
