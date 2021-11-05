import styled from 'styled-components';
import { device } from '../../lib/breakpoints';

const PostsPageStyles = styled.main`
  .hero {
    background: var(--ffbg);
    &__container {
      margin: 0 auto;
      padding: 130px 25px;
      max-width: 1280px;
      @media ${device.tablet} {
        padding: 130px 50px;
      }
      @media ${device.laptopM} {
        padding: 150px 0px;
      }
    }
    &__txt {
      h1 {
        font-size: 14px;
        color: var(--greytxt);
        font-family: var(--bold);
        text-transform: uppercase;
        letter-spacing: 14px;
      }
      p {
        margin-top: 12px;
        display: flex;
        flex-direction: column;
        font-size: 30px;
        color: var(--blacktxt);
        font-family: var(--bold);
        margin-bottom: 30px;
        letter-spacing: 3px;
        @media ${device.laptop} {
          font-size: 48px;
          letter-spacing: 4.8px;
        }
      }
    }
  }
  .content {
    background: #fff;
    &__container {
      margin: 0 auto;
      padding: 70px 25px;
      max-width: 1280px;
      @media ${device.tablet} {
        padding: 70px 50px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        grid-row-gap: 90px;
        grid-column-gap: 20px;
      }
      @media ${device.laptopS} {
        grid-template-columns: repeat(3, 1fr);

        grid-column-gap: 70px;
      }
      @media ${device.laptopM} {
        padding: 100px 0px;
      }
      a {
        display: block;
        text-decoration: none;
        transition: transform ease 0.2s;
        &:hover {
          transform: scale(0.98);
        }
      }
      a + a {
        margin-top: 50px;
        @media ${device.tablet} {
          margin-top: 0px;
        }
      }
    }
  }
`;

export default PostsPageStyles;
