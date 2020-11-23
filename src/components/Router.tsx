import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { ABOUT, SELECTED_WORKS } from "../defs/routerPaths";

import AboutScreen from "./screens/AboutScreen";
import SelectedWorksScreen from "./screens/SelectedWorksScreen";

const Router = (): JSX.Element => {
    return (
        <Switch>
            <Route path={ABOUT} exact component={AboutScreen} />
            <Route path={SELECTED_WORKS} exact component={SelectedWorksScreen} />
            <Redirect to={ABOUT} />
        </Switch>
    );
};

export default Router;
