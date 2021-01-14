import React from "react";
import styled from "styled-components";

import { Theme } from "../../defs/defaultTheme";

const BUTTON_UNDERLINE_WIDTH = 50;
const BUTTON_SELECTED_UNDERLINE_WIDTH = 40;

interface HeaderButtonUnderlineProps {
    active?: boolean;
}

const ButtonUnderline = styled.div<HeaderButtonUnderlineProps>`
    position: absolute;
    height: 5px;
    width: ${(props: HeaderButtonUnderlineProps): number => (props.active ? BUTTON_SELECTED_UNDERLINE_WIDTH : 0)}px;
    background: ${(props: { theme: Theme }) => props.theme.primary};
    transition: width 0.1s;
`;

const ButtonLabel = styled.label`
    position: relative;
    padding: 20px 50px;
    cursor: pointer;
    width: max-content;
    display: inline-block;

    &:hover ${ButtonUnderline} {
        width: ${BUTTON_UNDERLINE_WIDTH}px;
    }
`;

const ButtonElement = styled.button`
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

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
}

const Button = (props: ButtonProps): JSX.Element => {
    const { active, ...otherProps } = props;

    return (
        <ButtonLabel>
            <ButtonElement {...otherProps} />
            <ButtonUnderline active={active} />
        </ButtonLabel>
    );
};

export default Button;
