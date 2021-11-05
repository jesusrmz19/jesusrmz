import styled from 'styled-components';
import { device } from '../../lib/breakpoints';

const HomeProjectSection = styled.section`
  background: white;
  padding-top: 70px;
  padding-bottom: 70px;
  @media ${device.laptopM} {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .projects__container {
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 25px;
    padding-right: 25px;
    @media ${device.tablet} {
      padding-left: 50px;
      padding-right: 50px;
    }
    @media ${device.laptopM} {
      padding-left: 0px;
      padding-right: 0px;
    }
    h2 {
      font-size: 14px;
      font-family: var(--bold);
      color: var(--greytxt);
      letter-spacing: 14px;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 50px;
      @media ${device.laptopM} {
        margin-bottom: 60px;
      }
    }
    .projects {
      a {
        display: block;
        text-decoration: none;
        transition: all ease 0.2s;
        &:hover {
          transform: scale(0.98);
        }
      }
      a + a {
        margin-top: 40px;
      }
      @media ${device.tablet} {
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        grid-row-gap: 60px;
        align-items: center;
        justify-items: center;
        a + a {
          margin-top: 0px;
        }
      }
      @media ${device.laptop} {
        grid-gap: 60px;
      }
    }
  }
`;

export default HomeProjectSection;
