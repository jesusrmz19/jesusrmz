import styled from 'styled-components';

const Button = styled.button`
  font-family: var(--bold);
  text-transform: uppercase;
  color: var(--white);
  background: var(--primaryColor);
  border: 2px solid var(--white);
  padding: 0.6rem 1rem;
  cursor: pointer;
  transition: all ease 0.2s;
  &:hover {
    background: var(--secondaryColor);
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default Button;
