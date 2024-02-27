import React from 'react'
import ReactDOM from 'react-dom/client'
import {  BrowserRouter } from 'react-router-dom'

import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header'
import App from './App'

import './styles.scss'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Header/>
    <Sidebar/>
    <div className='main'>
      <App/>
    </div>
  </BrowserRouter>
)

