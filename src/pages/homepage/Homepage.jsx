import React from 'react'
import Nav from './Nav'
import Header from './Header'
import Portfolio from './Portfolio'
import Stories from './Stories'
import AboutMe from './AboutMe'
import GetInTouch from './GetInTouch'
import Footer from './Footer'

const Homepage = () => {
  return (
    <div>
        <Nav/>
        <Header/>
        <Portfolio/>
        <Stories/>
        <AboutMe/>
        <GetInTouch/>
    </div>
  )
}

export default Homepage