import styled from 'styled-components';
import Button from './styles/Button';

const FooterStyles = styled.footer`
  background: var(--thirdColor);
  width: 100%;
  padding: 2rem 1.5rem;
  .footer--title {
    font-family: var(--bold);
    color: var(--white);
    font-size: 1.2rem;
  }
  .footer--txt {
    font-family: var(--light);
    color: var(--lightWhite);
    margin-top: 0.4rem;
    transition: color 0.25 ease;
    &:hover {
      color: var(--secondaryColor);
      cursor: pointer;
    }
  }
  .footer--menu,
  .footer--contact,
  .footer--socials,
  .footer--rights {
    display: flex;
    flex-direction: column;
  }
  .footer--contact,
  .footer--socials,
  .footer--rights {
    margin-top: 1.5rem;
  }
  .footer--rights {
    p {
      font-family: var(--light);
      color: var(--lightWhite);
      line-height: 1.25;
    }
  }
  .footer--btn {
    text-align: center;
    align-self: flex-start;
    margin-top: 0.8rem;
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
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="footer--menu">
        <p className="footer--title">Menu</p>
        <a className="footer--txt">Work</a>
        <a className="footer--txt">Experiments</a>
        <a className="footer--txt">Blog</a>
      </div>
      <div className="footer--contact">
        <p className="footer--title">Contact</p>
        <a className="footer--txt">Let's work together!</a>
        <a className="footer--btn">Email Me</a>
      </div>
      <div className="footer--socials">
        <p className="footer--title">Online</p>
        <a className="footer--txt">GitHub</a>
        <a className="footer--txt">Twitter</a>
        <a className="footer--txt">CodePen</a>
        <a className="footer--txt">LinkedIn</a>
      </div>
      <div className="footer--rights">
        <p>2021 Jesús Ramírez.</p>
        <p>All rights reserved.</p>
      </div>
    </FooterStyles>
  );
}
