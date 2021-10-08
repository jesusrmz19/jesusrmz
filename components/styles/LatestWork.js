import styled from 'styled-components';
import { device } from '../../lib/breakpoints';

const LatestWork = styled.section`
  background: var(--bgColor);
  width: 100%;
  padding: 2rem 1rem 2rem 1rem;
  color: var(--fontColor);
  h2 {
    font-family: var(--bold);
    text-align: center;
  }
  @media ${device.laptop} {
    padding: 5rem 3rem;
    h2 {
      font-size: 28px;
    }
  }
`;

export default LatestWork;
