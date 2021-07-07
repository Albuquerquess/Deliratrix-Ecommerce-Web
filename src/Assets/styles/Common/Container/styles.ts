import styled from 'styled-components';
import breakpoints from '../../breakpoints';

export const CommonContainer = styled.div`
    
    width: 100vw;
    min-height: 100vh;

    
    display: flex;
    
    align-items: center;
    flex-direction:column;
`;

export const CommonWrapper = styled.main`
    width: 100%;
    max-width: var(--max-size-container);
    height: 100%;

    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: ${breakpoints.tablet}) {
        max-width: 90%;
    }
`