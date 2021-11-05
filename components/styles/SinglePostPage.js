import styled from 'styled-components';
import { device } from '../../lib/breakpoints';

const SinglePostStyles = styled.main`
  background: var(--ffbg);
  .post--container {
    margin: 0 auto;
    max-width: 800px;
    padding: 130px 25px 50px 25px;
    @media ${device.tablet} {
      padding: 130px 50px 60px 0px;
    }
    @media ${device.laptopM} {
      padding: 150px 0px 60px 0px;
    }
  }
  .post--header {
    margin-bottom: 40px;
    &-title {
      display: flex;
      flex-direction: column;
      font-size: 30px;
      color: var(--blacktxt);
      font-family: var(--bold);
      letter-spacing: 3px;
      @media ${device.tablet} {
        text-align: center;
      }
      @media ${device.laptop} {
        font-size: 48px;
        letter-spacing: 4.8px;
      }
    }
    &-date {
      font-size: 14px;
      font-family: var(--light);
      color: var(--greytxt);
      margin: 10px 0px;

      @media ${device.tablet} {
        text-align: center;
      }
    }
  }
  .post--img {
    width: 100%;
    height: 300px;
    overflow: hidden;
    border-radius: 5px;
    img {
      height: 100%;
      text-align: center;
      object-fit: contain;
    }

    @media ${device.tablet} {
      text-align: center;
    }
  }
  .post--content {
    max-width: 800px;
    margin: 30px auto 0 auto;
    ul {
      font-size: 16px;
      font-family: var(--bold);
      color: var(--blacktxt);
      list-style-type: disc;
      margin: 20px;
    }
    p {
      font-size: 16px;
      font-family: var(--light);
      color: var(--blacktxt);
      line-height: 1.8;
    }
    h2 {
      font-size: 25px;
      font-family: var(--bold);
      color: var(--blacktxt);
      margin: 30px 0px 15px 0px;
    }
    h3 {
      font-size: 20px;
      font-family: var(--bold);
      color: var(--blacktxt);
      margin: 15px 0px 15px 0px;
    }
    pre {
      background: black;
      overflow: scroll;
      color: white;
      padding: 10px;
      margin: 20px 0;
    }
    figure {
      margin: 20px 0;
      padding: 0;
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
`;

export default SinglePostStyles;
