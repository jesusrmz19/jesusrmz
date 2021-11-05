import Link from 'next/link';
import styled from 'styled-components';
import { useNav } from '../lib/navState';
import { device } from '../lib/breakpoints';
import Navbar from './Navbar';

const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 20px;
  padding-bottom: 20px;
  background: var(--ffbg);
  width: 100%;
  z-index: 1000;
  .header__container {
    margin: 0 auto;
    max-width: 1280px;
    padding-left: 25px;
    padding-right: 25px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    @media ${device.tablet} {
      padding-left: 50px;
      padding-right: 50px;
    }

    @media ${device.laptopM} {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
  .logo {
    text-transform: uppercase;
    font-family: var(--bold);
    font-size: 18px;
    color: var(--blacktxt);
    cursor: pointer;
    z-index: 10;
    transition: all ease 0.2s;
    .hand {
      display: inline-block;
      animation-name: wave;
      animation-duration: 3s;
      animation-iteration-count: 10;
      transform-origin: bottom right;
      animation-play-state: running;
    }
  }
  .button--container {
    width: 50%;
    text-align: right;
    button {
      color: var(--blacktxt);
    }
  }
  @media ${device.laptop} {
    .button--container {
      display: none;
    }
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(20deg);
    }
    20% {
      transform: rotate(-10deg);
    }
    30% {
      transform: rotate(20deg);
    }
    40% {
      transform: rotate(-6deg);
    }
    50% {
      transform: rotate(12deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export default function Header() {
  const { toggleNav } = useNav();
  return (
    <HeaderStyles>
      <div className="header__container">
        <Link href="/">
          <p className="logo">
            <span className="hand">👋🏼</span> JRM
          </p>
        </Link>
        <div className="button--container">
          <button className="button" onClick={toggleNav}>
            menu
          </button>
        </div>
        <Navbar></Navbar>
      </div>
    </HeaderStyles>
  );
}
