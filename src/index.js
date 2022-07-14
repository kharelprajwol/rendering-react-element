import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const element = <h1>Welcome!</h1> // Creating React Element

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {element}, {/* rendering react element via variable but we can also directly render JSX*/}
    <h1>Welcome Again!</h1>
    <App /> {/*Rendering Component */}
  </React.StrictMode>
);
