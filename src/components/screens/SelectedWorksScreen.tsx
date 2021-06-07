import React from "react";
import { FiExternalLink } from "react-icons/fi";
import styled from "styled-components";

import { MOBILE_WIDTH } from "../../defs/dimentions";
import {
    ADDRESS_SEARCH,
    ADDRESS_SEARCH_CLIENT_SOURCE,
    ADDRESS_SEARCH_SERVER_SOURCE,
    BUDGER_DEMO,
    BUDGER_SOURCE,
    SHORTEST_PATH_SOURCE,
} from "../../defs/externalLinks";
import { BUDGER_ACCOUNTS_SCREENSHOT, SHORTEST_PATH_FINDER_SCREENSHOT } from "../../defs/images";
import PROJECT_DESCRIPTIONS from "../../defs/projectDescriptions";
import openInNewTab from "../../utils/openInNewTab";
import BackgroundLine from "../common/BackgroundLine";
import Button from "../common/Button";
import ScreenContainer from "../common/ScreenContainer";
import SlidingContainer from "../common/SlidingContainer";
import Background from "../common/background";
import Card from "../common/card";
import CardHeader from "../common/cardHeader";

// const SelectedWorksContainer = styled.div`
//     display: flex;
//     flex-direction: column;

//     margin: 10%;
//     width: 80%;

//     & > *:not(:first-child) {
//         margin: 50px 0 0 0;
//     }
// `;

const DescriptionContainer = styled(Card)`
    display: flex;
    flex-direction: column;
`;

const DescriptionText = styled.span`
    font-size: 1.25em;
    line-height: 1.5em;
    margin-bottom: 10px;

    @media only screen and (max-width: ${MOBILE_WIDTH}px) {
        & {
            font-size: 1em;
        }
    }
`;

const ButtonIcon = styled(FiExternalLink)`
    margin-left: 12px;
`;

enum SelectedWork {
    none,
    budger,
    shortestPathFinder,
    addressSearch,
}

interface DescriptionProps {
    selectedWork: SelectedWork;
}

const Description = (props: DescriptionProps): JSX.Element | null => {
    switch (props.selectedWork) {
        case SelectedWork.budger: {
            return (
                <>
                    <DescriptionText>{PROJECT_DESCRIPTIONS.budger}</DescriptionText>
                    <Button onClick={() => openInNewTab(BUDGER_DEMO)}>
                        Demo <ButtonIcon />
                    </Button>
                    <Button onClick={() => openInNewTab(BUDGER_SOURCE)}>
                        Source Code <ButtonIcon />
                    </Button>
                </>
            );
        }
        case SelectedWork.shortestPathFinder: {
            return (
                <>
                    <DescriptionText>{PROJECT_DESCRIPTIONS.shortestPathFinder}</DescriptionText>
                    <Button onClick={() => openInNewTab(SHORTEST_PATH_SOURCE)}>
                        Source Code and Demo <ButtonIcon />
                    </Button>
                </>
            );
        }
        case SelectedWork.addressSearch: {
            return (
                <>
                    <DescriptionText>{PROJECT_DESCRIPTIONS.addressSearch}</DescriptionText>
                    <Button onClick={() => openInNewTab(ADDRESS_SEARCH)}>
                        Demo <ButtonIcon />
                    </Button>
                    <Button onClick={() => openInNewTab(ADDRESS_SEARCH_CLIENT_SOURCE)}>
                        Client Source Code <ButtonIcon />
                    </Button>
                    <Button onClick={() => openInNewTab(ADDRESS_SEARCH_SERVER_SOURCE)}>
                        Server Source Code <ButtonIcon />
                    </Button>
                </>
            );
        }
        default: {
            return null;
        }
    }
};

const SelectedWorksScreen = (): JSX.Element => {
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
            <DescriptionContainer image={BUDGER_ACCOUNTS_SCREENSHOT}>
                <CardHeader title={"Budger"} />
                <Description selectedWork={SelectedWork.budger} />
            </DescriptionContainer>
            <DescriptionContainer>
                <CardHeader title={"Address Search"} />
                <Description selectedWork={SelectedWork.addressSearch} />
            </DescriptionContainer>
            <DescriptionContainer image={SHORTEST_PATH_FINDER_SCREENSHOT}>
                <CardHeader title={"Shortest Path Finder"} />
                <Description selectedWork={SelectedWork.shortestPathFinder} />
            </DescriptionContainer>
        </ScreenContainer>
    );
};

export default SelectedWorksScreen;
