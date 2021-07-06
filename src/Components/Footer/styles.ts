import styled from 'styled-components';
import breakpoints from '../../Assets/styles/breakpoints';

export const FooterContainer = styled.footer`
  width: 100vw;
  height: 20rem;
  background-color: var(--color-gray);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div#wrapper {
    width: var(--max-size-container);

    height: 75%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    section:first-child {
      width: 18%;
      
      
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


  @media screen and (max-width: ${breakpoints.tablet}) {
    height: 100%;
    

    div#wrapper {
      height: 100%;
      width: 100vw;

      display: flex;
      flex-direction: column;
      align-items:center;
      justify-content: center;

      padding: 2rem 0;

    section:first-child {
      align-items: center;
      flex-direction: column;
      
      width: 60%;
      text-align: center;
      
      margin-bottom: 2rem;

      svg {
        width: 14rem;
      }

      p {
        line-height: 1.4rem;
      }

      div {
        margin-top: 1rem;

        width: 50%;
      }
    }
    
    section:last-child {
      flex-direction: column;
      margin: 0;

      width: 100%;

      div {
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
      }
    }

    div > ul > li {
       font-size: 1.5rem;
    }
  }
  
}
`;

export const FooterCopy = styled.div`
  width: 100%;
  height: 3rem;

  background-color: var(--color-gray-2);

  display: flex;
  align-items: center;
  justify-content: center;
  

  div#copy-wrapper {
    width: var(--max-size-container);
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    height: 100%;
    padding: 2rem 0;
    
    div#copy-wrapper {
      flex-direction: column;
      width: 100%;

      section:first-child {
        width: 80%;
      }

      span, section > a:first-child {
        margin-bottom: 1.4rem;
      }

      section {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      
    }

  }
`