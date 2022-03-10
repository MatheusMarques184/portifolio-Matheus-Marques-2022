import React, { useState } from 'react';
import GlobalStyle from '../globalStyles';
import { ThemeProvider } from 'styled-components'

import BackToTop from '../components/layout/backtotop/BackToTop';
import About from '../components/layout/content/about/About';
import Contact from '../components/layout/content/contact/Contact';
import Home from '../components/layout/content/home/Home';
import Projects from '../components/layout/content/projects/Projects';
import Skills from '../components/layout/content/skills/Skills';
import Footer from '../components/layout/footer/Footer';
import Header from '../components/layout/header/Header';

const LightTheme = {
  pageBackground: "var(--white-color)",
  gradiantBackground: "linear-gradient(to right bottom,rgba(15, 0, 36, 1) 2%,rgba(9, 50, 121, 1) 53%,rgba(0, 166, 255, 1) 95%)",
  asideBackground: "var(--white-color)",
  colorText:"var(--primary-color)",
  colorIcon:"var(--primary-color)",
  border: "0.1rem solid var(--light-gray-color)",
}

const DarkTheme = {
  pageBackground: "linear-gradient(to right bottom,rgba(0,0,0,1) 1%, rgba(14,1,34,1) 23%, rgba(9,0,32,1) 93%)",
  gradiantBackground: "linear-gradient(to right bottom, rgba(0,0,0,1) 1%, rgba(51,7,7,1) 38%, rgba(9,0,32,1) 80%)",
  asideBackground: "#131313",
  colorText:"var(--white-color)",
  colorIcon:"var(--white-color)",
  border: "0.1rem solid #000000",
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <Header theme={theme} setTheme={setTheme} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <BackToTop />
      <Footer />
    </ThemeProvider>
  )
}

export default App;
