import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from '../lib/breakpoints';

const ProjectStyles = styled.div`
  max-width: 327px;
  max-height: 420px;
  overflow: hidden;
  background: #333232;
  color: #fff;
  padding: 25px;
  border-radius: 5px;
  .title {
    h3 {
      font-size: 25px;
      font-family: var(--bold);
    }
  }
  .subtxt {
    margin-top: 15px;
    margin-bottom: 40px;
    &__dnd {
      font-family: var(--bold);
      text-transform: uppercase;
      font-size: 14px;
      letter-spacing: 1.4px;
    }
    &__description {
      margin-top: 5px;
      font-family: var(--regular);
      font-size: 14px;
      letter-spacing: 1.4px;
    }
  }
  .img {
    img {
      width: 100%;
    }
  }
`;

export default function Project() {
  return (
    <ProjectStyles>
      <div className="title">
        <h3>La Silicia</h3>
      </div>
      <div className="subtxt">
        <p className="subtxt__dnd">design & depeloment</p>
        <p className="subtxt__description">Product Showcase</p>
      </div>
      <div className="img">
        <img src="/lasilicia.png" alt="La Silicia"></img>
      </div>
    </ProjectStyles>
  );
}
