import React from "react";
import styled from "styled-components";

import { MOBILE_WIDTH } from "../../defs/dimentions";
import BackgroundLine from "../common/BackgroundLine";
import ScreenContainer from "../common/ScreenContainer";
import SlidingContainer from "../common/SlidingContainer";
import Background from "../common/background";
import Card from "../common/card";
import CardHeader from "../common/cardHeader";

const AboutContainer = styled(Card)`
    display: flex;
    flex-direction: column;

    margin: 10%;
`;

interface AboutDescriptionProps {
    mounted?: boolean;
}

const AboutDescription = styled.div<AboutDescriptionProps>`
    font-size: 1.5em;

    @media only screen and (max-width: ${MOBILE_WIDTH}px) {
        & {
            font-size: 1em;
        }
    }
`;

const DescriptionBlock = styled.div`
    margin: 2em 0;
    line-height: 1.5em;
`;

const AboutScreen = (): JSX.Element => {
    return (
        <ScreenContainer>
            <Background>
                <SlidingContainer startX={1000} startY={-1000} duration={0.85} delay={0}>
                    <BackgroundLine x={10} y={0} scale={50} />
                </SlidingContainer>
                <SlidingContainer startX={1000} startY={-1000} duration={0.85} delay={0.2}>
                    <BackgroundLine x={30} y={0} scale={26} />
                </SlidingContainer>
                <SlidingContainer startX={-1000} startY={1000} duration={0.85} delay={0.2}>
                    <BackgroundLine x={50} y={15} scale={100} />
                </SlidingContainer>
                <SlidingContainer startX={1000} startY={-1000} duration={0.85} delay={0}>
                    <BackgroundLine x={60} y={0} scale={15} color={"primary"} variant={"short"} />
                </SlidingContainer>
                <SlidingContainer startX={1000} startY={-1000} duration={0.85} delay={0}>
                    <BackgroundLine x={15} y={60} scale={50} />
                </SlidingContainer>
                <SlidingContainer startX={-1000} startY={1000} duration={0.85} delay={0}>
                    <BackgroundLine x={80} y={70} scale={75} variant={"long"} />
                </SlidingContainer>
                <SlidingContainer startX={1000} startY={-1000} duration={0.85} delay={0.2}>
                    <BackgroundLine x={30} y={80} scale={15} color={"primary"} variant={"short"} />
                </SlidingContainer>
            </Background>
            <SlidingContainer startX={-screen.width / 2} startY={0} duration={0.85} delay={0}>
                <AboutContainer>
                    <CardHeader title={"About Me"} />
                    <AboutDescription>
                        <DescriptionBlock>
                            I am currently a Full Stack Software Engineer with experience in developing both front-ends
                            using React.js and back-ends using Python or Go
                        </DescriptionBlock>
                        <DescriptionBlock>
                            When I am not working and/or learning new things, I enjoy meeting new people, playing video
                            games, and programming small personal projects on the side. I am passionate about technology
                            and plan continually learning more about cloud computing services such as those provided by
                            Amazon Web Services.
                        </DescriptionBlock>
                    </AboutDescription>
                </AboutContainer>
            </SlidingContainer>
        </ScreenContainer>
    );
};

export default AboutScreen;
