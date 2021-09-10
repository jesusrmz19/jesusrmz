import Button from '../styles/components/Button';
import FirstFold from '../styles/components/FirstFold';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
  return (
    <main>
      <FirstFold>
        <div className="container">
          <h2>Hola, I am Jesús.</h2>
          <p>
            I'm a self-taught web developer that uses React, JavaScript, and
            regular CSS & HTML to build cool things.
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
    </main>
  );
}

export default Home;
