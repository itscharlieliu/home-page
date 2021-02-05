import React, { useState } from "react";
import styled from "styled-components";

import { WithTheme } from "../../defs/defaultTheme";
import PROJECT_DESCRIPTIONS from "../../defs/projectDescriptions";
import ScreenContainer from "../common/ScreenContainer";
import SlidingContainer from "../common/SlidingContainer";
import Background from "../common/background";
import BackgroundLine from "../common/BackgroundLine";

const BUTTON_UNDERLINE_WIDTH = 100;
const BUTTON_SELECTED_UNDERLINE_WIDTH = 90;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const DescriptionText = styled.span`
    font-size: 1.5em;
    line-height: 1.5em;
`;

interface SelectedWorkButtonUnderlineProps {
    active?: boolean;
}

const SelectedWorkButtonUnderline = styled.div<SelectedWorkButtonUnderlineProps>`
    position: absolute;
    height: 5px;
    width: ${(props: SelectedWorkButtonUnderlineProps): number =>
        props.active ? BUTTON_SELECTED_UNDERLINE_WIDTH : 0}px;
    background: ${(props: WithTheme) => props.theme.primary};
    transition: width 0.1s;
`;

const HeaderButtonLabel = styled.label`
    position: relative;
    padding: 20px 0;
    cursor: pointer;

    &:hover ${SelectedWorkButtonUnderline} {
        width: ${BUTTON_UNDERLINE_WIDTH}px;
    }
`;

const SelectedWorkButtonElement = styled.button`
    background: none;
    color: ${(props: WithTheme) => props.theme.text};

    outline: none;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: max-content;
    font-size: 3em;

    padding: 0;
    margin: 10px 0;
`;

interface SelectedWorkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
}

const SelectedWorkButton = (props: SelectedWorkButtonProps): JSX.Element => {
    const { active, ...otherProps } = props;

    return (
        <HeaderButtonLabel>
            <SelectedWorkButtonElement {...otherProps} />
            <SelectedWorkButtonUnderline active={active} />
        </HeaderButtonLabel>
    );
};

enum SelectedWork {
    none,
    budger,
    shortestPathFinder,
}

const SelectedWorksScreen = (): JSX.Element => {
    const [selectedWork, setSelectedWork] = useState<SelectedWork>(SelectedWork.none);

    let description = "";

    switch (selectedWork) {
        case SelectedWork.budger: {
            description = PROJECT_DESCRIPTIONS.budger;
            break;
        }
        case SelectedWork.shortestPathFinder: {
            description = PROJECT_DESCRIPTIONS.shortestPathFinder;
            break;
        }
    }

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
            <ButtonsContainer>
                <SlidingContainer startX={-screen.width / 2} startY={0} duration={0.85} delay={0}>
                    <SelectedWorkButton
                        active={selectedWork === SelectedWork.budger}
                        onClick={() => setSelectedWork(SelectedWork.budger)}
                    >
                        Budger
                    </SelectedWorkButton>
                </SlidingContainer>
                <SlidingContainer startX={-screen.width / 2} startY={0} duration={0.85} delay={0.2}>
                    <SelectedWorkButton
                        active={selectedWork === SelectedWork.shortestPathFinder}
                        onClick={() => setSelectedWork(SelectedWork.shortestPathFinder)}
                    >
                        Shortest Path Finder
                    </SelectedWorkButton>
                </SlidingContainer>
            </ButtonsContainer>
            <DescriptionContainer>
                <DescriptionText>{description}</DescriptionText>
            </DescriptionContainer>
        </ScreenContainer>
    );
};

export default SelectedWorksScreen;
