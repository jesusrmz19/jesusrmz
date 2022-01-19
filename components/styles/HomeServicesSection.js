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
    h3 {
      font-size: 25px;
      font-family: var(--bold);
      color: var(--blacktxt);
      margin: 15px 0px 15px 0px;
      @media ${device.laptop} {
        margin: 0px 0px 15px 0px;
      }
      @media ${device.laptopS} {
        font-size: 30px;
        margin: 0px 0px 15px 0px;
      }
    }
    p {
      font-size: 14px;
      font-family: var(--light);
      color: var(--blacktxt);
      margin: 15px 0px 15px 0px;
      @media ${device.mobileM} {
        font-size: 16px;
      }
      @media ${device.laptop} {
        width: 80%;
      }
      @media ${device.laptopS} {
        font-size: 18px;
      }
    }
  }
  .servicios__content {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 20px;
    &_text {
      grid-row: 1;
      grid-column: 1/-1;
      text-align: center;
    }
    &_iphone {
      grid-row: 2;
      grid-column: 1/-1;
    }
    @media ${device.laptop} {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      gap: 100px;
      &_text {
        grid-row: 1;
        grid-column: 2/-1;
        text-align: left;
        align-self: center;
      }
      &_iphone {
        justify-self: end;
        grid-row: 1;
        grid-column: 1/2;
      }
    }
  }
  .phone {
    margin: 0 auto;
    display: block;
    height: 410px;
    width: 200px;
    background: url('/iPhone-PNG.png') no-repeat;
    background-size: cover;
    position: relative;
    &__screen {
      position: absolute;
      display: block;
      top: 50px;
      left: 14px;
      width: 175px;
      height: 312px;
      background: url('/screen.jpg') no-repeat;
      background-size: cover;
      background-position-y: 0;
    }
    @media ${device.laptop} {
      height: 500px;
      width: 250px;
      &__screen {
        top: 60px;
        left: 17px;
        width: 218px;
        height: 385px;
      }
    }
  }
`;

export default HomeServicesSection;
