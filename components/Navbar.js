import Link from 'next/link';
import styled from 'styled-components';

const NavbarStyles = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  .logo {
    position: relative;
    a {
      text-decoration: none;
      text-transform: uppercase;
      font-family: var(--light);
      font-size: 12px;
      color: var(--white);
      cursor: pointer;
      z-index: 10;
    }
    &:before {
      content: '';
      z-index: 1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
      border: 1px solid var(--white);
      border-radius: 100%;
      transition: all 0.2s;
    }
  }
  .menu {
    display: flex;
    &--item {
      padding: 0.5rem 0.7rem;
      color: var(--white);
      text-transform: uppercase;
      font-family: var(--bold);
      letter-spacing: 1.2px;
      a {
        text-transform: uppercase;
        text-decoration: none;
        color: var(--white);
      }
    }
  }
`;

export default function Navbar() {
  return (
    <NavbarStyles>
      <div className="logo">
        <Link href="/">JRM</Link>
      </div>
      <ul className="menu">
        <li className="menu--item">
          <Link href="/posts/">Blog</Link>
        </li>
        <li className="menu--item">Contact</li>
      </ul>
    </NavbarStyles>
  );
}
