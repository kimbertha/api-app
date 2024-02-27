import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import './styles.scss'


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
)

