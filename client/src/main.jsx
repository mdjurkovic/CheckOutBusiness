import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { routerProvider } from "./router";

const container = document.getElementById("root");
container.classList.add("justify-align");
const app = createRoot(container);

app.render(<React.StrictMode>{routerProvider}</React.StrictMode>);
