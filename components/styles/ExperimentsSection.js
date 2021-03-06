import styled from 'styled-components';
import { device } from '../../lib/breakpoints';

const ExperimentsSection = styled.section`
  background: var(--bgColor);
  width: 100%;
  padding-top: 2rem;
  h3 {
    font-family: var(--bold);
    text-align: center;
    margin-bottom: 1rem;
    color: var(--fontColor);
  }
  @media ${device.laptop} {
    padding: 2rem 0;
    h3 {
      margin-bottom: 2rem;
      font-size: 28px;
    }
    .experiments {
      display: flex;
    }
  }
`;

export default ExperimentsSection;
