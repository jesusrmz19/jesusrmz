import styled, { createGlobalStyle } from 'styled-components';
import Footer from './Footer';
import Header from './Header';

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
    --thirdColor: #5E5F62;
  }
  body,
  body[data-theme="light"]{
    --ffbg: #f5f5f5;
    --footerbg: #f5f5f5;
    --blacktxt: #222222;
    --alwaysblack: #222222;
    --greytxt: #aaaaaa;
    --white: #ffffff;
    --yellow: #fce667;
  }
  body[data-theme="dark"]{
    --ffbg: #1e1e1e;
    --footerbg: #1e1e1e;
    --blacktxt: #fff;
    
    --alwaysblack: #222222;
    --greytxt: #aaaaaa;
    --white: #f5f5f5;
  }

  h1,
  h2,
  h3, h4,
  p,
  span,
  a, ul, li {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style-type: none;
  }

  button {
    outline: none;
    border: none;
    background: none;
  }
  .overflow-hidden {
    overflow: hidden;
  }
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}
