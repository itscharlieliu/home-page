export interface Theme {
    [key: string]: string;
}

export interface WithTheme {
    theme: Theme;
}

const defaultTheme: Theme = {
    primary: "#fca311",
    secondary: "#14213d",
    background: "#0f192e",
    cardBackground: "#1F1F1F",
    text: "#e5e5e5",
    error: "#ff0000",
    boxShadow1: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);",
};

// const defaultTheme: Theme = {
//     primary: "#3d405b",
//     secondary: "#81b29a",
//     background: "#f4f1de",
//     text: "#000000",
//     error: "#e07a5f",
// };

export default defaultTheme;
