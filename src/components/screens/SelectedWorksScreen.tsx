import React, { useState } from "react";
import styled from "styled-components";

import { Theme } from "../../defs/defaultTheme";

const BUTTON_UNDERLINE_WIDTH = 100;
const BUTTON_SELECTED_UNDERLINE_WIDTH = 90;

const ScreenContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
`;

interface SelectedWorkButtonUnderlineProps {
    active?: boolean;
}

const SelectedWorkButtonUnderline = styled.div<SelectedWorkButtonUnderlineProps>`
    position: absolute;
    bottom: 10px;
    height: 5px;
    width: ${(props: SelectedWorkButtonUnderlineProps): number =>
        props.active ? BUTTON_SELECTED_UNDERLINE_WIDTH : 0}px;
    background: ${(props: { theme: Theme }) => props.theme.primary};
    transition: width 0.1s;
`;

const HeaderButtonLabel = styled.label`
    position: relative;
    padding: 20px 50px;
    cursor: pointer;

    &:hover ${SelectedWorkButtonUnderline} {
        width: ${BUTTON_UNDERLINE_WIDTH}px;
    }
`;

const SelectedWorkButtonElement = styled.button`
    background: none;
    color: ${(props: { theme: Theme }) => props.theme.text};

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
    return (
        <ScreenContainer>
            <ButtonsContainer>
                <SelectedWorkButton
                    active={selectedWork === SelectedWork.budger}
                    onClick={() => setSelectedWork(SelectedWork.budger)}
                >
                    Budger
                </SelectedWorkButton>
                <SelectedWorkButton
                    active={selectedWork === SelectedWork.shortestPathFinder}
                    onClick={() => setSelectedWork(SelectedWork.shortestPathFinder)}
                >
                    Shortest Path Finder
                </SelectedWorkButton>
            </ButtonsContainer>
            <DescriptionContainer>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </DescriptionContainer>
        </ScreenContainer>
    );
};

export default SelectedWorksScreen;
