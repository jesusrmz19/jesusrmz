import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from '../lib/breakpoints';

const ProjectStyles = styled.div`
  margin-top: 2.5rem;
  .project--img {
    width: 100%;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  .project--txt {
    margin: 1rem 0;
  }
  .project--name {
    margin-bottom: 8px;
    font-family: var(--bold);
  }
  .project--description {
    font-family: var(--light);
  }
  .project--btns {
    text-align: center;
    a + a {
      margin-left: 10px;
    }
  }
  .project--tech {
    display: flex;
    padding: 1.5rem 1rem;
    font-size: 1.5rem;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  @media ${device.laptop} {
    margin-top: 4rem;
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto 50px auto;
    align-items: center;
    .project--img {
      grid-column: 1/2;
      grid-row: 1 / span 3;
    }
    .project--txt {
      grid-column: 2/-1;
      grid-row: 1;
      width: 80%;
      margin: 0 auto;
    }
    .project--name {
      margin-bottom: 20px;
      font-size: 25px;
    }
    .project--tech {
      grid-column: 2/-1;
      grid-row: 2;
      width: 80%;
      margin: 0 auto;
    }
    .project--btns {
      grid-column: 2/-1;
      grid-row: 3;
      width: 80%;
      margin: 0 auto;
    }
  }
`;

const LiveButton = styled.a`
  display: inline-block;
  background: var(--btnBg);
  text-transform: uppercase;
  text-decoration: none;
  font-family: var(--bold);
  color: var(--btnTxt);
  width: 120px;
  text-align: center;
  padding: 0.8rem;
  cursor: pointer;
  transition: background ease 0.2s;
  border: 3px solid var(--btnBg);
  font-size: 13.3px;
  &:hover {
    background: var(--secondaryColor);
  }
`;

const RepoButton = styled.a`
  display: inline-block;
  background: transparent;
  text-transform: uppercase;
  text-decoration: none;
  font-family: var(--bold);
  color: var(--btnBg);
  border: 3px solid var(--btnBg);
  width: 120px;
  text-align: center;
  padding: 0.8rem;
  cursor: pointer;
  transition: all ease 0.2s;
  font-size: 13.3px;
  &:hover {
    background: var(--secondaryColor);
    color: var(--white);
  }
`;

export default function Project({ details }) {
  const {
    title,
    description,
    link,
    repo,
    mainImage,
    projectTechnologies,
    altImage,
  } = details;
  return (
    <ProjectStyles>
      <div className="project--img">
        <img src={mainImage.asset.url} alt={altImage}></img>
      </div>
      <div className="project--txt">
        <h3 className="project--name">{title}</h3>
        <p className="project--description">{description}</p>
      </div>
      <div className="project--tech">
        {projectTechnologies.map((tech) => (
          <FontAwesomeIcon key={tech} icon={['fab', tech]} />
        ))}
      </div>
      <div className="project--btns">
        <LiveButton href={link} style={link ? {} : { display: 'none' }}>
          live page
        </LiveButton>
        <RepoButton href={repo} style={repo ? {} : { display: 'none' }}>
          repo
        </RepoButton>
      </div>
    </ProjectStyles>
  );
}
