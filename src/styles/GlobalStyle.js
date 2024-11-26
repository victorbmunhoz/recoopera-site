import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Inter Tight';
        src: url('/src/assets/fonts/InterTight-Regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Inter Tight';
        src: url('/src/assets/fonts/InterTight-SemiBold.ttf') format('truetype');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'Inter Tight';
        src: url('/src/assets/fonts/InterTight-Bold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'Inter Tight';
        src: url('/src/assets/fonts/InterTight-Italic.ttf') format('truetype');
        font-weight: 400;
        font-style: italic;
    }

    :root {
        --primary-green: #87A82C;
        --dark-green: #025229;
        --light-green: #CFF754;
        --background: #F5F6F1;
        --dark-background: #13352B;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Inter Tight', sans-serif;
        background-color: var(--background);
        color: var(--dark-green);
        line-height: 1.6;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        margin: 0;
        padding: 0;
    }

    #root {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style: none;
    }

    button {
        font-family: 'Inter Tight', sans-serif;
        border: none;
        cursor: pointer;
        background: none;
    }
`;
