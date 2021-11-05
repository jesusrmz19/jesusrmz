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
    --greytxt: #aaaaaa;
    --mainbg: #ffffff;
    --FFText: #191b1f;
    --bgColor: #f3f3f3;
    --nav: #ffff;
  }
  body[data-theme="dark"]{
    --firstFold: #191B1F;
    --FFText: #f3f3f3;
    --fontColor: #f3f3f3;
    --bgColor: #191b1f;
    --btnBg: #F3F3F3;
    --btnTxt: #191b1f;
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
