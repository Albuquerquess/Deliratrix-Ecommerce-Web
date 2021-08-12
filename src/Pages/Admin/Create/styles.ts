import styled from 'styled-components';
// @types
import { AdminContainerProps } from '../../../types/Admin';
import breakpoints from '../../../Assets/styles/breakpoints';

export const AdminCreateContainer = styled.div<AdminContainerProps>`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    & > main {
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-evenly;

        & > section:first-child {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;

            h1 {
                font-size: 2.5rem;
                font-weight: bold;
                margin-bottom: 2rem;
            }

            form {
                height: 100%;
                width: 100%;
                
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;

                label {
                    width: 70%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    font-size: 1.2rem;
                    font-weight: bold;

                    margin-bottom: 2rem;

                    input {
                        width: 60%;
                        height: 3rem;

                        background: var(--color-gray-5);

                        border-radius: .5rem;

                        padding-left: 1rem;

                        font-size: 1rem;
                    }

                    select {
                        width: 64%;
                        height: 3rem;
                        background: var(--color-gray-5);
                        font-size: 1.2rem;
                        border-radius: .5rem;
                        padding-left: 1rem;
                    }

                }

                label#old-category {
                        display: ${props => props.newCategory ? 'none' : 'flex'};
                    }
                label#new-category {
                        display: ${props => props.newCategory ? 'flex' : 'none'};
                    }


                label#description {
                    flex-direction: column;
                    align-items: flex-start;

                    textarea {
                        width: calc(100% - 2rem);
                        height: 10rem;

                        background: var(--color-gray-5);

                        border-radius: .5rem;

                        margin-top: 1rem;
                        padding: 1rem;

                        font-size: 1rem;
                        resize: none
                    }
                }

                label#file {
                    & > label {
                        height: 2rem;
                        width: calc(60% + 1rem);
                        
                        background: var(--color-gray-5);
                        
                        border-radius: .5rem;
                        
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        input {
                            display: none;
                        }
                    }
                }

                div#button {
                    width: 50%;
                    & > label {
                        width: 100%;
                        height: 4rem;
                    }
                }
            }
        }

        & > section:last-child {
            width: 100%;

            h1 {
                font-size: 3rem;
                font-weight: bold;
                margin-bottom: 2rem;
            }
        }
    }
        
    @media (max-width: ${breakpoints.tablet}) {
        margin-bottom: 2rem;
    & > main#admin-create-main {
        flex-direction: column;

        section:first-child {
            h1 {
                font-size: 1.5rem;
            }

            form {
                width: 95%;
                label {
                    flex-direction: column;
                    align-items: flex-start;
                    width: 100%;

                    input, select {
                        width: 100%;
                        margin-top: 1rem;
                    }
                }
                label#file {
                    & > label {
                        font-size: 1rem;
                        margin-top: 1rem;
                    }
                }

                div#button > label > button > a {
                    font-size: 1.2rem;
                }

            }
        }
                
    }
    }
`;
