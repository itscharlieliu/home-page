import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ABOUT } from "../defs/routerPaths";
import AboutScreen from "./screens/AboutScreen";

const Router = (): JSX.Element => {
    return (
        <Switch>
            <Route path={ABOUT} exact component={AboutScreen} />
            <Redirect to={ABOUT} />
        </Switch>
    );
};

export default Router;
