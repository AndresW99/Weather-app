import { Container, ThemeProvider } from '@material-ui/core';
import React, { useState } from 'react';
// import './index.css';

import { Cards } from './components/Cards';
import { theme } from './themeConfig';
import { UserContext } from './UserContext';

function WeatherApp() {

  const [guardarClima, setguardarClima ] = useState({
    result: {
      name: 'london',
      sys: {
        country: 'GB',
      },
      weather: [
        {
          main: 'Cloudss'
        }
      ],
      main: {
        temp: 10.0,
        temp_max: 12.00,
        temp_min: 9.00
      }
    }
  });

  const clima = (value) => {

    setguardarClima({ ...guardarClima, result:value })

  }

  return (
  
    <UserContext.Provider value={{ guardarClima, clima }} >
      <ThemeProvider theme={ theme }>
        <Container maxWidth="sm">
          <Cards />
        </Container>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default WeatherApp;