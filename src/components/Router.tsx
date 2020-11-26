import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { ABOUT, CONTACT, SELECTED_WORKS } from "../defs/routerPaths";

import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import SelectedWorksScreen from "./screens/SelectedWorksScreen";

const Router = (): JSX.Element => {
    return (
        <Switch>
            <Route path={ABOUT} exact component={AboutScreen} />
            <Route path={SELECTED_WORKS} exact component={SelectedWorksScreen} />
            <Route path={CONTACT} exact component={ContactScreen} />
            <Redirect to={ABOUT} />
        </Switch>
    );
};

export default Router;
