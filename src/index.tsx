import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavoriteContexProvider from './context'

ReactDOM.render(
  <React.StrictMode>
    <FavoriteContexProvider>
      <App />
    </FavoriteContexProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
