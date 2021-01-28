import React from "react";
import styled from "styled-components";

const BackgroundContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    z-index: -1;

    background: grey;
`;

const Background = (): JSX.Element => {
    return <BackgroundContainer>test</BackgroundContainer>;
};

export default Background;
