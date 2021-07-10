import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    html {
        --color-black: #000000;
        --color-gray: #191919;
        --color-gray-2: #202020;
        --color-gray-3: #303030;
        --color-gray-4: #404040;
        --color-gray-5: #707070;
        --color-red: #FF4848;
        --color-green: #00D84F;
        --color-white: #FFFFFF;

        --max-size-container: 1600px;
        

        background-color: var(--color-black);
        color: var(--color-white);

        font-size: 62.5%;
        font-family: 'Ubuntu', sans-serif;
    }

    body {
        font-size: 1.6rem;
        line-height: 17px;

        display: flex;
        align-items: center;
        justify-content: center;

        overflow-x: hidden;

        /* input radio clicked class */
        .input-radio-clicked {
            background: var(--color-red) !important;
        }

        .text-gray {
            color: var( --color-gray-3)
        }

        p {
            letter-spacing: .1rem;
        }
       
       }
    body > div#root > div.App {    
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

`

export default GlobalStyles