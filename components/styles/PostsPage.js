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
    }
  }
`;

export default PostsPageStyles;
