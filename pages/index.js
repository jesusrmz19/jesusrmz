import { useState, useEffect } from 'react';
import Button from '../components/styles/Button';
import Link from 'next/link';
import Head from 'next/head';
import FirstFold from '../components/styles/FirstFold';
import LatestWork from '../components/styles/LatestWork';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import projects from '../content/projects.json';
import Project from '../components/Project';
import ExperimentsSection from '../components/styles/ExperimentsSection';
import experiments from '../content/experiments.json';
import Experiment from '../components/Experiment';
import sideprojects from '../content/sideprojects.json';
import ContactStyles from '../components/styles/ContactStyles';
import RecentBlogs from '../components/styles/RecentBlogs';
import Card from '../components/styles/Card';
import {
  getAllBlogs,
  getExperiments,
  getLatestsBlogs,
  getProjects,
  getSideProjects,
} from '../lib/getFunctions';
import { setDate } from '../lib/helpers';
import { useNav } from '../lib/navState';

export async function getStaticProps() {
  const allProjects = await getProjects();
  const allExperiments = await getExperiments();
  const allSideProjects = await getSideProjects();
  const latestsBlogs = await getLatestsBlogs();
  return {
    props: {
      latestsBlogs,
      allProjects,
      allExperiments,
      allSideProjects,
    },
    revalidate: 5,
  };
}

function Home({ allProjects, allExperiments, allSideProjects, latestsBlogs }) {
  const { closeNav } = useNav();
  useEffect(() => {
    closeNav();
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
        <link rel="icon" href="/favicon.png" />
        <title>Jesus Ramirez | Web Developer</title>
      </Head>
      <main>
        <FirstFold>
          <div className="container">
            <h1>¡Hola!</h1>
            <p>
              My name is Jesús, and I'm a self-taught web developer that uses
              <span> React</span>,<span> JavaScript</span>, and plain
              <span> CSS</span> &<span> HTML</span> to build cool things.
            </p>
            <div className="links">
              <a href="https://github.com/jesusrmz19" className="links--icons">
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
              <a href="https://codepen.io/jesusrmz" className="links--icons">
                <FontAwesomeIcon icon={['fab', 'codepen']} />
              </a>
              <a href="https://twitter.com/jesusrmz_" className="links--icons">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
            </div>
            <div className="container--btn">
              <a href="#work">EXPLORE WORK</a>
            </div>
          </div>
        </FirstFold>
        <LatestWork id="work">
          <h3>Latest Work</h3>
          <div className="work">
            {allProjects.map((project) => (
              <Project key={project.title} details={project} />
            ))}
          </div>
        </LatestWork>
        <ExperimentsSection>
          <h3>Experiments</h3>
          <div className="experiments">
            {allExperiments.map((experiment) => (
              <Experiment
                key={experiment.title}
                details={experiment}
              ></Experiment>
            ))}
          </div>
        </ExperimentsSection>
        <LatestWork>
          <h3>Last Side Projects</h3>
          <div className="work">
            <Project details={allSideProjects[0]}></Project>
          </div>
        </LatestWork>
        <RecentBlogs>
          <h3>Recent Blogs</h3>
          <div className="blogs">
            {latestsBlogs.map((post) => (
              <Link
                href={`/posts/${post.slug.current}`}
                key={post.slug.current}
              >
                <Card className="card">
                  <div className="card--img">
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.altMainImage}
                    ></img>
                  </div>
                  <div className="card--txt">
                    <h4 className="card--title">{post.title}</h4>
                    <p className="card--description">{post.description}</p>
                    <p className="card--date">{setDate(post.date)}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </RecentBlogs>
      </main>
    </>
  );
}

export default Home;
