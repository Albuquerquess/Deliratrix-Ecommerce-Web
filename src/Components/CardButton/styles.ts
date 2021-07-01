import styled from 'styled-components';

export const CardButtonContainer = styled.div`
    background-color: var(--color-gray-2);
    display: flex;
    align-items: center;
    justify-content: center;
    

    width: 100%;
    height: 400px;

    border-radius: 1rem;

    a {

        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        
        width: 100%;
        height: 100%;

        span {
            font-size: 2.8rem;
            margin-bottom: 2rem;
            font-weight: bold;
        }

        svg {
            width: 6rem;
            height: auto;
        }

    }

`;
