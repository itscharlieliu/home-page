import styled from "styled-components";

const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    width: 100%;
    height: 100%;

    overflow: auto;

    /* Hide scrollbar for Chrome, Safari and Opera */
    //&::-webkit-scrollbar {
    //    display: none;
    //}

    /* Hide scrollbar for IE, Edge and Firefox */
    //-ms-overflow-style: none; /* IE and Edge */
    //scrollbar-width: none; /* Firefox */
`;

export default ScreenContainer;
