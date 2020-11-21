import React from "react";
import { HashRouter } from "react-router-dom";

import styles from "./App.module.css";
import Header from "./components/Header";
import Router from "./components/Router";

const App = (): JSX.Element => {
    return (
        <div className={styles.App}>
            <HashRouter basename={"/"}>
                <Header />
                <Router />
            </HashRouter>
        </div>
    );
};

export default App;
