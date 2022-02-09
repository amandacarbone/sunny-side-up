import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import OrderContextProvider from './contexts/OrderContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <OrderContextProvider>
    <App />
    </OrderContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);