import { createGlobalStyle } from "styled-components"
import * as fonts from "../fonts"

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Macho Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Macho Regular'), url('${fonts.MachoRegular}') format('truetype');
  }

  @font-face {
    font-family: 'Macho Medium';
    font-style: normal;
    font-weight: normal;
    src: local('Macho Medium'), url('${fonts.MachoMedium}') format('truetype');
  }

  @font-face {
    font-family: 'Macho SemiBold';
    font-style: normal;
    font-weight: 500;
    src: local('Macho SemiBold'), url('${fonts.MachoSemiBold}') format('truetype');
  }

  @font-face {
    font-family: 'Macho SemiBoldItalic';
    font-style: italic;
    font-weight: 500;
    src: local('Macho SemiBold'), url('${fonts.MachoSemiBoldItalic}') format('truetype');
  }

  body {
    background-color: ${props => (props.theme === "default" ? "#F6F6F6" : "white")};
    margin: 0;
  }

  main {
    background-image: url('/images/hero-bg.png');
    background-repeat: no-repeat;
    background-size: 100% 63%;
    min-height: 900px;
    max-height: 1200px;
    width: 100%;
  }
`