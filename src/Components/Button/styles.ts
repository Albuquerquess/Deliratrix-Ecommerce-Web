import styled from 'styled-components';
import breakpoints from '../../Assets/styles/breakpoints';

export const StyledLabel = styled.label`
    width: 100%;
    max-width: 12rem;
    height: 3rem;
    background: var(--color-green);
    border-radius: .5rem;
    color: var(--color-black);
    font-weight: bold;
    font-size: 1.6rem;

    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
    
    a {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        height: 3rem;

        background: var(--color-green);
        border-radius: .5rem;

        color: var(--color-black);
        font-weight: bold;
        font-size: 1.6rem;
        cursor: pointer;

    }

    @media screen and (max-width: ${breakpoints.tablet}) {
        width: 4rem;
        height: 1.8rem;


        a {
            font-size: .8rem;
        }
    }
    
`;