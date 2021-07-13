import styled from 'styled-components';
import breakpoints from '../../breakpoints';

export const CommonContainer = styled.div`
    
    width: 100%;
    min-height: 100vh;

    
    display: flex;
    
    align-items: center;
    justify-content: flex-start;
    flex-direction:column;
`;

export const CommonWrapper = styled.main`
    width: 90%;
    max-width: var(--max-size-container);
    height: 100%;

    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: ${breakpoints.tablet}) {
        max-width: 90%;
    }
`