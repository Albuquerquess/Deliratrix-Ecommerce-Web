import styled from 'styled-components';

// @types
import { StyleSearchProps } from '../../@types/Search';
import breakpoints from '../../Assets/styles/breakpoints';


export const SearchContainer = styled.label<StyleSearchProps>`
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    
    input#nav-input {
        border: .1rem solid var(--color-white);
        border-radius: 1rem;
        
        width: 100%;
        
        padding: .5rem;
        padding-right: 3rem;
        padding-left: 1rem;

        font-size: 1rem;

        ::placeholder {
            color: var(--color-white);
        }
    }

    svg {
        position: absolute;
        right: 1rem;
        }

    @media screen and (min-width: ${breakpoints.tablet}) {
        display: ${props => props.onlyMobile ? 'none' : 'flex'};
    }
`;
