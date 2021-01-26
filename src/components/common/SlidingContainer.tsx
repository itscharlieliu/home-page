import styled from "styled-components";

interface ScreenContainerProps {
    start: number;
}

const SlidingContainer = styled.div<ScreenContainerProps>`
    transform: translateX(${(props: ScreenContainerProps) => props.start}vw);
    animation: anim 1s forwards;
    @keyframes anim {
        100% {
            transform: translateX(0);
        }
    }
`;

export default SlidingContainer;
