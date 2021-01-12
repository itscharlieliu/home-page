import { createMuiTheme, ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { HashRouter } from "react-router-dom";
import styled, { ThemeProps, ThemeProvider } from "styled-components";

import Header from "./components/Header";
import Router from "./components/Router";
import defaultTheme, { Theme } from "./defs/defaultTheme";

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;

    color: ${(props: ThemeProps<Theme>) => props.theme.text};
    background: ${(props: ThemeProps<Theme>) => props.theme.background};
`;

const MuiTheme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#fca311",
        },
        secondary: {
            main: "#14213d",
        },
    },
});

const App = (): JSX.Element => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <MuiThemeProvider theme={MuiTheme}>
                <AppContainer>
                    <HashRouter basename={"/"}>
                        <Header />
                        <Router />
                    </HashRouter>
                </AppContainer>
            </MuiThemeProvider>
        </ThemeProvider>
    );
};

export default App;
