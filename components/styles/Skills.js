import styled from 'styled-components';

const Skills = styled.section`
  background: var(--primaryColor);
  color: var(--white);
  width: 100%;
  padding: 2rem 1rem;
  h3 {
    font-family: var(--bold);
    text-align: center;
  }
  p {
    font-family: var(--light);
    text-align: center;
    margin: 0.7rem 0;
  }
  .skills {
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    i {
      font-size: 60px;
      padding: 0.5rem 0.8rem;
    }
  }
`;

export default Skills;
