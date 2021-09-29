import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNav } from '../lib/navState';
import { device } from '../lib/breakpoints';

const NavbarStyles = styled.nav`
  width: 100%;
  display: none;
  ${(props) => props.open && `display: block`};
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    &--item {
      color: var(--FFText);
      text-transform: uppercase;
      font-family: var(--bold);
      letter-spacing: 1.2px;
      padding: 0.8em;
      a {
        text-transform: uppercase;
        text-decoration: none;
        color: var(--FFText);
      }
    }
  }
  .menu--item.active {
    a {
      color: var(--secondaryColor);
    }
  }
  .menu--item {
    button {
      color: var(--white);
      text-transform: uppercase;
      font-family: var(--bold);
      font-size: 16px;
      cursor: pointer;
    }
  }
  @media ${device.laptop} {
    width: 50%;
    display: block;
    .menu {
      flex-direction: row;
      justify-content: flex-end;
    }
  }
`;

export default function Navbar() {
  const router = useRouter();
  const [activeTheme, setActiveTheme] = useState('light');
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';
  const { navOpen, closeNav } = useNav();

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);

  return (
    <NavbarStyles open={navOpen}>
      <ul className="menu">
        <li
          className={
            router.pathname === '/' ? 'menu--item active' : 'menu--item'
          }
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={
            router.pathname === '/posts' ? 'menu--item active' : 'menu--item'
          }
        >
          <Link href="/posts/">Blog</Link>
        </li>
        <li className="menu--item">Contact</li>
        <li className="menu--item btn">
          <button onClick={() => setActiveTheme(inactiveTheme)}>☀️ 🌙</button>
        </li>
      </ul>
    </NavbarStyles>
  );
}
