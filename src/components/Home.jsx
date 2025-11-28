import React from 'react'
import Header from './Header'
import HeroSection from './Landing/HeroSection'
import BannerPage from './Landing/BannerPage'
import Cards from './Landing/Cards'
import MeetOurCommunity from './Landing/MeetOurCommunity'
import LifeAtEdex from './Landing/LifeAtEdex'
import WhoIsThisFor from './Landing/WhoIsthisfor'
import FocusAreas from './Landing/Focusarea'
import Footer from './Footer'

const Home = () => {
  return (
    <div > 
    <Header/>
    <HeroSection/>
    <BannerPage/>
    <Cards/>
    <MeetOurCommunity/>
    <LifeAtEdex/>
    <WhoIsThisFor/>
    <FocusAreas/>
    <Footer/>

   </div>
  )
}

export default Home