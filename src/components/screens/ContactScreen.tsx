import React from "react";
import styled from "styled-components";

import { Theme } from "../../defs/defaultTheme";
import Input from "../common/Input";
import ScreenContainer from "../common/ScreenContainer";

const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const SocialMediaTitle = styled.span`
    font-size: 3em;
`;

const DividerBar = styled.div`
    width: 100px;
    height: 5px;
    margin: 20px 0;
    background: ${(props: { theme: Theme }) => props.theme.primary};
`;

const EmailContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContactScreen = (): JSX.Element => {
    return (
        <ScreenContainer>
            <SocialMediaContainer>
                <SocialMediaTitle>Contact Me</SocialMediaTitle>
                <DividerBar />
            </SocialMediaContainer>
            <EmailContainer>
                <Input label={"test"} />
            </EmailContainer>
        </ScreenContainer>
    );
};

export default ContactScreen;
