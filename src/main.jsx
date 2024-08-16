import React from 'react'
import ReactDOM from 'react-dom/client'
import HeadDom from './components/headom/'
import Home from './pages/home/index.jsx'
//import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeadDom />
    <Home />
  </React.StrictMode>,
)
