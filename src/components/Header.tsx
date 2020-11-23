import React, { ReactNode } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { Theme } from "../defs/defaultTheme";
import { ABOUT, CONTACT, SELECTED_WORKS } from "../defs/routerPaths";

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

const HeaderButtonText = styled.button`
    background: none;
    color: ${(props: { theme: Theme }) => props.theme.text};

    outline: none;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: max-content;
    font-size: 1em;

    padding: 0;
    margin: 10px 0;
`;

interface HeaderButtonUnderlineProps {
    active?: boolean;
}

const HeaderButtonUnderline = styled.div<HeaderButtonUnderlineProps>`
    position: absolute;
    height: 5px;
    width: ${(props: HeaderButtonUnderlineProps): number => (props.active ? 50 : 0)}px;
    background: ${(props: { theme: Theme }) => props.theme.primary};
    transition: width 0.1s;
`;

const HeaderButtonLabel = styled.label`
    padding: 20px 50px;
    cursor: pointer;

    &:hover ${HeaderButtonUnderline} {
        width: 50px;
    }
`;

interface HeaderButtonProps {
    children?: ReactNode;
    active?: boolean;
}

const HeaderButton = (props: HeaderButtonProps): JSX.Element => {
    return (
        <HeaderButtonLabel>
            <HeaderButtonText>{props.children}</HeaderButtonText>
            <HeaderButtonUnderline active={props.active} />
        </HeaderButtonLabel>
    );
};

const Header = (): JSX.Element => {
    const history = useHistory();

    return (
        <HeaderContainer>
            <LogoContainer>Charlie Liu</LogoContainer>
            <HeaderButtonsContainer>
                <HeaderButton active={history.location.pathname === ABOUT}>About</HeaderButton>
                <HeaderButton active={history.location.pathname === SELECTED_WORKS}>Selected Works</HeaderButton>
                <HeaderButton active={history.location.pathname === CONTACT}>Contact</HeaderButton>
            </HeaderButtonsContainer>
        </HeaderContainer>
    );
};

export default Header;
