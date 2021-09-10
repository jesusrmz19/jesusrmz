import Button from '../components/styles/Button';
import FirstFold from '../components/styles/FirstFold';
import LatestWork from '../components/styles/LatestWork';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import projects from '../projects.json';
import Project from '../components/Project';

function Home() {
  return (
    <main>
      <FirstFold>
        <div className="container">
          <h2>
            Hola, my name is <span>Jesús</span>.
          </h2>
          <p>
            I'm a self-taught web developer that uses <span>React</span>,
            <span>JavaScript</span>, and plain <span>CSS </span>&
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
    </main>
  );
}

export default Home;
