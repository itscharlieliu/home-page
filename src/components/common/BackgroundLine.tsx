import styled from "styled-components";

import { WithTheme } from "../../defs/defaultTheme";
import { ReactComponent as BackgroundLineMed } from "../../resources/images/backgroundLineMed.svg";

interface BackgroundLineProps {
    x: number;
    y: number;
    scale: number;
    color?: "primary" | "secondary";
}

const BackgroundLine = styled(BackgroundLineMed)<BackgroundLineProps>`
    position: absolute;
    left: ${(props: BackgroundLineProps) => props.x}%;
    top: ${(props: BackgroundLineProps) => props.y}%;
    transform: scale(${(props: BackgroundLineProps) => props.scale}%);
    fill: ${(props: BackgroundLineProps & WithTheme) =>
        props.color ? props.theme[props.color] : props.theme.secondary};
`;

export default BackgroundLine;
