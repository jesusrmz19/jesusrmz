import styled from 'styled-components';
import { device } from '../../lib/breakpoints';

const FirstFold = styled.section`
  width: 100%;
  height: 85vh;
  background: var(--firstFold);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--FFText);
  .container {
    margin-top: -30px;
    width: 85%;
    h1 {
      text-align: center;
      font-family: var(--bold);
      font-size: 45px;
      span {
        color: var(--secondaryColor);
      }
    }
    p {
      text-align: center;
      margin: 1rem 0;
      font-family: var(--regular);
      font-size: 18px;
      span {
        color: var(--secondaryColor);
      }
    }
    .links {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 2rem 0;
      &--icons {
        font-size: 22px;
        color: var(--FFText);
        transition: color ease 0.2s;
        &:hover {
          color: var(--secondaryColor);
        }
      }
      a + a {
        margin-left: 25px;
      }
    }
    &--btn {
      text-align: center;
      a {
        display: inline-block;
        background: var(--btnBg);
        padding: 0.8rem 1rem;
        text-decoration: none;
        color: var(--btnTxt);
        font-family: var(--regular);
        transition: background 0.2s ease;
        &:hover {
          background: var(--secondaryColor);
        }
      }
    }
  }
  @media ${device.laptop} {
    .container {
      width: 40%;
      h1 {
        font-size: 65px;
      }
      p {
        font-size: 25px;
        margin: 1.5rem 0;
      }
      .links {
        margin: 2.5rem 0;
        &--icons {
          font-size: 35px;
        }
        a + a {
          margin-left: 50px;
        }
      }
    }
  }
`;

export default FirstFold;
