import styled, { createGlobalStyle } from "styled-components";

const StyledFooter = styled.footer`
  background: #212529;
  color: white;
`;
const StyledPar = styled.p`
  margin: 0 0 0 0 !important;
`;
const StyledParagraphFont = styled.p`
  color: #f2f2f2;
  font-size: 1.1rem;
`;
const StyledHeadingFont = styled.h2`
  text-align: center;
  color: #f2f2f2;
`;


const GlobalStyle = createGlobalStyle`
  p {
    color:  #F2F2F2;
  font-size: 1rem !important;
  font-family: 'Noto Sans', sans-serif;
  }

  h1, h2, h3, h4, h5 {
    color:  #F2F2F2;
    text-align: center;
    font-family: 'Noto Serif', serif;
  }
  
  // @media (min-width: 576px) {
  //   p {
  //     font-size: 24px;
  //   } 
  // }
  
  // @media screen and (min-width: 769px) {
  //   p {
  //     font-size: 32px;
  //   }
`;

export { StyledFooter, StyledPar, StyledHeadingFont, GlobalStyle };
