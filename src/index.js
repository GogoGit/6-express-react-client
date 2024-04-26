/*
    This is a SPA (Single Page Appication)
        - Really good if you have a ton of forms!!!!

*/

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
