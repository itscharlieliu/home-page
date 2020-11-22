import React from "react";
import { HashRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import Router from "./components/Router";
import defaultTheme, { Theme } from "./defs/defaultTheme";

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;

    color: ${(props: { theme: Theme }) => props.theme.text};
    background: ${(props: { theme: Theme }) => props.theme.background};
`;

const App = (): JSX.Element => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <AppContainer>
                <HashRouter basename={"/"}>
                    <Header />
                    <Router />
                </HashRouter>
            </AppContainer>
        </ThemeProvider>
    );
};

export default App;
