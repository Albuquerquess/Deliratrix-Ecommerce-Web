import styled from 'styled-components';

export const ItemContainer = styled.div`
    width: 100%;
    height: 4rem;
    background-color: #1B3F3F;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: .5rem;

    div.item-wrapper {
        width: 95%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        & > span:first-child {
            font-size: 1.5rem;
        }
        & > span:last-child {
            img {
                cursor: pointer;
            }
        }
    }
`;
