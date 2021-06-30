import styled from 'styled-components';

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 1rem 0;

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
                
                
                input#nav-input {
                    border: .1rem solid var(--color-white);
                    border-radius: 1rem;
                    padding: .5rem;
                    width: 100%;

                    font-size: 1rem;
                }
            }

            svg {
                
            }
        }
      
`;
