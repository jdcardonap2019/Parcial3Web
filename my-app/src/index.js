import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { FormattedMessage } from "react-intl";
import translateSpa from "./translate/spa.json";
import translateEng from "./translate/eng.json";
import { IntlProvider } from "react-intl";

function getBrowserLanguage() {
  return navigator.language || navigator.userLanguage;
}
function language() {
  if (getBrowserLanguage().substring(0, 2) === "es") {
    return translateSpa;
  } else if (getBrowserLanguage().substring(0, 2) === "en") {
    return translateEng;
  }
}
ReactDOM.render(
  <React.StrictMode>
     <IntlProvider
      locale={getBrowserLanguage().substring(0, 2)}
      messages={language()}
    >
    <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
