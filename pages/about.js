import { useEffect } from 'react';
import styled from 'styled-components';
import { useNav } from '../lib/navState';
import { device } from '../lib/breakpoints';

const AboutPageStyles = styled.main`
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
    ul {
      font-size: 16px;
      font-family: var(--light);
      color: var(--blacktxt);
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
      color: var(--blacktxt);
      line-height: 1.8;
      @media ${device.laptopS} {
        font-size: 18px;
      }
    }
    h2 {
      font-size: 25px;
      letter-spacing: 2.5px;
      font-family: var(--bold);
      color: var(--blacktxt);
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
      color: var(--blacktxt);
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
  }
`;

export default function About() {
  const { closeNav } = useNav();
  useEffect(() => {
    closeNav();
  }, []);
  return (
    <AboutPageStyles>
      <section className="hero">
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
      </section>
      <section className="content">
        <div className="content__container">
          <div className="me">
            <div className="me__txt">
              <h2>About me.</h2>
              <p>
                Hola, I'm Jesús. I'm a Guadalajara-based freelance web designer
                and developer. You probably don't know me but my dogs know me as
                the person who walks and feeds them every morning.
              </p>
              <p>
                I'm 31 years old, I'm married to a beautiful mexican wife and
                live with two lovely dogs named Dana and Lulu.
              </p>
            </div>
            <div className="me__img">PICTURE COMMING SOON</div>
          </div>
          <div className="work">
            <h2>Work, Education, and Stuff</h2>
            <p>
              I have a degree in Electronic Engineering, and a Master in
              Business from ITESO University, I also have a full-time job as a
              Field Applications Engineer focused in the Automotive Industry.
              I've been working for the same company, called Ammon & Rizos, for
              almost 10 years but we focus mostly (99.9%) in hardware design,
              logistics, and manufacturing.
            </p>
            <p>
              I first started programming back in college but picked it up again
              in the summer of 2017. I looked for something in the software
              world that my 9-to-5 couldn’t give me and I’m gladly I found it in
              this fast-growing and excentric web development world. I like to
              create, learn, explore all of the things related to web
              development, it’s been a lifesaver.
            </p>
            <p>
              When I’m not working, learning something new, writing code or
              walking my dogs I spend my time hanging out with my wife, talking,
              playing board games, taking photographs, reading or playing
              basketball. I’m a huge NBA fan, I could watch basketball all day,
              everyday. I’ve also been reading more, this year I’m up to 12
              books, and I know there’s people out there that reads 50 every
              year but I’ve never read that amount in a single year and I’m
              happy for that achivment.
            </p>
            {/* <p>
              You can actually see the books I’ve read here, as I’ve developed a
              RESTful API with Node.js and MongoDB just to practice and
              show-off.
            </p> */}
          </div>
          <div className="skills">
            <h2>Skills & Tools</h2>
            <p>Here are some of the tools and technologies I've worked with:</p>
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
          <div className="bigImg">PICTURE COMMING SOON</div>
        </div>
      </section>
    </AboutPageStyles>
  );
}
