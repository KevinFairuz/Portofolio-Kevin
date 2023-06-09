// MUHAMAD KEVIN FAIRUZ
// IF-9
//10122346

import React from 'react';
import './App.css';
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Work from './components/work/Work.jsx';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';


const App = () => {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Work/>
      <Testimonials/>
      <Contact/>
    </main>
     
     
      <Footer/>
      <Scrollup />
    </>
  )
}

export default App;
