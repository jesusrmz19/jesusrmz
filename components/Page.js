import styled, { createGlobalStyle } from 'styled-components';
import Footer from './Footer';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    --regular: 'Sarabun-Regular';
    --bold: 'Sarabun-Bold';
    --light: 'Sarabun-Light';
    --white: #fff;
    --lightWhite: rgba(255,255,255,0.6);
    --primaryColor: #191b1f;
    --secondaryColor: #ff8125;
    --thirdColor: #5E5F62;
    --bgColor: #f3f3f3;
  }

  h1,
  h2,
  h3, h4,
  p,
  span,
  a {
    margin: 0;
    padding: 0;
  }

  button {
    outline: none;
    border: none;
    background: none;
  }
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      {children}
      <Footer></Footer>
    </div>
  );
}
