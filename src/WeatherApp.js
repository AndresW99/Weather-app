import { Container, ThemeProvider } from '@material-ui/core';
import React from 'react';
// import './index.css';

import { Cards } from './components/Cards';
import { theme } from './themeConfig';

function WeatherApp() {
  return (
    
    <ThemeProvider theme={ theme }>
      <Container maxWidth="sm">
        <Cards />
      </Container>
    </ThemeProvider>
  );
}

export default WeatherApp;