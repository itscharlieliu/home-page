import React from "react";
import styled from "styled-components";

import { WithTheme } from "../../defs/defaultTheme";
import { MOBILE_WIDTH } from "../../defs/dimentions";

const CardContainer = styled.div`
    box-shadow: ${(props: WithTheme) => props.theme.boxShadow1};
    border-radius: 10px;
    background-color: ${(props: WithTheme) => props.theme.cardBackground};

    display: flex;
    flex-direction: row;

    overflow: hidden;

    & > img {
        width: 40%;
        object-fit: cover;
    }

    @media only screen and (max-width: ${MOBILE_WIDTH}px) {
        & {
            flex-direction: column;
        }

        & > img {
            width: 100%;
        }
    }
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
`;

interface CardProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
    image?: string;
}

const Card = (props: CardProps): JSX.Element => {
    const { image, ...otherProps } = props;

    return (
        <CardContainer>
            {image ? <img src={image} /> : null}
            <CardContent {...otherProps}></CardContent>
        </CardContainer>
    );
};

export default Card;
