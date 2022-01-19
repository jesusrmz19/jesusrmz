import React, { useEffect } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Link from 'next/link';
import Project from '../components/Project';
import HeroSection from '../components/styles/HeroSection';
import HomeProjectSection from '../components/styles/HomeProjectSection';
import HomeServicesSection from '../components/styles/HomeServicesSection';
import { getHomePageProjects } from '../lib/getFunctions';
import { useNav } from '../lib/navState';
import { motion } from 'framer-motion';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Slider from '../components/Slider';

export async function getStaticProps() {
  const allProjects = await getHomePageProjects();
  return {
    props: {
      allProjects,
    },
    revalidate: 5,
  };
}

const ProjectItem = React.forwardRef(({ onClick, href, props }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Project project={props}></Project>
    </a>
  );
});

function Home({ allProjects }) {
  const { closeNav } = useNav();

  useEffect(() => {
    closeNav();
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
    // gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: '.servicios__container',
    //       start: '-70px top',
    //       pin: true,
    //       scrub: 1,
    //     },
    //   })
    //   .to('.iphone__screen', {
    //     backgroundPosition: '0px -280px',
    //     duration: 0.5,
    //   });
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Web Developer and Designer, based in Guadalajara, Mexico. I help businesses increase competitiveness by designing and developing great-looking and functional websites."
        />
        <meta name="twitter:title" content="Jesus Ramirez | Web Developer" />
        <meta
          name="twitter:description"
          content="Web Developer and Designer, based in Guadalajara, Mexico. I help businesses increase competitiveness by designing and developing great-looking and functional websites."
        />
        <meta name="twitter:image" content="https://jesusrmz.com/profile.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://jesusrmz.com/" />
        <meta property="og:title" content="Jesus Ramirez | Web Developer" />
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
        <title>Jesus Ramirez | Web Developer</title>
      </Head>
      <main>
        <HeroSection>
          <div className="hero__container">
            <div className="hero__text">
              <p>¡hola!</p>
              <h1>
                <span>My name is Jesús Ramírez.</span>
                <span>I'm a freelance web developer.</span>
              </h1>
              <div className="hero__text_links">
                <a
                  href="https://github.com/jesusrmz19"
                  className="hero__text_git"
                  aria-label="Go to my GitHub Profile"
                >
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
                <div className="hero__text_pages">
                  <Link href="/about">about me</Link>
                  <Link href="/posts/">read my blog</Link>
                </div>
              </div>
            </div>
          </div>
        </HeroSection>
        <HomeProjectSection>
          <div className="projects__container">
            <h2>projects</h2>
            <div className="projects">
              {allProjects.map((project) => (
                <Link
                  key={project.slug.current}
                  href={project.link}
                  passHref={true}
                >
                  <ProjectItem props={project}></ProjectItem>
                </Link>
              ))}
            </div>
          </div>
        </HomeProjectSection>
        <HomeServicesSection>
          <div className="servicios__container">
            <h2>services</h2>
            <div className="servicios__content">
              <div className="servicios__content_text">
                <Slider></Slider>
              </div>
              <div className="servicios__content_iphone">
                <div className="phone">
                  <div className="phone__screen"></div>
                </div>
              </div>
            </div>
          </div>
        </HomeServicesSection>
      </main>
    </>
  );
}

export default Home;
