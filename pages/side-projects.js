import SideProjectStyles from '../components/styles/SideProjectsPage';
import { getSideProjects } from '../lib/getFunctions';
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
  );
}
