import React from "react";
import { FaAddressCard, FaPuzzlePiece, FaUserAstronaut } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";

import { EMAIL } from "../defs/contactInfo";
import { COMPACT_WIDTH, MOBILE_WIDTH } from "../defs/dimentions";
import { ABOUT, SELECTED_WORKS } from "../defs/routerPaths";
import useWindowSize from "../utils/useWindowSize";

import Button from "./common/Button";

const HeaderContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: right;
    padding: 50px 0 0;
`;

const LogoContainer = styled.span`
    font-size: 1.5em;
    margin: 0 auto 0 100px;
    white-space: nowrap;

    @media only screen and (max-width: ${MOBILE_WIDTH}px) {
        & {
            margin-left: 10%;
        }
    }
`;

const HeaderButtonsContainer = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: right;
`;

const HeaderButton = styled(Button)`
    margin: 20px 50px;

    @media only screen and (max-width: ${COMPACT_WIDTH}px) {
        & {
            margin: 20px 10px;
        }
    }
`;

const HeaderButtonIcon = styled(FiExternalLink)`
    margin-left: 12px;
`;

const Header = (): JSX.Element => {
    const history = useHistory();
    const location = useLocation();
    const windowSize = useWindowSize();

    return (
        <HeaderContainer>
            <LogoContainer>Charlie Liu</LogoContainer>
            <HeaderButtonsContainer>
                <HeaderButton active={location.pathname === ABOUT} onClick={() => history.push(ABOUT)}>
                    {windowSize.width && windowSize.width > MOBILE_WIDTH ? "About" : <FaUserAstronaut />}
                </HeaderButton>
                <HeaderButton
                    active={location.pathname === SELECTED_WORKS}
                    onClick={() => history.push(SELECTED_WORKS)}
                >
                    {windowSize.width && windowSize.width > MOBILE_WIDTH ? "Selected Works" : <FaPuzzlePiece />}
                </HeaderButton>
                <HeaderButton onClick={() => window.open(EMAIL)}>
                    {windowSize.width && windowSize.width > MOBILE_WIDTH ? "Contact" : <FaAddressCard />}
                    <HeaderButtonIcon />
                </HeaderButton>
            </HeaderButtonsContainer>
        </HeaderContainer>
    );
};

export default Header;
