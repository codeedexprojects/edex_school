
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Curriculam from './pages/Curriculam'
import Scroll from './components/Scroll'


function App() {

  return (
    <>
  <Scroll/>
  
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/curiculam' element={<Curriculam/>}/>
  </Routes>
    </>
  )
}

export default App
