import React, { Ref, useState } from "react";
import styled, { ThemeProps } from "styled-components";

import { Theme } from "../../defs/defaultTheme";

// TODO Redo this component. It is buggy

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    helperText?: string;
    label?: string;
    width?: number;
    error?: boolean;
}

interface InputContainerProps {
    error?: boolean;
}

interface TextContainerProps {
    error?: boolean;
}

interface LabelTextProps {
    focused: boolean;
    error?: boolean;
}

const InputContainer = styled.div<InputContainerProps>`
    display: flex;
    flex-direction: column;
    margin: 4px;
    color: ${(props: InputContainerProps & ThemeProps<Theme>): string =>
        props.error ? props.theme.error : props.theme.text};
`;

const TextContainer = styled.input<TextContainerProps>`
    outline: none;
    font-size: 1em;
    border-width: 2px;
    border-style: none none solid none;
    border-color: ${(props: TextContainerProps & ThemeProps<Theme>): string =>
        (props.error ? props.theme.error : props.theme.text) + "80"};
    background-color: #00000000;
    padding: 8px 0;
    z-index: 1;

    color: ${(props: InputContainerProps & ThemeProps<Theme>): string =>
        props.error ? props.theme.error : props.theme.text};

    &:focus {
        border-color: ${(props: TextContainerProps & ThemeProps<Theme>): string =>
            props.error ? props.theme.error : props.theme.text};
    }

    transition: border-bottom-color 0.2s;
`;

const LabelText = styled.span<LabelTextProps>`
    display: inline-block;
    overflow: visible;
    height: 1em;
    font-weight: 600;
    color: ${(props: LabelTextProps & ThemeProps<Theme>): string => {
        if (props.error) {
            return props.theme.error + props.focused ? "" : "80";
        }
        return props.theme.text + props.focused ? "" : "80";
    }};
    transform-origin: left;
    transform: ${(props: LabelTextProps): string => (props.focused ? "scale(.75)" : "translateY(calc(8px + 1em))")};
    z-index: 2;

    transition: transform 0.2s, font-size 0.2s, color 0.2s;
`;

const HelpText = styled.span`
    font-size: 0.75em;
    word-wrap: break-word;
    height: 1em;
    overflow: visible;
`;

const Input = React.forwardRef(function Input(props: InputProps, ref: Ref<HTMLInputElement>): JSX.Element {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const { error, helperText, label, onFocus, onBlur, value, ...otherProps } = props;

    const onInputFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
        onFocus && onFocus(event);
        setIsFocused(true);
    };

    const onInputBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
        onBlur && onBlur(event);
        setIsFocused(false);
    };

    return (
        <InputContainer error={error}>
            <LabelText error={error} focused={!!props.placeholder || !!value || isFocused}>
                {label}
            </LabelText>
            <TextContainer
                ref={ref}
                error={error}
                onFocus={onInputFocus}
                onBlur={onInputBlur}
                value={value}
                {...otherProps}
            />
            <HelpText>{helperText}</HelpText>
        </InputContainer>
    );
});

export default Input;
