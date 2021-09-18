import styled from 'styled-components';
import { device } from '../../lib/breakpoints';

const RecentBlogs = styled.section`
  padding: 2rem 1rem;
  background: var(--primaryColor);
  h3 {
    text-align: center;
    font-family: var(--bold);
    color: var(--white);
  }
  @media ${device.laptop} {
    padding: 4rem 3rem;
    .blogs {
      display: flex;
      width: 60%;
      margin: 0 auto;
      margin-top: 1rem;
    }
  }
`;

export default RecentBlogs;
