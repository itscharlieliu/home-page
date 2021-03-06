import React from "react";
import styled from "styled-components";

import { WithTheme } from "../../defs/defaultTheme";

const BackgroundContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    z-index: -100;

    background: ${(props: WithTheme) => props.theme.background};
`;

const Background = (props: React.HTMLAttributes<HTMLDivElement>): JSX.Element => {
    return <BackgroundContainer {...props} />;
};

export default Background;
