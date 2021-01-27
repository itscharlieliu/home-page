import React from "react";
import styled from "styled-components";

import { Theme } from "../../defs/defaultTheme";
import ScreenContainer from "../common/ScreenContainer";
import SlidingContainer from "../common/SlidingContainer";

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

interface AboutDescriptionProps {
    mounted?: boolean;
}

const AboutDescription = styled.div<AboutDescriptionProps>`
    font-size: 1.5em;
`;

const DescriptionBlock = styled(SlidingContainer)`
    margin: 2em 0;
    line-height: 1.5em;
`;

const AboutScreen = (): JSX.Element => {
    return (
        <ScreenContainer>
            <AboutContainer>
                <SlidingContainer start={-50} duration={0.85} delay={0}>
                    <AboutTitle>Charlie Liu</AboutTitle>
                    <DividerBar />
                </SlidingContainer>
                <AboutDescription>
                    <DescriptionBlock start={-50} duration={0.85} delay={0.2}>
                        I am a recent graduate of Chapman University where I received my Bachelors of Science in
                        Computer Science. I currently work as a Software Engineer developing both front end and back end
                        software.
                    </DescriptionBlock>
                    <DescriptionBlock start={-50} duration={0.85} delay={0.4}>
                        When I am not working and/or learning new things, I enjoy meeting new people, playing video
                        games, and programming small personal projects on the side. I am passionate about technology and
                        plan continually learning more about cloud computing services such as those provided by Amazon
                        Web Services.
                    </DescriptionBlock>
                </AboutDescription>
            </AboutContainer>
        </ScreenContainer>
    );
};

export default AboutScreen;
