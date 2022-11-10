import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Service from './components/service/Service'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Testimonials from './components/testimonials/Testimonials'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App