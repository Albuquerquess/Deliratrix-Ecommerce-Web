import styled from 'styled-components';

// @types
import { StyledBoxProps } from '../../@types/Card'

export const CardContainer = styled.div<StyledBoxProps>`
    background-color: var(--color-gray-2);
    display: flex;
    align-items: center;
    justify-content: center;
    

    width: 100%;
    height: 400px;

    border-radius: 1rem;

    main {
        display: flex;
        align-items:center;
        justify-content: space-between;

        height: 85%;
        width: 90%;

        section:first-child {
            width: 45%;
            height: 90%;
            background-color: var(--color-gray-4);

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 1rem;

            div.thumb {
                border-radius: 1rem;

                width: 100%;
                height: 100%;
                
                background: url(${props => props.thumb});
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;
            }
        }

        section:last-child {
            width: 50%;
            height: 90%;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            h2 {
                font-size: 3rem;
                font-weight: bold
            }

            div.className {
                margin: 1rem 0;
            }

            p {
                height: 6rem;
                width: 100%;
                overflow: hidden;

                font-size: 1.2rem;
            }

            footer {
                margin: 1rem 0;
                display: flex;
                width: 100%;
                justify-content: space-between;
                align-items: center;

                span {
                    font-size: 1.8rem;
                    font-weight: bold;
                }
            }

        }
    }

`;
