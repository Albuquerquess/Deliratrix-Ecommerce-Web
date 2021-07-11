import styled from 'styled-components';

// breakpoints
import breakpoints from '../../Assets/styles/breakpoints';

export const CardContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction:row;
    align-items: flex-start;
    justify-content: space-between;

    margin-top: 3rem;

    & > section {
        width: 48%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        h1 {
            font-size: 3rem;
            font-weight: bold;

            margin-bottom: 2rem;
        }

        main > div {
            margin-bottom: 1rem;
        }   
    }

    section#purchase-summary > main {
        width: 100%;
        height: 400px;
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
                
                display: flex;
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
        flex-direction: column;
        margin-top: 0;
        margin-bottom: 2rem;

        & > section {
            width: 100%;

            h1 {
                font-size: 1.4rem;
            }
        }

        section#purchase-summary > main > div {
            height: 80%;

            ol {
                margin-bottom: 1rem;

                li {
                    font-size: 1.2rem;
                }
            }

            & > span {
                flex-direction: column;

                label {
                    max-width: 100%;
                }
            }

            span#button-container {
                label {
                    max-width: 100%;
                    width: 100%;
                    height: 3rem;

                    a {
                        font-size: 1rem;
                    }
                }

                label:first-child {
                    margin-bottom: 1rem;
                }

            }
        }
    }
`;
