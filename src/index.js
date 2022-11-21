import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import { DataBaseProvider } from './context/DatabaseProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <DataBaseProvider>
        <App />
      </DataBaseProvider>
    </AuthProvider>
  </BrowserRouter>
);

