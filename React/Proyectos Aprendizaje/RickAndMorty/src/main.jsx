import React, { StrictMode } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'

import MainPage from './pages/MainPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* Aquí puedes agregar más rutas según sea necesario */}
      </Routes>
    </Router>
  </StrictMode>,
)
