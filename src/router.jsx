// ROUTER.JSX ================================= //

// MODULES ==================================== //
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


// LAYOUT ===================================== //
import Header from './layout/Header'
import Footer from './layout/Footer'

// PAGES ====================================== //
import Home from './pages/Home'
import About from './pages/About'
import Property from './pages/Property'
import NotFound from './pages/Error'

// RENDER ===================================== //
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path='/about' element={<About />} /> 
      <Route path='/property/:id' element={<Property />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    <Footer />
  </Router>,
)
// END RENDER ================================ //