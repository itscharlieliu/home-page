import styled from "styled-components";

interface ScreenContainerProps {
    startX: number;
    startY: number;
    duration: number;
    delay: number;
}

const SlidingContainer = styled.div<ScreenContainerProps>`
    transform: translate(
        ${(props: ScreenContainerProps) => props.startX}px,
        ${(props: ScreenContainerProps) => props.startY}px
    );

    animation: anim ${(props: ScreenContainerProps) => props.duration}s forwards;
    animation-delay: ${(props: ScreenContainerProps) => props.delay}s;

    @keyframes anim {
        100% {
            transform: translate(0, 0);
        }
    }
`;

export default SlidingContainer;
