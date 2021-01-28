export interface Theme {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    error: string;
}

export interface WithTheme {
    theme: Theme;
}

const defaultTheme: Theme = {
    primary: "#fca311",
    secondary: "#14213d",
    background: "#000000",
    text: "#e5e5e5",
    error: "#ff0000",
};

export default defaultTheme;
