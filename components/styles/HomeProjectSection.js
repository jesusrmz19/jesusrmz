import styled from 'styled-components';

const HomeProjectSection = styled.section`
  background: white;
  padding-top: 70px;
  padding-bottom: 70px;
  .projects__container {
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 25px;
    padding-right: 25px;
    h2 {
      font-size: 14px;
      font-family: var(--bold);
      color: var(--greytxt);
      letter-spacing: 14px;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 50px;
    }
  }
`;

export default HomeProjectSection;
