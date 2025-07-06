import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import './styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Router>
    <App />
  </Router>
);
