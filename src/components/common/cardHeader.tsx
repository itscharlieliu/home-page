import React from "react";
import styled from "styled-components";

import { WithTheme } from "../../defs/defaultTheme";

interface CardHeaderProps {
    title: string;
}

const TitleText = styled.span`
    font-size: 3em;
`;

const DividerBar = styled.div`
    width: 100px;
    height: 5px;
    margin: 20px 0;
    background: ${(props: WithTheme) => props.theme.primary};
`;

const CardHeader = (props: CardHeaderProps): JSX.Element => (
    <div>
        <TitleText>{props.title}</TitleText>
        <DividerBar />
    </div>
);

export default CardHeader;
