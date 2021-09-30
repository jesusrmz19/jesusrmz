import styled from 'styled-components';
import { device } from '../../lib/breakpoints';

const PostsPageStyles = styled.main`
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
    display: flex;
    flex-direction: column;
  }
  @media ${device.laptop} {
    .container {
      flex-direction: row;
      flex-wrap: wrap;
      padding: 0 2rem;
      justify-content: space-around;
    }
    h1 {
      margin: 0.5 0 1.5rem 0;
      font-size: 35px;
    }
    section {
      width: 80%;
      margin: 0 auto;
      padding: 2rem 0;
    }
  }
`;

export default PostsPageStyles;
