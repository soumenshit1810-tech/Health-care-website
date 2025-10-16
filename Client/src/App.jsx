import React from 'react'
import {Route, Routes} from "react-router-dom"

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'

function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App