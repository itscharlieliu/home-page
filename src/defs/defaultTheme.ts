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
    background: "#0f192e",
    text: "#e5e5e5",
    error: "#ff0000",
};

// const defaultTheme: Theme = {
//     primary: "#3d405b",
//     secondary: "#81b29a",
//     background: "#f4f1de",
//     text: "#000000",
//     error: "#e07a5f",
// };

export default defaultTheme;
