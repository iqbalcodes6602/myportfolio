import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])

const [loading, setLoading] = useState(true)
const spinner = document.getElementById('spinner')
if(spinner){
  setTimeout(()=> {
    spinner.style.display = "none"
    setLoading(false)
  }, 5000)
}

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App;