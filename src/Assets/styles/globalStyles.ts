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

        font-size: 100%;
        font-family: 'Ubuntu', sans-serif;
    }

    body {
        font-size: 1.6rem;
        line-height: 17px;

        display: flex;
        align-items: center;
        justify-content: center;

        /* overflow-x: hidden; */

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

        input, select, textarea {
            font-weight: bold;
        }

        select option {
            
            background: var(--color-gray-4);
            color: var(--color-white);
        }

        optgroup { 
            font-style: italic;
            color: var(--color-black);
        }

        /* Chrome, Safari, Edge, Opera */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }

        /* Firefox */
        input[type=number] {
        -moz-appearance: textfield;
        }

        /* placeholder */
        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: var(---color-white);
            opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: var(---color-white);
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
        color: var(---color-white);
        }
    
       }
    body > div#root {
        width: 100%;

        div.App {    
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

`

export default GlobalStyles