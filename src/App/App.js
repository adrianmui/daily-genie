import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';

import Firebase, { FirebaseContext } from 'components/Firebase';

import AppBody from './AppBody'

import theme from 'theme';
import store from 'store'

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <FirebaseContext.Provider value={new Firebase()}>
          <AppBody />
        </FirebaseContext.Provider>
        </ReduxProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
