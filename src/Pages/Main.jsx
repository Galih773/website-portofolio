import React from 'react'
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";

const Main = () => {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact/>
    </div>
  )
}

export default Main