import styled from 'styled-components';
import { device } from '../../lib/breakpoints';

const HomeServicesSection = styled.section`
  background: var(--white);
  padding-top: 70px;
  padding-bottom: 70px;
  @media ${device.laptopM} {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .servicios__container {
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 25px;
    padding-right: 50px;
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
  }
`;

export default HomeServicesSection;
