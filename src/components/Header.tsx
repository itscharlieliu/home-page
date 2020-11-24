import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";

import { Theme } from "../defs/defaultTheme";
import { ABOUT, CONTACT, SELECTED_WORKS } from "../defs/routerPaths";

const BUTTON_UNDERLINE_WIDTH = 50;
const BUTTON_SELECTED_UNDERLINE_WIDTH = 40;

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

const HeaderButtonElement = styled.button`
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
    width: ${(props: HeaderButtonUnderlineProps): number => (props.active ? BUTTON_SELECTED_UNDERLINE_WIDTH : 0)}px;
    background: ${(props: { theme: Theme }) => props.theme.primary};
    transition: width 0.1s;
`;

const HeaderButtonLabel = styled.label`
    padding: 20px 50px;
    cursor: pointer;

    &:hover ${HeaderButtonUnderline} {
        width: ${BUTTON_UNDERLINE_WIDTH}px;
    }
`;

interface HeaderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
}

const HeaderButton = (props: HeaderButtonProps): JSX.Element => {
    const { active, ...otherProps } = props;

    return (
        <HeaderButtonLabel>
            <HeaderButtonElement {...otherProps} />
            <HeaderButtonUnderline active={active} />
        </HeaderButtonLabel>
    );
};

const Header = (): JSX.Element => {
    const history = useHistory();
    const location = useLocation();

    console.log(history);

    return (
        <HeaderContainer>
            <LogoContainer>Charlie Liu</LogoContainer>
            <HeaderButtonsContainer>
                <HeaderButton active={location.pathname === ABOUT} onClick={() => history.push(ABOUT)}>
                    About
                </HeaderButton>
                <HeaderButton
                    active={location.pathname === SELECTED_WORKS}
                    onClick={() => history.push(SELECTED_WORKS)}
                >
                    Selected Works
                </HeaderButton>
                <HeaderButton active={location.pathname === CONTACT} onClick={() => history.push(CONTACT)}>
                    Contact
                </HeaderButton>
            </HeaderButtonsContainer>
        </HeaderContainer>
    );
};

export default Header;
