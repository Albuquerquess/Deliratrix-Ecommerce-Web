import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100vw;
  height: 20rem;
  background-color: var(--color-gray);

  display: flex;
  align-items: center;
  justify-content: center;

  div#wrapper {
    width: var(--max-size-container);

    height: 75%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    section:first-child {
      width: 15%;
      
      
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      p {
        letter-spacing: .1rem;
        margin: .5rem 0;
      }

      div {
        width: 50%;

        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    section:last-child {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 18%;
      margin-right: 10rem;
    }

    div {
      h2 {
        font-size: 1.6rem;
        font-weight: bold;
        margin-bottom: 2rem;
        }

      ul > li {
        font-size: 1.2rem;
        margin-bottom: 1.6rem;
        }
      }
  }
`;
