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
import Skills from '../components/styles/Skills';
import ContactStyles from '../components/styles/ContactStyles';

function Home() {
  const skills = [
    'html5',
    'css3-alt',
    'sass',
    'js',
    'react',
    'git-alt',
    'github',
    'figma',
  ];
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
          {projects.map((project) => (
            <Project key={project.id} details={project}></Project>
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
        <div className="sideprojects">
          <Project details={sideprojects[0]}></Project>
        </div>
      </LatestWork>
      <Skills>
        <h3>Skills & Tools</h3>
        <p>
          These are some of the technologies that I use to bring things to life
        </p>
        <div className="skills">
          {skills.map((skill) => (
            <i key={skill}>
              <FontAwesomeIcon icon={['fab', skill]}></FontAwesomeIcon>
            </i>
          ))}
        </div>
      </Skills>
      {/* <ContactStyles>
        <h3>Hit me up!</h3>
        <p>
          If you have a new project, idea or any type of inquiry, let me know in
          the contact below or <a href="#">shoot me an email</a>.
        </p>
      </ContactStyles> */}
    </main>
  );
}

export default Home;
