import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/App.css';
import App from './App';
import { ThemeProvider, CSSReset } from "@chakra-ui/react";
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider>
        <CSSReset />
        <Router>
          <App />
        </Router>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



