import styled from 'styled-components';
import breakpoints from '../../Assets/styles/breakpoints';

export const BoxContainer = styled.div`
    width: 100%;
    height: 100%;

    margin: 2rem 0;

    h1 {
        font-size: 3rem;
        font-weight: bold;
        align-self: flex-start;
        margin-bottom: 2rem;
    }

    main.box-container {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(2, 400px);
        
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        
    }

    @media screen and (max-width: ${breakpoints.tablet}) {

        h1 {
            font-size: 2rem;
        }
        main.box-container {
            grid-template-columns: 1fr;
            grid-template-rows: 250px;
            grid-column-gap: 0;
            grid-row-gap: 1rem;


        }
    }
`;
