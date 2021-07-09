import styled from 'styled-components';

// Utils
import breakpoints from '../../Assets/styles/breakpoints';

// @types
import { StyledSidebarProps, StyledNavigationProps } from '../../@types/Navigation'
import zIndex from '../../Assets/styles/zIndex';

export const NavContainer = styled.nav<StyledNavigationProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: var(--max-size-container);
    padding: 1rem 0;

    z-index: ${zIndex.topAll};

    svg#sidebar-open {
        display: none;
    }

        a#logo-container {
            width: 50%;
            svg {
                width: 14rem;
            }
        }
        main {
            display: flex;
            align-items: center;
            justify-content: flex-end;

            width: 50%;

            ul {
                width: 40%;

                display: flex;
                justify-content: space-between;

                font-size: 1.4rem;
                
                margin-right: ${props => props.showInputSearch ? '1rem' : '0'};
                }

            label#search-input {
                display: ${props => props.showInputSearch ? 'flex' : 'none'};
                width: 52%;
            }

            }

        main > a {
            margin-left: 1rem;
        }

    @media (max-width: ${breakpoints.tablet}) {

        & {
            a#logo-container {
                width:initial;
                order: 2;

                svg {
                    width: 10rem;
                }
            }
            justify-content: space-between;
        
            main {
                    width: initial;
                    order: 1;
                    display: flex;

                    ul {
                        display: none
                    }

                    label#search-input {
                        display: none;
                    }
                }
                
            svg#sidebar-open {
                display: block;
                order: 3;
                cursor: pointer;
            }
        }


    }
      
`;

export const SidebarContainer = styled.div<StyledSidebarProps>`
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--color-gray);

    width: ${props => props.isOpen ? '65vw' : '0'};
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: width .5s ;

    div.wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        height: 90%;

        nav {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            svg {
                width: 2rem;
                height: auto;

                cursor: pointer;
                margin-right: 1rem;
            }
        }

        ul  {
            width: 80%;
            font-size: 1.6rem;
            font-weight: 400;
            margin-bottom: 5rem;

            li {
                margin-top: 1rem;
            }
        }
    }
    
`