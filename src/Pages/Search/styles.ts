import styled from 'styled-components';

// breakpoints
import breakpoints from '../../Assets/styles/breakpoints';
import zIndex from '../../Assets/styles/zIndex';

// @types
import { styledSearchParams } from '../../@types/searchPage'

export const SearchContainer = styled.div<styledSearchParams>`
    width: 100%;

    margin-top: 4rem;
    
    header {
        width: 100%;
        height: 5rem;
        
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-top: 2rem;

        section {
            height: 100%;
            
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: space-between;

        }

        section:first-child {
            align-items: flex-start;

            span {
                color: var(--color-gray-5);
            }

            h1 {
                font-size: 3rem;
                font-weight: bold;
            }
        }

        section:last-child {
            span {
                font-size: 1.5rem;
            }

            div#select-modal {
                display: none;
            }

            /* Select componet styles */
            .select-component__control {
                width: 12rem;
                background: var(--color-gray-5);
                border-color: var(--color-gray-5);
                color: var(--color-white);

                .select-component__value-container > .select-component__single-value {
                    color: var(--color-white);
                }
            }

            .select-component__indicator-separator {
                width: 0;
            }

            .select-component__placeholder {
                color: var(--color-white);
            }

            .select-component__menu {
                background: var(--color-gray-5);

                .select-component__option--is-focused, .css-9gakcf-option {
                    background: var(--color-red);
                }

            }

            svg#sort-icon {
                display: none;
            }
        
        }

        
    }

    @media screen and (max-width: ${breakpoints.tablet}) {
        margin-top: 0;

        & > header {
            height: 100%;
            section:first-child > h1 {
                display: none;
            }

            section:last-child {
                span {
                    display: none;
                }
                svg {
                    cursor: pointer;
                }

                div#select-modal {
                    width: 100vw;
                    height: 100vh;
                    top: 0;
                    right: 0;
                    position: fixed;
                    z-index: ${zIndex.topAll};

                    background: var(--color-gray-5);

                    display: ${props => props.modalIsOpen ? 'flex' : 'none'};
                    align-items: center;
                    justify-content: center;
                }

                main#select-main {
                    width: 90%;
                    height: 30%;
                    
                    border-radius: .5rem;
                    
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    
                    background: var(--color-gray-2);

                    div#select-wrapper {
                        margin-top: 1rem;
                        width: 80%;

                        h1 {
                            font-size: 1.4rem;
                            font-weight: bold;
                            margin-bottom: 2rem;
                        }

                        ol > li {
                            margin-bottom: 1rem;
                            font-size: 1.2rem;

                            input {
                                margin-right: .5rem;
                            }
                        }

                    }
                }
            }

            /* Select component */
            .select-component-container {
                display: none
            }
            /* End Select component */

        }
    }

`;
