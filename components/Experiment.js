import styled from 'styled-components';

const ExperimentStyles = styled.div`
  background: var(--white);
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  .experiment--img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    img {
      width: 100%;

      border-radius: 50%;
    }
  }
  .experiment--txt {
    align-self: flex-start;
  }
  .title {
    text-transform: uppercase;
    font-family: var(--bold);
  }
  .experiment--name {
    font-family: var(--light);
    text-decoration: none;
    color: black;
  }
`;

export default function Experiment({ details }) {
  const { title, mainImage, link } = details;
  return (
    <ExperimentStyles>
      <a className="experiment--img" href={link}>
        <img src={mainImage.asset.url} alt={mainImage.alt}></img>
      </a>
      <div className="experiment--txt">
        <p className="title">-title</p>
        <a className="experiment--name" href={link}>
          {title}
        </a>
      </div>
    </ExperimentStyles>
  );
}
