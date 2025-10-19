import React from 'react'
import {Route, Routes} from "react-router-dom"

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Doctors from './pages/Doctors'
import Appointments from './pages/Appointments'
import About from './pages/About'
import Contact from './pages/Contact'
import CallNow from './pages/CallNow'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

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
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/callnow' element={<CallNow/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App 
