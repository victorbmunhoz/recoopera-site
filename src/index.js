import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { GlobalStyle } from './styles/GlobalStyle';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
