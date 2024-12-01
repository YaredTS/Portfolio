import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import About from './components/About'
import FloatingIcons from './components/FloatingIcons'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Skills/>
      <About/>
      <Projects/>
      <Contact/>
      <FloatingIcons/>
      <Footer/>
    </div>
  )
}

export default App
