import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import { useNav } from '../lib/navState';
import { device } from '../lib/breakpoints';
import { motion } from 'framer-motion';

const AboutPageStyles = styled(motion.main)`
  .hero {
    background: var(--ffbg);
    &__container {
      max-width: 1280px;
      margin: 0 auto;
      padding-left: 25px;
      padding-right: 25px;
      @media ${device.tablet} {
        padding-left: 50px;
        padding-right: 50px;
      }
      @media ${device.laptopM} {
        padding-left: 0px;
        padding-right: 0px;
      }
    }
    &__text {
      padding: 130px 0;
      @media ${device.laptopM} {
        padding: 150px 0;
      }
      h1 {
        font-size: 14px;
        color: var(--greytxt);
        font-family: var(--bold);
        text-transform: uppercase;
        letter-spacing: 14px;
      }
      p {
        margin-top: 12px;
        width: 90%;
        font-size: 30px;
        color: var(--blacktxt);
        font-family: var(--bold);

        letter-spacing: 3px;
        @media ${device.tablet} {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        @media ${device.laptop} {
          font-size: 48px;

          letter-spacing: 4.8px;
        }
      }
    }
  }
  .content {
    background: white;
    a {
      text-decoration: none;
      color: inherit;
      position: relative;
      cursor: pointer;
      z-index: 5;
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 5px;
        background: #fce667;
        z-index: -1;
        transition: all ease 0.2s;
      }
      &:hover::before {
        height: 100%;
      }
    }
    ul {
      font-size: 16px;
      font-family: var(--light);
      color: var(--alwaysblack);
      list-style-type: disc;
      margin: 20px;
      line-height: 1.8;

      @media ${device.laptopS} {
        font-size: 18px;
      }
    }
    p {
      font-size: 16px;
      font-family: var(--light);
      color: var(--alwaysblack);
      line-height: 1.8;
      @media ${device.laptopS} {
        font-size: 18px;
      }
    }
    h2 {
      font-size: 25px;
      letter-spacing: 2.5px;
      font-family: var(--bold);
      color: var(--alwaysblack);
      margin: 30px 0px 15px 0px;
      @media ${device.laptopS} {
        font-size: 30px;
        letter-spacing: 3px;
      }
    }
    h3 {
      font-size: 20px;

      letter-spacing: 2px;
      font-family: var(--bold);
      color: var(--alwaysblack);
      margin: 15px 0px 15px 0px;
      @media ${device.laptopS} {
        font-size: 22px;
        letter-spacing: 2.2px;
      }
    }
    pre {
      background: black;
      overflow: scroll;
      color: white;
      padding: 10px;
      margin: 20px 0;
    }
    figure {
      margin: 20px 0;
      padding: 0;
      width: 100%;
      img {
        width: 100%;
      }
    }
    &__text {
      display: none;
    }
    .content__text.active {
      display: block;
    }
    &__container {
      max-width: 800px;
      margin: 70px auto 70px auto;
      padding-left: 25px;
      padding-right: 25px;
      @media ${device.tablet} {
        padding-left: 50px;
        padding-right: 50px;
      }
      @media ${device.laptopM} {
        padding-left: 0px;
        padding-right: 0px;
      }
      p {
        margin-bottom: 10px;
      }
      .me {
        &__img {
          margin-top: 20px;
          height: 180px;
          width: 100%;
          background: #c4c4c4;
          background: url('../about_profile.jpg') center no-repeat;
          background-size: cover;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: black;
          font-family: var(--bold);
        }
        @media ${device.tablet} {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-column-gap: 30px;
          &__txt {
            grid-column: 1/2;
          }
          &__img {
            grid-column: 2/-1;
            height: 90%;
          }
        }
      }
      .skills {
        &__lists {
          display: flex;
          flex-direction: column;

          @media ${device.tablet} {
            flex-direction: row;
            justify-content: space-around;
          }
        }
      }
      .bigImg {
        margin-top: 20px;
        height: 180px;
        width: 100%;
        background: #c4c4c4;
        background: url('../about_family.jpg') center no-repeat;
        background-size: cover;
        font-family: var(--bold);
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
        border-radius: 5px;
        @media ${device.tablet} {
          height: 300px;
        }
        @media ${device.laptopS} {
          height: 480px;
        }
      }
    }
    &__toggler {
      width: 70%;
      height: 40px;
      display: flex;
      margin: 0 auto 15px auto;
      justify-content: center;
      .toggler__btns {
        display: inline-block;
        text-align: center;
        z-index: 500;
        text-decoration: none;
        text-transform: uppercase;
        color: var(--alwaysblack);
        font-size: 14px;
        font-family: var(--bold);
        position: relative;
        cursor: pointer;
        border: 2px solid var(--alwaysblack);
        border-radius: 5px;
        padding: 0.4em 1.2em;
        transition: all ease 0.3s;

        &:hover {
          background: var(--alwaysblack);
          color: var(--white);
          border: 2px solid var(--alwaysblack);
        }
      }
      .toggler__btns.active {
        background: var(--alwaysblack);
        color: var(--white);
        border: 2px solid var(--alwaysblack);
      }
      button + button {
        margin-left: 60px;
      }
    }
  }
`;
const all = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 2.8 },
  },
};

