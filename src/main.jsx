import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';

// Store
import { CartContextProvider } from '@store';

import App from './App.jsx';

const rootSelector = document.getElementById('root');
const root = ReactDOM.createRoot(rootSelector);

root.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>,
);
