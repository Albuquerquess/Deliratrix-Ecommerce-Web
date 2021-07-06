import styled from 'styled-components';
import breakpoints from '../../Assets/styles/breakpoints';

export const HeaderContainer = styled.header`
    margin: 3rem 0;
  img {
    height: 80vh;
    width: auto;
  }

  @media (max-width: ${breakpoints.tablet}) {
      img {
          width: 100%;
          height: auto;
      }
  }
`;
