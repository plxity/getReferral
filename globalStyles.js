import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: Gliroy;
  src: url('/fonts/Gilroy-Light.otf') format("opentype");
}
@font-face {
  font-family: Gliroy;
  src: url('/fonts/Gilroy-ExtraBold.otf') format("opentype");
  font-weight: bold;
}
`;

export default GlobalStyle;
