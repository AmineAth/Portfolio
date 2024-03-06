import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Journey from './components/Journey'
import Projects from './components/Projects'
import Footer from './components/Footer'
export default function App() {
   
  return(
    <div>
      <Navbar/>
      <Header/>
      <Journey/>
      <Projects/>
      <Footer/>
    </div>
  )
}