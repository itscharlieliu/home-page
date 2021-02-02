import React from "react";
import styled from "styled-components";

import { WithTheme } from "../../defs/defaultTheme";
import { ReactComponent as BackgroundLineLong } from "../../resources/images/backgroundLineLong.svg";
import { ReactComponent as BackgroundLineMed } from "../../resources/images/backgroundLineMed.svg";
import { ReactComponent as BackgroundLineShort } from "../../resources/images/backgroundLineShort.svg";

interface BackgroundLineProps {
    x: number;
    y: number;
    scale: number;
    color?: "primary" | "secondary";
    variant?: "long" | "short" | "med";
}

const BackgroundLine = styled(
    (props: BackgroundLineProps): JSX.Element => {
        const { variant, ...otherProps } = props;

        switch (variant) {
            case "long": {
                return <BackgroundLineLong {...otherProps} />;
            }
            case "med": {
                return <BackgroundLineMed {...otherProps} />;
            }
            case "short": {
                return <BackgroundLineShort {...otherProps} />;
            }
            default: {
                return <BackgroundLineMed {...otherProps} />;
            }
        }
    },
)<BackgroundLineProps>`
    position: absolute;
    left: ${(props: BackgroundLineProps) => props.x}px;
    top: ${(props: BackgroundLineProps) => props.y}px;
    transform: scale(${(props: BackgroundLineProps) => props.scale}%);
    fill: ${(props: BackgroundLineProps & WithTheme) =>
        props.color ? props.theme[props.color] : props.theme.secondary};
`;

export default BackgroundLine;
