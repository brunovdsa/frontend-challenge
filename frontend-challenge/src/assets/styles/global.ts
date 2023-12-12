import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {        
    height: 100%;
    color: ${(props) => props.theme.colors.regular_grey};    
    background: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.font.font_family.roboto};
    }
    
`;
