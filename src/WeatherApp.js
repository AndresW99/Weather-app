import { Container } from '@material-ui/core';
import React from 'react';
import { Cards } from './components/Cards';

function WeatherApp() {
  return (
    <Container maxWidth="sm">
      <Cards />
    </Container>
  );
}

export default WeatherApp;