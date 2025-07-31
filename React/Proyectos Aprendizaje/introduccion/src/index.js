import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './index.css';
import App from './App';
import RotatingButton from './pages/RotatingButton.tsx';
import ConditionalRendering from './pages/ConditionalRendering.tsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
      <nav className='main__nav'>
        <ul>
          <li>
            <Link to={"/"}><i className='bi bi-house-door'></i></Link>
          </li>
          <li>
            <Link to={"/rotating"}>Botón Rotativo</Link>
          </li>
          <li>
            <Link to={"/conditional"}>Renderizado Condicional</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/conditional" element={<ConditionalRendering />} />
        <Route path="/rotating" element={<RotatingButton />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
