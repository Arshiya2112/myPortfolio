import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import MyProjects from './components/MyProjects/MyProjects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <MyProjects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App