import styled from 'styled-components';

const ProjectStyles = styled.div`
  margin: 1.5rem 0 3rem 0;
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
`;

const LiveButton = styled.a`
  display: inline-block;
  background: var(--primaryColor);
  text-transform: uppercase;
  text-decoration: none;
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
  const { title, description, link, repo, mainImage } = details;
  return (
    <ProjectStyles>
      <div className="project--img">
        <img src={mainImage.asset.url} alt="alt"></img>
      </div>
      <div className="project--txt">
        <p className="project--name">{title}</p>
        <p className="project--description">{description}</p>
      </div>
      <div className="project--btns">
        <LiveButton href={link} style={link ? {} : { display: 'none' }}>
          live page
        </LiveButton>
        <LiveButton href={repo} style={repo ? {} : { display: 'none' }}>
          repo
        </LiveButton>
      </div>
    </ProjectStyles>
  );
}
