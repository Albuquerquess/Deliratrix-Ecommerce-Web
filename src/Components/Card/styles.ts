import styled from 'styled-components';

// @types
import { StyledBoxProps } from '../../@types/Card'
import breakpoints from '../../Assets/styles/breakpoints';

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

            p {
                height: 6rem;
                width: 100%;
                overflow: hidden;

                font-size: 1.2rem;
            }

            footer {
                width: 100%;
                
                display: flex;
                justify-content: space-between;
                align-items: center;
                
                margin: 1rem 0;

                span {
                    font-size: 1.8rem;
                    font-weight: bold;
                }
            }

        }
    }

    @media screen and (max-width: ${breakpoints.tablet}) {
        height: 200px;
        main {
            width: 95%;
            height: 95%;

            section:last-child {
                h2 {
                    font-size: 1.6rem;
                }
                p {
                    font-size: 12px;
                    height: 3.7rem;
                }

                footer {
                    margin: 0;
                    span {
                        font-size: 15px;
                    }
                }
            }
        }
    }

`;
