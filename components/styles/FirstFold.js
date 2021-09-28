import styled from 'styled-components';
import { device } from '../../lib/breakpoints';

const FirstFold = styled.section`
  height: 100vh;
  width: 100%;
  background: var(--firstFold);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--FFText);
  .container {
    margin-top: -30px;
    width: 85%;
    h2 {
      font-family: var(--bold);
      span {
        color: var(--secondaryColor);
      }
    }
    p {
      margin-top: 8px;
      font-family: var(--regular);
      span {
        color: var(--secondaryColor);
      }
    }
    .links {
      display: flex;
      align-items: center;
      margin: 16px 0;
      &--icons {
        font-size: 22px;
        color: var(--FFText);
        transition: color ease 0.2s;
        &:hover {
          color: var(--secondaryColor);
        }
      }
      a + a {
        margin-left: 15px;
      }
    }
  }
  @media ${device.laptop} {
    .container {
      h2 {
        font-size: 35px;
      }
      p {
        font-size: 20px;
      }
    }
  }
`;

export default FirstFold;
