import Button from '../components/styles/Button';
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
import { getSortedPostsData } from '../lib/posts';
import { getProjects } from '../lib/getFunctions';

export async function getStaticProps() {
  const recentPostsData = getSortedPostsData();
  const allProjects = await getProjects();
  return {
    props: {
      recentPostsData,
      allProjects,
    },
  };
}

function Home({ recentPostsData, allProjects }) {
  return (
    <main>
      <FirstFold>
        <div className="container">
          <h2>
            Hola, my name is <span>Jesús</span>.
          </h2>
          <p>
            I'm a self-taught web developer that uses <span>React</span>,
            <span> JavaScript</span>, and plain <span>CSS </span>&
            <span> HTML</span> to build cool things.
          </p>
          <div className="links">
            <a href="#" className="links--icons">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a href="#" className="links--icons">
              <FontAwesomeIcon icon={['fab', 'codepen']} />
            </a>
            <a href="#" className="links--icons">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
          </div>
          <Button>Explore Work</Button>
        </div>
      </FirstFold>
      <LatestWork>
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
          {experiments.map((experiment) => (
            <Experiment key={experiment.id} details={experiment}></Experiment>
          ))}
        </div>
      </ExperimentsSection>
      <LatestWork>
        <h3>Last Side Projects</h3>
        <div className="sideprojects"></div>
      </LatestWork>
      {/* <ContactStyles>
        <h3>Hit me up!</h3>
        <p>
          If you have a new project, idea or any type of inquiry, let me know in
          the contact below or <a href="#">shoot me an email</a>.
        </p>
      </ContactStyles> */}
      <RecentBlogs>
        <h3>Recent Blogs</h3>
        <div className="blogs">
          {recentPostsData.map(({ id, description, title }) => (
            <p key={id}>{title}</p>
          ))}
        </div>
      </RecentBlogs>
    </main>
  );
}

export default Home;
