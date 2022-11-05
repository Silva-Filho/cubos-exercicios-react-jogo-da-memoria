import React from "react";
import ReactDOM from "react-dom/client";

import { Home } from "./pages/Home";

import "./global.css";

// @ts-ignore
ReactDOM.createRoot( document.getElementById( "root" ) ).render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
);
