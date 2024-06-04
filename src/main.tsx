import React from 'react';
import ReactDOM from 'react-dom/client';
import WrappedApp from './App.tsx';
import './globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>
);
