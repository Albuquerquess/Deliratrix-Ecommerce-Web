import styled from 'styled-components';

// @types
import { StyledBoxProps, StyledCardRemoveProps } from '../../@types/Card'

// breakpoints
import breakpoints from '../../Assets/styles/breakpoints';

export const CardContainer = styled.div<StyledBoxProps>`
    background-color: var(--color-gray-2);
    display: flex;
    align-items: center;
    justify-content: center;
    

    width: 100%;
    height: 400px;

    border-radius: 1rem;

    & > a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        main#card-main {
            display: flex;
            align-items:center;
            justify-content: space-between;

            height: 85%;
            width: 90%;

            section.card-thumb-container {
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

            section.card-desc-container {
                width: 50%;
                height: 90%;

                display: flex;
                flex-direction: column;
                justify-content: space-between;

                h2 {
                    font-size: 3rem;
                    font-weight: bold;
                    color: var(--color-white);
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
                    justify-content: ${props => props.onCartPage ? 'flex-end' : 'space-between'} ;
                    align-items: center;
                    
                    margin: 1rem 0;

                    span {
                        font-size: 1.8rem;
                        font-weight: bold;
                    }

                    /* Button */
                    label {
                        display: ${props => props.onCartPage ? 'none' : 'flex'};
                    }
                }

            }
        }
    }

    @media screen and (max-width: ${breakpoints.tablet}) {
        height: 200px;
        & > a > main#card-main {
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

export const CardRemove = styled.footer<StyledCardRemoveProps>`
    display: ${props => props.removeDisplayed ? 'block' : 'none'};

    width: 100%;
    height: 3rem;

    margin-bottom: 1rem;
    
    border: 1px solid var(--color-gray-5);
    border-radius: .5rem;
    
    font-size: 1.5rem;

    cursor: pointer;

    div {
        color: var(--color-gray-5);
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

    }

    @media screen and (max-width: ${breakpoints.tablet}) {
        height: 2rem;
        font-size: 1rem;
    }

`