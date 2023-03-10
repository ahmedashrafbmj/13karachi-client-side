import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import { hydrate, render } from "react-dom";


import App from './App';

// // ReactDOM.render(

  

// // <App />, 
// // document.getElementById("root")
  
// );

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}