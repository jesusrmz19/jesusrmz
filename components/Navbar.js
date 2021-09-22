import Link from 'next/link';
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
`;

export default function Navbar() {
  const { navOpen } = useNav();
  return (
    <NavbarStyles open={navOpen}>
      <ul className="menu">
        <li className="menu--item">
          <Link href="/posts/">Blog</Link>
        </li>
        <li className="menu--item">Contact</li>
      </ul>
    </NavbarStyles>
  );
}
