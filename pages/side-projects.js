import SideProjectStyles from '../components/styles/SideProjectsPage';
import { getSideProjects } from '../lib/getFunctions';
import Head from 'next/head';
import Project from '../components/Project';

export async function getStaticProps() {
  const allSideProjects = await getSideProjects();
  return {
    props: {
      allSideProjects,
    },
    revalidate: 5,
  };
}

export default function SideProjects({ allSideProjects }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Web Developer and Designer, based in Guadalajara, Mexico. I help businesses increase competitiveness by designing and developing great-looking and functional websites."
        />
        <meta name="twitter:title" content="Side Projects | Jesus Ramirez" />
        <meta
          name="twitter:description"
          content="Web Developer and Designer, based in Guadalajara, Mexico. I help businesses increase competitiveness by designing and developing great-looking and functional websites."
        />
        <meta name="twitter:image" content="https://jesusrmz.com/profile.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://jesusrmz.com/side-projects" />
        <meta property="og:title" content="Side Projects | Jesus Ramirez" />
        <meta
          property="og:description"
          content="Web Developer and Designer, based in Guadalajara, Mexico. I help businesses increase competitiveness by designing and developing great-looking and functional websites."
        />
        <meta property="og:image" content="https://jesusrmz.com/profile.png" />
        <meta property="og:url" content="https://jesusrmz.com/side-projects" />
        <meta
          name="description"
          content="Web Developer and Designer, based in Guadalajara, Mexico. I help businesses increase competitiveness by designing and developing great-looking and functional websites."
        />
        <link rel="icon" href="/favicon.png" />
        <title>Side Projects | Jesus Ramirez</title>
      </Head>
      <SideProjectStyles>
        <section>
          <h1>Side Projects</h1>
          <div className="container">
            {allSideProjects.map((project) => (
              <Project details={project} key={project.title}></Project>
            ))}
          </div>
        </section>
      </SideProjectStyles>
    </>
  );
}
