import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useNav } from '../lib/navState';

const NavbarStyles = styled.nav`
  width: 100%;
  display: none;
  ${(props) => props.open && `display: block`};
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    &--item {
      color: var(--white);
      text-transform: uppercase;
      font-family: var(--bold);
      letter-spacing: 1.2px;
      padding: 0.8em;
      a {
        text-transform: uppercase;
        text-decoration: none;
        color: var(--white);
      }
    }
  }
  .menu--item.active {
    a {
      color: var(--secondaryColor);
    }
  }
`;

export default function Navbar() {
  const router = useRouter();
  const { navOpen } = useNav();
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
      </ul>
    </NavbarStyles>
  );
}
