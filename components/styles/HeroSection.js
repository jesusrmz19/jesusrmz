import styled from 'styled-components';
import { device } from '../../lib/breakpoints';

const HeroSection = styled.section`
  background: var(--ffbg);
  .hero__container {
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 25px;
    padding-right: 25px;
    @media ${device.tablet} {
      padding-left: 50px;
      padding-right: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media ${device.laptopM} {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
  .hero__text {
    padding: 120px 0;
    p {
      font-size: 14px;
      color: var(--greytxt);
      font-family: var(--bold);
      text-transform: uppercase;
      letter-spacing: 14px;
    }
    h1 {
      display: flex;
      flex-direction: column;
      font-size: 30px;
      color: var(--blacktxt);
      font-family: var(--bold);
      margin-bottom: 30px;

      @media ${device.laptop} {
        font-size: 48px;
      }
    }
    &_links {
      @media ${device.tablet} {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    &_git {
      font-size: 25px;
      text-decoration: none;
      color: var(--blacktxt);
      &:hover {
        color: var(--greytxt);
      }
    }
    &_pages {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      @media ${device.tablet} {
        flex-direction: row;
        margin-top: 0px;
      }
      a {
        text-decoration: none;
        text-transform: uppercase;
        color: var(--blacktxt);
        font-size: 14px;
        letter-spacing: 7px;
        font-family: var(--bold);
        position: relative;
        &::after {
          content: '';
          display: block;
          position: absolute;
          top: 130%;
          left: 0;
          width: 30px;
          height: 2px;
          background: var(--greytxt);
          transition: all ease 0.2s;
          @media ${device.tablet} {
            left: calc(50% - 15px);
          }
        }
        &:hover::after {
          width: 100%;
          left: 0;
          background: var(--blacktxt);
        }
      }

      a + a {
        margin-top: 20px;
        @media ${device.tablet} {
          margin-top: 0px;
          margin-left: 50px;
        }
      }
    }
  }
`;

export default HeroSection;
