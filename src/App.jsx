import React from 'react'
import Experience from './components/experience/Experience'
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Services from './components/services/services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Nav />   
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  ) 
}

export default App