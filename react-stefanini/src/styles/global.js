import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Robot:400,700,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;
        width: 100%;
        height: 100%;
    }

    input, button, textarea {
        font: 400 18px Roboto, sans-serif;
    }

    button {
        border: 0;
        background: none;
        cursor: pointer;
    }

    form input {
        width: 100%;
        height: 60px;
        color: var(--black);
        border: 1px solid var(--grayless);
        border-radius: 50px;
        text-align: center;
    }

    :root {
        --white: #F6F9FB;
        --black: #32424E;
        --background: #ecf1f8;
        --gray: #707070;
        --grayless: #DDDDDD;
        --green: #06AD32;
    }
`;