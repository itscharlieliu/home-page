import React from "react";
import Input from "react-material-textfield";
import styled from "styled-components";

import { Theme } from "../../defs/defaultTheme";
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

const StyledInput = styled(Input)`
    --text: #fff;
    --text-secondary: rgba(255, 255, 255, 0.7);
    --text-disabled: rgba(255, 255, 255, 0.5);
`;

const ContactScreen = (): JSX.Element => {
    return (
        <ScreenContainer>
            <SocialMediaContainer>
                <SocialMediaTitle>Contact Me</SocialMediaTitle>
                <DividerBar />
            </SocialMediaContainer>
            <EmailContainer>
                <StyledInput label={"Your email"} />
                <StyledInput label={"Subject"} />
                <StyledInput type={"textarea"} label={"Body"} />
            </EmailContainer>
        </ScreenContainer>
    );
};

export default ContactScreen;
