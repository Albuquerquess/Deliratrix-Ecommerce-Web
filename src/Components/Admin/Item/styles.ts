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
        max-height: 80%;
        overflow: hidden;

        display: flex;
        justify-content: space-between;
        align-items: center;


        & > span:first-child {
            font-size: 1.5rem;
            align-self: flex-start;
        }
        & > span:last-child {
            align-self: center;
            img {
                cursor: pointer;
            }
        }
    }
`;
