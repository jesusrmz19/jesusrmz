import styled from 'styled-components';
import { device } from '../../lib/breakpoints';

const SideProjectStyles = styled.main`
  background: var(--bgColor);
  color: var(--FFText);
  padding-top: 1rem;
  h1,
  h2 {
    text-align: center;
    font-family: var(--bold);
  }
  h2 {
    font-size: 18px;
  }
  .container {
    padding: 0 1.5rem 3rem 1.5rem;
  }
  @media ${device.laptop} {
    .container {
      padding: 0 2rem 3rem 2rem;
    }
    h1 {
      margin: 0.5 0 1.5rem 0;
      font-size: 35px;
    }
    section {
      width: 90%;
      margin: 0 auto;
      padding: 2rem 0;
    }
  }
`;

export default SideProjectStyles;
