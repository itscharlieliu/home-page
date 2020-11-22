import React, { ReactNode } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { Theme } from "../defs/defaultTheme";

interface HeaderButtonProps {
    children?: ReactNode;
    active?: boolean;
}

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

const HeaderButtonUnderline = styled.div`
    position: absolute;
    height: 5px;
    width: 0;
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

const HeaderButton = (props: HeaderButtonProps): JSX.Element => {
    return (
        <HeaderButtonLabel>
            <HeaderButtonText>{props.children}</HeaderButtonText>
            <HeaderButtonUnderline />
        </HeaderButtonLabel>
    );
};

const Header = (): JSX.Element => {
    const history = useHistory();

    console.log(history);

    return (
        <HeaderContainer>
            <LogoContainer>Charlie Liu</LogoContainer>
            <HeaderButtonsContainer>
                <HeaderButton>About</HeaderButton>
                <HeaderButton active>Selected Works</HeaderButton>
                <HeaderButton>Contact</HeaderButton>
            </HeaderButtonsContainer>
        </HeaderContainer>
    );
};

export default Header;
