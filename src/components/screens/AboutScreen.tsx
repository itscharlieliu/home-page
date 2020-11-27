import React from "react";
import styled from "styled-components";

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
                <AboutDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </AboutDescription>
            </AboutContainer>
        </ScreenContainer>
    );
};

export default AboutScreen;
