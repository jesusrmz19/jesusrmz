import styled from 'styled-components';
import { device } from '../../lib/breakpoints';

const RecentBlogs = styled.section`
  padding: 2rem 1rem;
  background: var(--bgColor);
  h3 {
    text-align: center;
    font-family: var(--bold);
    color: var(--fontColor);
  }
  @media ${device.laptop} {
    padding: 4rem 3rem;
    .blogs {
      display: flex;
      width: 60%;
      margin: 0 auto;
      margin-top: 1rem;
    }
    h3 {
      font-size: 28px;
    }
  }
`;

export default RecentBlogs;
