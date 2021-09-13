import styled from 'styled-components';

const ContactStyles = styled.section`
  background: var(--bgColor);
  width: 100%;
  padding: 2rem 1rem;
  h3 {
    font-family: var(--bold);
    text-align: center;
  }
  p {
    font-family: var(--light);
    text-align: center;
    margin: 8px 0;
    a {
      color: black;
    }
  }
`;

export default ContactStyles;
