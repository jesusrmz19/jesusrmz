import styled from 'styled-components';
import { device } from '../../lib/breakpoints';

const CardStyles = styled.article`
  max-width: 380px;
  @media ${device.tablet} {
    width: 320px;
  }
  @media ${device.laptopS} {
    width: 100%;
  }
  .img {
    display: block;
    width: 100%;
    height: 200px;
    background: #c4c4c4;
    border-radius: 5px;
    overflow: hidden;
    img {
      border-radius: 5px;
      width: 100%;
    }
  }
  .txt {
    &__title {
      font-size: 25px;
      font-family: var(--bold);
      color: var(--alwaysblack);
      letter-spacing: 2.5px;
      margin-top: 15px;
    }
    &__date {
      font-size: 14px;
      font-family: var(--light);
      color: var(--greytxt);
      margin: 10px 0px;
    }
    &__description {
      font-size: 16px;
      font-family: var(--regular);
      color: var(--alwaysblack);
    }
  }
`;

export default CardStyles;
