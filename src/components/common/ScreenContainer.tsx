import styled from "styled-components";

interface ScreenContainerProps {
    start: number;
}

const ScreenContainer = styled.div<ScreenContainerProps>`
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    width: 80%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;

    transform: translateX(${(props: ScreenContainerProps) => props.start}vw);
    animation: anim 1s forwards;
    @keyframes anim {
        100% {
            transform: translateX(0);
        }
    }
`;

export default ScreenContainer;
