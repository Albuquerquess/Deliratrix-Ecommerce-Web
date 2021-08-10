import styled from 'styled-components';

// @types
import { StyledIdentifyProps } from '../../@types/Identify';

// breakpoints
import breakpoints from '../../Assets/styles/breakpoints';

export const IdentifyContaier = styled.div<StyledIdentifyProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    main {
        width: 35%;
        span#info {
            display: ${props => props.infoDisplayed ? 'flex' : 'none'};
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: var(--color-black);
            font-size: 1.4rem;
            width: 100%;
            height: 3rem;
            background: var( --color-red);
            margin-bottom: 2rem;
            border-radius: 1rem;
        }

        h1 {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 2rem;
        }

        h2#subtitle {
            color: var(--color-gray-5);
            margin-bottom: 2rem;
            font-size: 1rem;
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            width: 100%;

            label {
                width: 100%;

                display: flex;
                flex-direction: column;
                align-items: flex-start;

                font-size: 1.5rem;
                margin-bottom:1rem;
                font-weight: bold;

                input {
                    height: 3rem;
                    width: 100%;

                    margin: 1rem 0;
                    padding-left: 1rem;
                    
                    background: var(--color-gray-2);
                    border-radius: 1rem;
                    
                    font-size: 1.2rem;
                }
            }

            /* Button */
            label:last-child {
                max-width: 50%;
                height: 4rem;
            }
        }
    }

    @media (max-width: ${breakpoints.tablet}) {
        main {
            width: 100%;
            
            h1 {
                font-size: 1.4rem;
            }
            h2 {
                font-size: 1rem;
            }

            form {
                width: 95%;
                align-items: center;

                label {   
                    font-size: 1.2rem;
                input {
                    height: 2.5rem;
                    font-size: 1rem;
                    }
                }

                label:last-child {
                    max-width: 100%;
                    height: 4rem;
                    
                    a {
                        font-size: 1.2rem;
                    }
                }
            }
        }
    }
`;
