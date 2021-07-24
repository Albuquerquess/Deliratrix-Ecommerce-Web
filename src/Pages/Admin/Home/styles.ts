import styled from 'styled-components';
// breakpoints
import breakpoints from '../../../Assets/styles/breakpoints';

export const AdminContainer = styled.div`
    width: 100%;
    height: 100%;

    header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;

        h1 {
            font-size: 2.5rem;
            font-weight: bold;
        }

        & > a {
            width: 15rem;
            height: 3rem;
            
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            
            font-size: 1.2rem;
            font-weight: bold;
            
            background: #1B3F3F;
            border-radius: .5rem;

            img {
                width: 1.5rem;
               height: auto; 
            }
        }
    }

    div#items-contianer {
        width: 100%;
        height: 100%;
        
        & > div {
            margin-bottom: 1rem;
        }
    }

    @media (max-width: ${breakpoints.tablet}) {
        header {
            flex-direction: column;

            h1 {
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }
            a {
                width: 100%;
            }
        }
    }
`;
