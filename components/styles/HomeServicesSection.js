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
      font-size: 20px;
      font-family: var(--bold);
      color: var(--blacktxt);
      margin: 15px 0px 15px 0px;
      @media ${device.laptopS} {
        font-size: 22px;
      }
    }
  }
  .servicios__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    &_iphone {
      align-self: center;
    }
  }
  .servicios__services {
    text-align: center;
    position: relative;
    height: 50px;
    width: 100%;
    border: 1px red solid;
    overflow: hidden;
    &_one,
    &_two {
      width: 100%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    &_two {
      top: -100%;
    }
  }
  .iphone {
    display: block;
    height: 400px;
    width: 200px;
    background: url('/iPhone-PNG.png') no-repeat;
    background-size: cover;
    position: relative;
    &__screen {
      position: absolute;
      display: block;
      top: 48px;
      left: 13px;
      width: 175px;
      height: 310px;
      background: url('/screen.jpg') no-repeat;
      background-size: cover;
      background-position-y: 0;
    }
  }
`;

export default HomeServicesSection;
