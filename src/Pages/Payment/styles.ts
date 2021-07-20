import styled from 'styled-components';

// breakpoints
import breakpoints from '../../Assets/styles/breakpoints';

export const PaymentContainer = styled.div`
  margin-bottom: 2rem;
  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1rem;
    color: var(--color-gray-5);
    margin-bottom: 2rem;
  }

  main {
    width: 100%;

    div#payment-container {
        width: 100%;

        section:first-child {
            width: 30%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 3rem;

            img {
                width: 48%;
            }
        }
        section#pix-raw {
            width: 100%;
            margin-bottom: 2rem;

            h1 {
                font-size: 2rem;
                margin-bottom: 2rem;
            }
            
            div#copy {
              display: flex;
              align-items: center;
              margin-top: 1rem;

              font-size: 1.5rem;
              font-weight: bold;

              svg {
                cursor: pointer;
                margin-left: 1rem;
              }

            }
        }
    }

  }

  div#purchase-summary {
    width: 50%;
    margin-top: 2rem;
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    width: 100%;

    h1 {
      font-size: 1.4rem;
    }

    h2 {
      font-size: 1rem;
    }

    main div#payment-container {

      section:first-child {
        width: 100%;
        height: auto;
      }

      section:last-child {
        h1 {
          font-size: 1.4rem;
        }
        div {
          flex-direction: column-reverse;
          align-items: flex-start;
          
          p {
            max-width: 100%;
            overflow-wrap: break-word;
            font-size: .8rem;
            margin-bottom: 1rem;
          }

          div#copy {
            display: flex;
            align-items: center;
            flex-direction: row;
            
            margin-bottom: 1rem;

          }
          
        }
      }

    }
    div#purchase-summary {
      margin-bottom: 2rem;
      width: 100%;
    }
  }
`;
