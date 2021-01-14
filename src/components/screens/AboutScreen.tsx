import React from "react";
import styled from "styled-components";

import { ABOUT_DESCRIPTION } from "../../defs/about";
import { Theme } from "../../defs/defaultTheme";
import ScreenContainer from "../common/ScreenContainer";

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const AboutTitle = styled.span`
    font-size: 3em;
`;

const DividerBar = styled.div`
    width: 100px;
    height: 5px;
    margin: 20px 0;
    background: ${(props: { theme: Theme }) => props.theme.primary};
`;

const AboutDescription = styled.span`
    font-size: 1.5em;
`;

const AboutScreen = (): JSX.Element => {
    return (
        <ScreenContainer>
            <AboutContainer>
                <AboutTitle>Charlie Liu</AboutTitle>
                <DividerBar />
                <AboutDescription>{ABOUT_DESCRIPTION}</AboutDescription>
            </AboutContainer>
        </ScreenContainer>
    );
};

export default AboutScreen;
