import styled from 'styled-components';

const ProjectStyles = styled.div`
  margin: 1.5rem 0;
  .project--img {
    width: 100%;
    background: var(--primaryColor);
    height: 250px;
    margin: 0 auto;
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
`;

const LiveButton = styled.a`
  display: inline-block;
  background: var(--primaryColor);
  text-transform: uppercase;
  font-family: var(--bold);
  color: var(--white);
  width: 100px;
  text-align: center;
  padding: 0.6rem;
  cursor: pointer;
  transition: background ease 0.2s;
  &:hover {
    background: var(--secondaryColor);
  }
`;

export default function Project({ details }) {
  const { name, description, live, repo } = details;
  return (
    <ProjectStyles>
      <div className="project--img"></div>
      <div className="project--txt">
        <p className="project--name">{name}</p>
        <p className="project--description">{description}</p>
      </div>
      <div className="project--btns">
        <LiveButton style={live ? {} : { display: 'none' }}>
          live page
        </LiveButton>
        <LiveButton style={repo ? {} : { display: 'none' }}>repo</LiveButton>
      </div>
    </ProjectStyles>
  );
}
