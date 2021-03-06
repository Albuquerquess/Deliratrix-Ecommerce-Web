import styled from 'styled-components';
// @types
import { StyledButtonProps } from '../../types/Button';
// breakpoints
import breakpoints from '../../Assets/styles/breakpoints';

export const StyledLabel = styled.label<StyledButtonProps>`
    width: 100%;
    max-width: 12rem;
    height: 3rem;

    background: ${props => props.disabled ? 'var(--color-gray-5)' : (props.outline ? 'none' : 'var(--color-green)')};

    
    border-radius: .5rem;
    border: ${props => props.outline ? '0.2rem solid var(--color-gray-5)' : 'none'};
    
    font-weight: bold;
    font-size: 1.6rem;
    
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
    
    button {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        a {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            height: 3rem;

            border-radius: .5rem;

            color: ${props => props.outline ? 'var(--color-gray-5)' : 'var(--color-black)'};
            font-weight: ${props => props.outline ? 'lighter' : 'bold'};
            font-size: 1.6rem;
            
            cursor: pointer;

            }

        }
    @media screen and (max-width: ${breakpoints.tablet}) {
        width: 4rem;
        height: 1.8rem;


        button > a {
            font-size: .8rem;
        }
    }
    
`;