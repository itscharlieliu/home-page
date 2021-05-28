import styled from "styled-components";
import { WithTheme } from "../../defs/defaultTheme";

const Card = styled.div`
    padding: 40px;
    box-shadow: ${(props: WithTheme) => props.theme.boxShadow1};
    border-radius: 10px;
    background-color: ${(props: WithTheme) => props.theme.cardBackground};
`;

export default Card;
