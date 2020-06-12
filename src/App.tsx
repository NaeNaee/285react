import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme';
import Routes from './routes';
import { HashRouter } from 'react-router-dom';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Routes />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
