import styled from 'styled-components';

// @types
import { StyledSumaryProps } from '../../@types/Sumary'

// breakpoints
import breakpoints from '../../Assets/styles/breakpoints';

export const SumaryContainer = styled.section<StyledSumaryProps>`
  main {
        width: 100%;
        height:  ${props => props.buttonsDisplayed ? '400px' : '250px'};
        max-height: 100%;
        background: var(--color-gray-2);
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;

        & > div {
            height: 75%;
            width: 90%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-direction: column;

            ol {
                height: 100%;
                width: 100%;

                li {
                    font-size: 1.5rem;
                    
                    display: flex;
                    justify-content: space-between;

                    span:last-child {
                        font-weight: bold;
                    }
                }
                
                hr {
                    margin: 1.5rem 0;
                    border-color: var(--color-gray-5);
                }
            }

            & > span:last-child {
                width: 100%;
                
                display: ${props => props.buttonsDisplayed ? 'flex' : 'none'};
                align-items: center;
                justify-content: space-between;

                label {
                    max-width: 48%;
                    height: 5rem;
                }
            }
        }
    }

    @media (max-width: ${breakpoints.tablet}) {
        h1 {
            font-size: 1.4rem;
        }
        main {
            height: 12rem;
        
            div > ol > li > span {
                font-size: 1rem;
            }
        }

    }
`;
