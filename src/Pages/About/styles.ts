import styled from 'styled-components';

// breakpoints
import breakpoints from '../../Assets/styles/breakpoints';

export const AboutContainer = styled.div`
    div#about-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            font-size: 3rem;
            font-weight: bold;
            align-self: flex-start;
            margin-bottom: 4rem;
        }

        section {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;

            img {
                width: 25%;
            }
            p {
                width: 70%;
                font-size: 1.4rem;
                line-height: 1.5rem;
            }

        }
    }

    @media (max-width: ${breakpoints.tablet}) {
        div#about-wrapper {
            h1 {
                margin-top: 2rem;
                margin-bottom: 1.5rem;
                font-size: 1.4rem;
            }

            section {
                flex-direction: column;
                align-items: center;

                img {
                    width: 100%;
                    
                    margin-bottom: 2rem;
                }

                p {
                    width: 100%;
                    
                    font-size: 1rem;
                    line-height: 1.4rem;
                    
                    margin-bottom: 2rem;
                }

            }


        }
    }
`;
