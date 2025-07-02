import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from './pages/homepage/Homepage'
import Stories from './pages/storiespage/Stories'
import Footer from './pages/homepage/Footer'
import LoginPage from './pages/logpage/Form'
import Create from './pages/createstorypage/Create'
import Preview from './pages/createstorypage/Preview'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/stories' element={<Stories/>}/>
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/create' element={<Create/>}/>

        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App