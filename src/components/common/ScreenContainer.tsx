import styled from "styled-components";

import { COMPACT_WIDTH } from "../../defs/dimentions";

const ScreenContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 50px;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-left: 50px;
    padding-right: 50px;

    overflow: auto;

    /* Hide scrollbar for Chrome, Safari and Opera */
    //&::-webkit-scrollbar {
    //    display: none;
    //}

    /* Hide scrollbar for IE, Edge and Firefox */
    //-ms-overflow-style: none; /* IE and Edge */
    //scrollbar-width: none; /* Firefox */

    @media only screen and (max-width: ${COMPACT_WIDTH}px) {
        & {
            grid-template-columns: 90%;
            height: unset;
            padding: 50px;
        }
    }
`;

export default ScreenContainer;
