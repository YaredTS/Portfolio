import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingIcons from './components/FloatingIcons'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Skills/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      <FloatingIcons/>
    </div>
  )
}

export default App
