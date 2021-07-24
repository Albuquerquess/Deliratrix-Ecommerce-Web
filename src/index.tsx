import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// CSS
import ResetCSS from './Assets/styles/resetCSS'
import GlobalStyles from './Assets/styles/globalStyles';

// React-loader-spinner style
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ResetCSS />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


