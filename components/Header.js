import Link from 'next/link';
import styled from 'styled-components';
import { useNav } from '../lib/navState';
import Navbar from './Navbar';

const HeaderStyles = styled.header`
  background: var(--firstFold);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  padding: 0.5rem 1rem;
  border-bottom: 3px solid var(--nav);
  .logo {
    text-transform: uppercase;
    font-family: var(--bold);
    font-size: 12px;
    color: var(--FFText);
    cursor: pointer;
    z-index: 10;
    width: 50%;
    padding: 0.8em 0;
  }
  .button--container {
    width: 50%;
    text-align: right;
    button {
      color: var(--FFText);
    }
  }
`;

export default function Header() {
  const { toggleNav } = useNav();
  return (
    <HeaderStyles>
      <Link href="/">
        <p className="logo">JRM</p>
      </Link>
      <div className="button--container">
        <button className="button" onClick={toggleNav}>
          menu
        </button>
      </div>
      <Navbar></Navbar>
    </HeaderStyles>
  );
}
