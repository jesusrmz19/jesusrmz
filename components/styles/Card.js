import styled from 'styled-components';

const Card = styled.article`
  &:hover {
    transform: translateY(-5px);
  }
  cursor: pointer;
  background-color: var(--white);
  width: 260px;
  --minHeight: 350px;
  min-height: var(--minHeight);
  box-shadow: var(--bs);
  --borderradius: 5px;
  border-radius: var(--borderradius);
  --padding: 1.8rem;
  transition: transform 200ms ease;
  margin: 2.5rem auto;
  .card--txt {
    padding: 1rem;
    color: black;
  }
  .card--title {
    font-size: 1.5rem;
    line-height: 1.2;
    font-family: var(--bold);
  }
  .card--img {
    background-color: var(--bgColor);
    width: 100%;
    height: calc(0.5 * var(--minHeight));
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: var(--borderradius);
    border-top-right-radius: var(--borderradius);
  }
  .card--img img {
    width: 100%;
  }
  .card--description {
    line-height: 1.5;
    margin-top: 0.8rem;
    font-family: var(--light);
  }
  .card--date {
    margin-top: 0.8rem;
    line-height: 1.5;
    font-family: var(--light);
  }
`;

export default Card;
