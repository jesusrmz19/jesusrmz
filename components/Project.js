import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from '../lib/breakpoints';
import project from '../studio/schemas/project';

const ProjectStyles = styled.div`
  max-width: 327px;
  max-height: 420px;
  overflow: hidden;
  background: ${(props) => props.color};
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
  @media ${device.laptop} {
    width: 100%;
    max-width: 600px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-row: auto auto;
    grid-row-gap: 60px;
    padding: 60px 50px;
    align-items: center;
    .title {
      grid-column: 1/2;
      grid-row: 1;
      h3 {
        font-size: 30px;
      }
    }
    .subtxt {
      grid-column: 2/-1;
      grid-row: 1;
      margin-top: 0px;
      margin-bottom: 0px;
      text-align: right;
    }
    .img {
      grid-column: 1/-1;
      grid-row: 2;
      text-align: center;
      img {
        width: 80%;
      }
    }
  }
  @media ${device.laptopM} {
    width: 600px;
    max-width: 600px;
    height: 610px;
    max-height: 610px;
  }
`;

export default function Project({ project }) {
  return (
    <ProjectStyles color={project.bgcolor}>
      <div className="title">
        <h3>{project.title}</h3>
      </div>
      <div className="subtxt">
        <p className="subtxt__dnd">
          {project.designed ? 'design & development' : 'development'}
        </p>
        <p className="subtxt__description">{project.industry}</p>
      </div>
      <div className="img">
        <img src={project.mainImage.asset.url} alt="La Silicia"></img>
      </div>
    </ProjectStyles>
  );
}