const hero = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const content = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.15,
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default function About() {
  const { closeNav } = useNav();

  const [activeText, setActiveText] = useState('short');

  useEffect(() => {
    closeNav();
  }, []);

  const handleBtn = (e) => {
    e.preventDefault();
    let target = e.target.id;
    document.querySelector(`#${activeText}`).classList.remove('active');
    document.querySelector(`.${activeText}`).classList.remove('active');
    document.querySelector(`.${target}`).classList.add('active');
    document.querySelector(`#${target}`).classList.add('active');
    setActiveText(target);
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Web Developer and Designer, based in Guadalajara, Mexico. I help businesses increase competitiveness by designing and developing great-looking and functional websites."
        />
        <meta name="twitter:title" content="Jesus Ramirez | About Me" />
        <meta
          name="twitter:description"
          content="Web Developer and Designer, based in Guadalajara, Mexico. I help businesses increase competitiveness by designing and developing great-looking and functional websites."
        />
        <meta name="twitter:image" content="https://jesusrmz.com/profile.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://jesusrmz.com/about" />
        <meta property="og:title" content="Jesus Ramirez | About Me" />
        <meta
          property="og:description"
          content="Web Developer and Designer, based in Guadalajara, Mexico. I help businesses increase competitiveness by designing and developing great-looking and functional websites."
        />
        <meta property="og:image" content="https://jesusrmz.com/profile.png" />
        <meta property="og:url" content="https://jesusrmz.com/" />
        <meta
          name="description"
          content="Web Developer and Designer, based in Guadalajara, Mexico. I help businesses increase competitiveness by designing and developing great-looking and functional websites."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <title>Jesus Ramirez | About Me</title>
      </Head>
      <AboutPageStyles
        as={motion.main}
        variants={all}
        animate="animate"
        initial="initial"
      >
        <motion.section
          animate="animate"
          initial="initial"
          variants={hero}
          className="hero"
        >
          <div className="hero__container">
            <div className="hero__text">
              <h1>about</h1>
              <p>
                <span>Learn more about me, </span>
                <span>and the technologies I use </span>
                <span>to design and develop.</span>
              </p>
            </div>
          </div>
        </motion.section>
        <motion.section
          animate="animate"
          initial="initial"
          variants={content}
          className="content"
        >
          <div className="content__container">
            <div className="content__toggler">
              <button
                id="short"
                className="toggler__btns active"
                onClick={handleBtn}
              >
                Short
              </button>
              <button id="medium" className="toggler__btns" onClick={handleBtn}>
                Medium
              </button>
              <button id="long" className="toggler__btns" onClick={handleBtn}>
                Long
              </button>
            </div>
            <div className="content__text long">
              <div className="me">
                <div className="me__txt">
                  <h2>About me.</h2>
                  <p>
                    Hola, I'm Jesús. I'm a Guadalajara-based freelance web
                    designer and developer. You probably don't know me but my
                    dogs know me as the person who walks and feeds them every
                    morning.
                  </p>
                  <p>
                    I'm married to a beautiful mexican wife and live with two
                    lovely dogs named Dana and Lulu.
                  </p>
                </div>
                <div className="me__img"></div>
              </div>
              <div className="work">
                <h2>Work, Education and Stuff.</h2>
                <p>
                  I have a degree in Electronic Engineering and a Master in
                  Business from ITESO University. I'm currently working as a
                  Field Applications Engineer at Ammon & Rizos, where I've been
                  working for almost 10 years. We focus mostly on hardware
                  design, logistics and manufacturing.
                </p>
                <p>
                  I first started programming back in college and picked it up
                  again in the summer of 2017. I looked for something in the
                  software world that my 9-to-5 couldn’t give me and I’m glad I
                  found it in this fast-growing and eccentric web development
                  world. I like to create, learn and explore all of the things
                  related to web development: it’s been a lifesaver.
                </p>
                <p>
                  When I’m not working, learning something new, writing code or
                  walking my <Link href="/dogs">dogs</Link>, I spend my time
                  hanging out with my wife, talking, playing board games, taking
                  photographs, reading or playing basketball. I’m a huge NBA
                  fan, I could watch basketball all day, everyday. I’ve also
                  been reading more; and in 2021 I read 12 books, an achievement
                  I'm prod of.
                </p>
                <p>
                  You can see the books I’ve read on{' '}
                  <Link href="/books">this page</Link>, where I've developed a
                  RESTful API with Node.js and MongoDB.
                </p>
              </div>
              <div className="skills">
                <h2>Skills & Tools</h2>
                <p>
                  Here are some of the tools and technologies I've worked with:
                </p>
                <div className="skills__lists">
                  <ul>
                    <li>JavaScript (ES6+)</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                  </ul>

                  <ul>
                    <li>TypeScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SCSS</li>
                    <li>Styled Components</li>
                  </ul>

                  <ul>
                    <li>VS Code</li>
                    <li>Figma</li>
                    <li>Netlify</li>
                    <li>Heroku</li>
                    <li>Sanity</li>
                  </ul>
                </div>
              </div>
              <div className="bigImg"></div>
            </div>
            <div className="content__text medium">
              <div className="me">
                <div className="me__txt">
                  <h2>About me.</h2>
                  <p>
                    Hola, I'm Jesús. I'm a Guadalajara-based freelance web
                    designer and developer. You probably don't know me but my
                    dogs know me as the person who walks and feeds them every
                    morning.
                  </p>
                  <p>
                    I'm married to a beautiful mexican wife and live with two
                    lovely dogs named Dana and Lulu.
                  </p>
                </div>
                <div className="me__img"></div>
              </div>
              <div className="work">
                <h2>Work, Education and Stuff.</h2>
                <p>
                  I have a degree in Electronic Engineering and a Master in
                  Business from ITESO University. I'm currently working as a
                  Field Applications Engineer at Ammon & Rizos.
                </p>
                <p>
                  When I’m not working, learning something new, writing code or
                  walking my <Link href="/dogs">dogs</Link>, I spend my time
                  hanging out with my wife, reading or playing basketball.
                </p>
                <p>
                  You can see the books I’ve read on{' '}
                  <Link href="/books">this page</Link>, where I've developed a
                  RESTful API with Node.js and MongoDB.
                </p>
              </div>
              <div className="skills">
                <h2>Skills & Tools</h2>
                <p>
                  Here are some of the tools and technologies I've worked with:
                </p>
                <div className="skills__lists">
                  <ul>
                    <li>JavaScript (ES6+)</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                  </ul>

                  <ul>
                    <li>TypeScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SCSS</li>
                    <li>Styled Components</li>
                  </ul>

                  <ul>
                    <li>VS Code</li>
                    <li>Figma</li>
                    <li>Netlify</li>
                    <li>Heroku</li>
                    <li>Sanity</li>
                  </ul>
                </div>
              </div>
              <div className="bigImg"></div>
            </div>
            <div className="content__text active short">
              <div className="me">
                <div className="me__txt">
                  <h2>About me.</h2>
                  <p>
                    Hola, I'm Jesús. I'm a Guadalajara-based freelance web
                    designer and developer. You probably don't know me but my
                    dogs know me as the person who walks and feeds them every
                    morning.
                  </p>
                  <p>
                    I'm married to a beautiful mexican wife and live with two
                    lovely dogs named Dana and Lulu.
                  </p>
                </div>
                <div className="me__img"></div>
              </div>
              <div className="skills">
                <h2>Skills & Tools</h2>
                <p>
                  Here are some of the tools and technologies I've worked with:
                </p>
                <div className="skills__lists">
                  <ul>
                    <li>JavaScript (ES6+)</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                  </ul>

                  <ul>
                    <li>TypeScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SCSS</li>
                    <li>Styled Components</li>
                  </ul>

                  <ul>
                    <li>VS Code</li>
                    <li>Figma</li>
                    <li>Netlify</li>
                    <li>Heroku</li>
                    <li>Sanity</li>
                  </ul>
                </div>
              </div>
              <div className="bigImg"></div>
            </div>
          </div>
        </motion.section>
      </AboutPageStyles>
    </>
  );
}
