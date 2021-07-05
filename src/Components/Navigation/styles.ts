import styled from 'styled-components';

// Utils
import breakpoints from '../../Assets/styles/breakpoints';

// @types
import { StyledSidebarProps } from '../../@types/Navigation'

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: var(--max-size-container);
    padding: 1rem 0;

    svg#sidebar-open {
        display: none;
    }

        div#logo-container {
            width: 50%;
        }
        main {
            display: flex;
            align-items: center;
            justify-content: space-between;

            width: 50%;

            ul {
                display: flex;
                justify-content: space-between;
                width: 40%;

                font-size: 1.4rem;
            }
           
            label { 
                width: 52%;
                display: flex;
                align-items: center;
                position: relative;
                
                
                input#nav-input {
                    border: .1rem solid var(--color-white);
                    border-radius: 1rem;
                    
                    width: 100%;
                    
                    padding: .5rem;
                    padding-right: 3rem;

                    font-size: 1rem;
                }
                svg {
                    position: absolute;
                    right: 1rem;
                    }
                }
            }

    @media (max-width: ${breakpoints.tablet}) {

        & {
            div#logo-container {
                width:initial;
                order: 2;
            }
            justify-content: space-between;
        
            main {
                    width: initial;
                    order: 1;
                    display: flex;

                    ul {
                        display: none
                    }
                    label {
                        display: none
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

        width: 90%;
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
            }
        }

        ul  {
            width: 80%;
            font-size: 1.6rem;
            font-weight: bold;

            li {
                margin-top: 1rem;
            }
        }
    }
    
`