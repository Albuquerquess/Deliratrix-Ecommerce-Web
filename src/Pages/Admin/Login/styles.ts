import styled from 'styled-components';
import breakpoints from '../../../Assets/styles/breakpoints';
// Types
import { loginContainerProps } from '../../../types/Admin'

export const LoginContainer = styled.div<loginContainerProps>`
    width: 100vw;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;

    main {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        width: 80%;
        height: 100%;
        border-radius: .5rem;

        h1 {
            font-size: 1.4rem;
            margin-top: 2rem;
        }

        form {
            width: 100%;

            label {
                display: flex;
                flex-direction: column;
                width: 100%;
                align-items: flex-start;
                margin-bottom: 1rem;

                strong {
                    font-size: 1.2rem;
                    }

                    input {
                        width: 100%;
                        height: 2rem;
                        background: var(--color-gray-5);
                        margin-top: 1rem;
                        border-radius: .5rem;
                        padding-left: .5rem;

                        font-size: 1.6rem;
                        text-align: center;
                    }

                    i.info {
                        display: ${props => props.infoDisplay ? 'flex' : 'none'};
                        align-self: flex-start;
                        margin-top: .5rem;
                        margin-bottom: .5rem;
                        font-size: 1rem;
                        color: var(--color-red);
                        font-style: italic;
                    }
                }
            button[type=submit] {
                width: 100%;
                height: 2.5rem;
                background: var(--color-red);
                border-radius: .5rem;
                font-size: 1.2rem;
            }

        }
    }

    @media (min-width: ${breakpoints.tablet}) {
     & > {
         main {
            width: 30%;

            h1 {
                font-size: 3rem;
                font-weight: lighter;
                margin-bottom: 2rem;
            }

            form {
                 label {
                    align-items: center;

                    strong {
                        margin: 0;
                        margin-bottom: 1rem;
                        font-size: 1.8rem;
                        align-self: flex-start;
                        font-size: 1.4rem;
                        font-weight: lighter;

                    }

                    input {
                        height: 3rem;
                        margin: 0;
                    }


                }
                div#button {
                    margin-top: 3rem;
                    label, button {
                        height: 3rem;
                        max-height: 3rem;
                    }
                }
        }

         }
     }
    }
`;
