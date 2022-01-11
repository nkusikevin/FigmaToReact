import React from 'react'
import NavBar from './components/Navbar/NavBar'
import Hero from './components/HeroSection/Hero'
import About from './components/About/About'
import"./index.css"
function App() {
  return (
    <div className='app'>
      <NavBar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App
