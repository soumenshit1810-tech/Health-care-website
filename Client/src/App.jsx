import React from 'react'
import {Route, Routes} from "react-router-dom"

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Doctors from './pages/Doctors'
import Appointments from './pages/Appointments'

function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
          <Route path='/appointments' element={<Appointments/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App