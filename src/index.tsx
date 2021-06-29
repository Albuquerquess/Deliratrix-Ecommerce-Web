import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// CSS
import ResetCSS from './Assets/styles/resetCSS'
import GlobalStyles from './Assets/styles/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <ResetCSS />
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


