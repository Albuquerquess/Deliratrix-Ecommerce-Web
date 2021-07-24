import styled from 'styled-components';
import breakpoints from '../../Assets/styles/breakpoints';

export const ConfirmationContainer = styled.div`
    width: 100%;
    height: 70vh;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    text-align: center;

   main {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        h1 {
            font-size: 3rem;
            font-weight: bold;
        }

        h2 {
            font-size: 2.5rem;
            font-weight: lighter;
            margin-top: 2rem;
        }

        img {
            margin: 4rem 0;
        }

        span {
            width: 70%;
            font-size: 3rem;
        }    
   }

   @media (max-width: ${breakpoints.tablet}) {
        height: 100%;

       main {
        h1 {
            font-size: 1.5rem;
            width: 70%;
        }
        h2 {
            font-size: 1.2rem;
            width: 80%;
            margin: 0;
            margin-top: 1rem;
        }
        img {
            width: 30%;
            margin: 2rem 0;
        }
        span {
            font-size: 1rem;
            width: 100%;
        }
       }

   }
`;
