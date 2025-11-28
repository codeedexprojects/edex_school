
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react';
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import About from './pages/About'
import Contact from './pages/Contact'
import Curriculam from './pages/Curriculam'
import Scroll from './components/Scroll'
import HeroSection from './components/Landing/HeroSection'
import Header from './components/Header'
import Home from './components/Home'


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);



  return (
    <>
      <Scroll />

      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/curiculam' element={<Curriculam />} />
        <Route path='/home' element={<Home/>} />
       

      </Routes>
    </>
  )
}

export default App
