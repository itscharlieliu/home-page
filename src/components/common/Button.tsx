import React from "react";
import styled from "styled-components";

import { WithTheme } from "../../defs/defaultTheme";

const BUTTON_UNDERLINE_WIDTH = 50;
const BUTTON_SELECTED_UNDERLINE_WIDTH = 40;

interface HeaderButtonUnderlineProps {
    active?: boolean;
}

const ButtonUnderline = styled.div<HeaderButtonUnderlineProps>`
    position: absolute;
    height: 5px;
    width: ${(props: HeaderButtonUnderlineProps): number => (props.active ? BUTTON_SELECTED_UNDERLINE_WIDTH : 0)}px;
    max-width: 100%;
    background: ${(props: WithTheme) => props.theme.primary};
    transition: width 0.1s;
`;

const ButtonLabel = styled.label`
    position: relative;
    cursor: pointer;
    width: max-content;
    display: inline-block;

    &:hover ${ButtonUnderline} {
        width: ${BUTTON_UNDERLINE_WIDTH}px;
    }
`;

const ButtonElement = styled.button`
    background: none;
    color: ${(props: WithTheme) => props.theme.text};

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
    const { active, className, ...otherProps } = props;

    return (
        <ButtonLabel className={className}>
            <ButtonElement {...otherProps} />
            <ButtonUnderline active={active} />
        </ButtonLabel>
    );
};

export default Button;
