import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";

import Router from "./components/Router";

const App = (): JSX.Element => {
    return (
        <HashRouter basename={"/"}>
            <Router />
        </HashRouter>
    );
};

export default App;
