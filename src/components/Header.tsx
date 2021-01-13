import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";

import { ABOUT, SELECTED_WORKS } from "../defs/routerPaths";

import Button from "./common/Button";

const HeaderContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: right;
    padding: 50px 0 0;
`;

const LogoContainer = styled.span`
    font-size: 1.5em;
    margin: 0 auto 0 100px;
    white-space: nowrap;
`;

const HeaderButtonsContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: right;
`;

const Header = (): JSX.Element => {
    const history = useHistory();
    const location = useLocation();

    return (
        <HeaderContainer>
            <LogoContainer>Charlie Liu</LogoContainer>
            <HeaderButtonsContainer>
                <Button active={location.pathname === ABOUT} onClick={() => history.push(ABOUT)}>
                    About
                </Button>
                <Button active={location.pathname === SELECTED_WORKS} onClick={() => history.push(SELECTED_WORKS)}>
                    Selected Works
                </Button>
                {/*TODO open email client*/}
                <Button>Contact</Button>
            </HeaderButtonsContainer>
        </HeaderContainer>
    );
};

export default Header;
