import React, { ReactNode, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import GlobalStyle from '../../assets/styles/global';
import light from '../../theme/theme';

import { Container } from './styles';

interface MainContainerProps {
  children: ReactNode;

  style?: React.CSSProperties;
}

export function MainContainer(props: MainContainerProps) {
  const [theme] = useState<DefaultTheme>(light);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        {props.children}
      </Container>
    </ThemeProvider>
  );
}
