import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.scss';
import App from './App';
import {PokemonsContextProvider} from './Store/PokemonsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PokemonsContextProvider>
      <App />
    </PokemonsContextProvider>
  </React.StrictMode>
);
