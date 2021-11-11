import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faCodepen,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { device } from '../lib/breakpoints';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const FooterStyles = styled.footer`
  background: var(--footerbg);
  padding-top: 50px;
  padding-bottom: 50px;
  @media ${device.laptop} {
    padding-top: 65px;
    padding-bottom: 100px;
  }
  .footer--container {
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 25px;
    padding-right: 25px;
    @media ${device.tablet} {
      padding-left: 50px;
      padding-right: 50px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    @media ${device.laptopM} {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
  .footer--left {
    &__big {
      display: flex;
      flex-direction: column;
      font-size: 30px;
      font-family: var(--bold);
      color: var(--blacktxt);
      @media ${device.laptop} {
        font-size: 48px;
      }
    }
    &__small {
      font-size: 16px;
      font-family: var(--regular);
      margin-top: 30px;
      color: var(--blacktxt);

      @media ${device.laptop} {
        font-size: 20px;
      }
    }
  }
  .footer--right {
    margin-top: 50px;
    @media ${device.tablet} {
      margin-top: 0px;
      justify-self: center;
      align-self: center;
    }
    h2 {
      font-family: var(--bold);
      font-size: 14px;
      color: var(--greytxt);
      text-transform: uppercase;
      letter-spacing: 14px;
      margin-bottom: 15px;
    }
    &__email {
      font-size: 16px;
      font-family: var(--bold);
      color: var(--blacktxt);
      cursor: pointer;
      text-decoration: none;
      letter-spacing: 1.6px;
      transition: color ease 0.2s;
      &:hover {
        color: var(--greytxt);
      }
      @media ${device.laptop} {
        font-size: 20px;
      }
    }
    &__links {
      margin-top: 30px;
      display: flex;
      font-size: 20px;
      color: var(--greytxt);
      li + li {
        margin-left: 20px;
      }
      li {
        cursor: pointer;
        transition: all ease 0.2s;
        a,
        button {
          color: inherit;
        }
        &:hover {
          color: var(--blacktxt);
          transform: translateY(-5px);
        }
      }
    }
  }
`;

export default function Footer() {
  const [activeTheme, setActiveTheme] = useState('light');
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';
  useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);
  return (
    <FooterStyles>
      <div className="footer--container" id="contact">
        <div className="footer--left">
          <p className="footer--left__big">
            <span>Don't be shy,</span>
            <span>send me an email.</span>
          </p>
          <p className="footer--left__small">
            Or send a DM wherever you feel like.
          </p>
        </div>
        <div className="footer--right">
          <h2>contact</h2>
          <a
            className="footer--right__email"
            href="mailto:jrmz.maldonado@gmail.com"
          >
            jrmz.maldonado@gmail.com
          </a>
          <ul className="footer--right__links">
            <li>
              <a href="https://github.com/jesusrmz19">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jesusrmz/">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/jesusrmz_">
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a href="https://codepen.io/jesusrmz">
                <FontAwesomeIcon icon={faCodepen}></FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a onClick={() => setActiveTheme(inactiveTheme)}>
                <FontAwesomeIcon
                  icon={activeTheme === 'dark' ? faSun : faMoon}
                ></FontAwesomeIcon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </FooterStyles>
  );
}
