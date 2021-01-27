import styled from "styled-components";

interface ScreenContainerProps {
    start: number;
    duration: number;
    delay: number;
}

const SlidingContainer = styled.div<ScreenContainerProps>`
    transform: translateX(${(props: ScreenContainerProps) => props.start}vw);

    animation: anim ${(props: ScreenContainerProps) => props.duration}s forwards;
    animation-delay: ${(props: ScreenContainerProps) => props.delay}s;

    @keyframes anim {
        100% {
            transform: translateX(0);
        }
    }
`;

export default SlidingContainer;
