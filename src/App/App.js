import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import Firebase, { FirebaseContext } from 'components/Firebase';

import AppBody from './AppBody'
import theme from 'theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <FirebaseContext.Provider value={new Firebase()}>
          <AppBody />
        </FirebaseContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
