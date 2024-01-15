
import 'pace-js'
import 'pace-js/themes/purple/pace-theme-flash.css'
import "./styles/app.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import Routes from './routes';
import AppStoreProvider from "./store/Provider/Provider";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <AppStoreProvider>
        <Routes />
    </AppStoreProvider>
);
