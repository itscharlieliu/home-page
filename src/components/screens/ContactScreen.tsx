import { TextField } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

import { Theme } from "../../defs/defaultTheme";
import Button from "../common/Button";
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

const StyledButton = styled(Button)`
    padding-left: -32px;
`;

const ContactScreen = (): JSX.Element => {
    return (
        <ScreenContainer>
            <SocialMediaContainer>
                <SocialMediaTitle>Contact Me</SocialMediaTitle>
                <DividerBar />
            </SocialMediaContainer>
            <EmailContainer>
                <TextField label={"Your email"} />
                <TextField label={"Subject"} />
                <TextField multiline rows={10} rowsMax={10} label={"Body"} />
                <StyledButton>Send</StyledButton>
            </EmailContainer>
        </ScreenContainer>
    );
};

export default ContactScreen;
