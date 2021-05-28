import styled from "styled-components";

import { COMPACT_WIDTH } from "../../defs/dimentions";

const ScreenContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    width: 80%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 50px 0;

    @media only screen and (max-width: ${COMPACT_WIDTH}px) {
        & {
            grid-template-columns: 100%;
            height: unset;
        }
    }
`;

export default ScreenContainer;
