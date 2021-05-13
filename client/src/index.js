import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/App.css';
import App from './App';
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <ChakraProvider>
    <CSSReset />
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);



