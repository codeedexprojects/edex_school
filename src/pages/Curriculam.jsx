import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Curiculam.css'
import { FiMenu, FiX } from 'react-icons/fi';
import Aos from 'aos';
import 'aos/dist/aos.css'
import logo from '/src/assets/header.jpg'

function Curriculam() {
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(()=>{
Aos.init({duration:"2000"});
    },[])
  
  return (
    <div>
             <nav className="navbar">
               <div className="navbar-left">
        <img  src={logo} alt="edexlogo" className='logo' />
               </div>
         
               <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                 {menuOpen ? <FiX size={28} color="white" /> : <FiMenu size={28} color="white" />}
               </div>
         
               <div className={`navbar-right ${menuOpen ? 'open' : ''}`}>
                 <h3><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></h3>
                 <h3><Link to="/curiculam" onClick={() => setMenuOpen(false)}>Curriculam</Link></h3>
                 <h3><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></h3>
                 <h3><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></h3>
               </div>
             </nav>

  <div className="week-content">
  <div className="week-left"  data-aos="fade-left">
    <h1>EDEX LIFE <br />SCHOOL</h1>
    <h2>14-WEEK PROGRAM</h2>
    <p>
      At EDEX Life School, we blend practical learning with real-world <br />
      exposure. Our 100-day Master Course is designed to provide hands- 
      on business and career experience while developing essential life 
      skills.
    </p>
  </div>

  <div className="week-right"  data-aos="fade-right">
    <img
      src="https://s3-alpha-sig.figma.com/img/f6e8/c3e5/4570a178df692e27609600dcc97c6971?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qj4WzfqwuGGCVtyEhU8lw8wDvHexQA9cM3j~7vG-VRH-X-w7K7mq25lp9l40pjj5JXlVLbDF43s4qr9fwOxbfrAkw5jU4yXkUQpTCy~NwZ71PdiHQRfMq7Ggz5FYLwJzNw95B0jrbX~r1JS4Fa21oDOYciNBjqtRFFLmD4VVQVIN1MgkqdBRzB6jfIEgYF6~0nMIBgIsI1UIBp62PDmLDRVqcxdVhFEpdCkKqEEOX0y7VK3bBMCinTRsagkAuYhanWgBa0lLs7Ezv4F53U3MymPYvPLadz2~8lym9leH8kf6rMF6y3OPTctzv5vyQo8w8F4v71frFSEPsGSB-RIppA__"
      alt="EDEX Visual"
    />
  </div>
</div>
<div className="group">
<div class="group-image">
    <img src="https://img.freepik.com/premium-photo/smiling-teacher-educator-with-glasses-background-class_209864-66.jpg" alt="Students" />
  </div>
  <div class="group-right" data-aos="fade-up">
    <div class="group-card" >
      <p class="label">Next Batch Starts</p>
      <h3>May 3, 2025 !</h3>
    </div>
    <div class="group-card">
      <p class="label">Location:</p>
      <h3>Cherpulassery, Kerala</h3>
    </div>
    <div class="group-card">
      <p class="label">Batch Start Date:</p>
      <h3>May 3, 2025</h3>
    </div>
    <div class="group-card">
      <p class="label">Admissions Open –</p>
      <h3>Limited Seats Available!</h3>
    </div>
  </div>
</div>
{/* <hr /> */}
<div className="works">
  <h1  data-aos="zoom-in-up">How It Works</h1>

  <div className="works-section">
    {/* Left Side */}
    <div className="left-works" >
      <div className="sub-works"  data-aos="zoom-in-up">
        <h5>Daily Tasks</h5>
        <p>Boost your progress by 1% everyday</p>
      </div>
      <hr  data-aos="zoom-in-up"/>
      <div className="sub-works"  data-aos="zoom-in-up">
        <h5>Reflection</h5>
        <p>Track growth through your journals and peer feedback</p>
      </div>
    </div>

    {/* Right Side */}
    <div className="right-works">
      <div className="sub-left"  data-aos="zoom-in-up">
        <h5>Expert Session</h5>
        <p>Learn directly from industry leaders</p>
      </div>
      <hr  data-aos="zoom-in-up"/>
      <div className="sub-left"  data-aos="zoom-in-up">
        <h5>Business Visits</h5>
        <p>Gain insight with real-world exposure</p>
      </div>
      <hr  data-aos="zoom-in-up"/>
      <div className="sub-left"  data-aos="zoom-in-up">
        <h5>Interactive Games</h5>
        <p>Develop skills through practical challenges</p>
      </div>
    </div>
  </div>
</div>

<div className="themes">
  <div className="themes-header">
  <h1>Week-by-Week Themes</h1>
  <a href="#" className="view-more">View more</a>
</div>

  <div className="theme-cards-container"  >
<div className="theme-cards" data-aos="flip-right">
  <h2>Week 1: <br />
  Self- <br />Awareness & <br />vision</h2>
  <p> Discover your <br />strengths and set <br />your personal vision.</p>
</div>
<div className="theme-cards" data-aos="flip-right">
  <h2>Week 2: <br />
  Resilience</h2>
  <p> Learn to manage <br /> stress and bounce <br />back from challenges.
  </p>
</div>
<div className="theme-cards"data-aos="flip-right">
  <h2>Week 3: <br />
  Critical <br /> Thinking</h2>
  <p> Practice solving real-<br/> world problems.</p>
</div>
<div className="theme-cards" data-aos="flip-right">
  <h2>Week 4: <br />
  Emotional <br /> Intelligence</h2>
  <p> Enhance your ability <br /> to connect and lead <br /> with empathy.
  </p>
</div>
<div className="theme-cards" data-aos="flip-right">
  <h2>Week 5: <br />
  Creativity</h2>
  <p>Think outside the <br /> box and spark <br /> innovation.</p>
</div>
<div className="theme-cards" data-aos="flip-right">
  <h2>Week 6: <br />
  Entrepreneu-<br />rship</h2>
  <p> Explore what it takes <br /> to start and run a <br /> bussiness.</p>
</div>
<div className="theme-cards" data-aos="flip-right">
  <h2>Week 7: <br />
  Financial <br /> Literacy</h2>
  <p>Understand money <br />management and <br /> basic investing.</p>
</div>
<div className="theme-cards" data-aos="flip-right">
  <h2>Week 8: <br />
  Adaptability</h2>
  <p> Learn to adjust <br /> quickly to new <br /> situations.</p>
</div>
<div className="theme-cards" data-aos="flip-right">
  <h2>Week 9: <br />
  Leadership</h2>
  <p> Develop skills to <br /> guide and inspire <br /> others.</p>
</div>
<div className="theme-cards" data-aos="flip-right">
  <h2>Week 10: <br />
 Communicat-<br />ion</h2>
  <p>Master clear and persuasive <br />communication.</p>
</div>
<div className="theme-cards" data-aos="flip-right">
  <h2>Week 11: <br />
  Collaboration</h2>
  <p>Work effectively in <br /> teams.</p>
</div>
<div className="theme-cards" data-aos="flip-right">
  <h2>Week 12: <br />
  Digital Skills</h2>
  <p>Build fluency in <br /> technology and <br /> digital tools.</p>
</div>
<div className="theme-cards" data-aos="flip-right">
  <h2>Week 13: <br />
  Cultural <br /> Intelligence</h2>
  <p>Embrace global <br />perspective and <br /> diversity.</p>
</div>
<div className="theme-cards" data-aos="flip-right">
  <h2>Week 14: <br />
  Entreprene-<br/>urial Grit</h2>
  <p>Put it all together <br />pitch your project <br />and celebrate your <br />growth.</p>
</div>
</div>
</div>
<div className="four-box">
  <h1>What You Get?</h1>
  <div className="four-content">
    <img data-aos="fade-left" src="https://s3-alpha-sig.figma.com/img/ddb1/9e1f/fce6fc54466149c7e7e1eedb2f63ac1c?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Sv~PyVojHAd3rr15-EA4ThjKkvgwj5A~iid8gynmNb6rPrEZjS1PsjxwKlUJHZZx0SPml19omH2CrYB6O1ME9Rbpe1o3p~AfubHt~3R-suLN2vCqF~-yKPxfQb-~XxFkI~-r~7QBIRkgmGyVX75Xmxpq8I6oIJ2cwY598iY2eKc5RlSScXhI~kVZIHnIDYLOl0rkhruqJ1cx1T0uR3a0vhMpLU2wz3IjJRIx8hKAxpH7hD8OjIQ7oR1ACBIfWpsq7VUt98OIzbSQARZCN4WMlUPGx~Hbd~f1pp9xsWBW5GOGIwLUl60UfzHxYi94UJYa8okaAlpf5acFevwv~m6zhA__"alt="Graduate" className="four-image" />
    
    <div className="four-grid">
      <div className="four-container" data-aos="zoom-out-right">
        <h3>Real-World <br />Experience</h3>
        <p>Expert talks and business visits every <br /> week.</p>
      </div>
      <div className="four-container" data-aos="zoom-out-left">
        <h3>Ongoing Support</h3>
        <p>Daily tasks, progress tracking, and <br /> Peer feedback.</p>
      </div>
      <div className="four-container" data-aos="zoom-out-right">
        <h3>Fun Challenges</h3>
        <p>Interactive games that reinforce what<br />you learn.</p>
      </div>
      <div className="four-container" data-aos="zoom-out-left">
        <h3>Financial Showcase</h3>
        <p>Pitch your project to real investors.</p>
      </div>
    </div>
  </div>
</div>
<div className="connect-home">
  <div className="connect-image">
<h2>Talk to our expert</h2>
<p>Schedule a call with our expert to learn more about the course you're willing to join</p>

<div className="form-container">
  <input type="text" placeholder="Name" />
  <input type="text" placeholder="Email" />
  <input type="text" placeholder="Phone no" />
  <button>Request a Callback</button>
</div>
 </div>
</div>
<footer className="footer">
  <div className="footer-container">
    {/* Column 1: Logo + Slogan + Socials */}
    <div className="footer-column">
      <h2 className="logo">Edex <span className="sub-logo">Life School</span></h2>
      <p className="slogan">Learn. Apply. Grow.</p>
      <div className="social-icons">
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-whatsapp"></i>
            </div>
    </div>

    {/* Column 2: Quick Links */}
    <div className="footer-column">
      <h4>Quick Links</h4>
      <ul>
        <li>Home</li>
        <li>Curriculum</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
    </div>

    {/* Column 3: Address & Contact */}
    <div className="footer-column">
      <h4>Address</h4>
      <p>Cherpulassery, Kerala</p>
      <h4>Phone & mail</h4>
      <p>+91 12345 12345</p>
      <p>info@edexlifeschool</p>
    </div>

    {/* Column 4: Newsletter */}
    <div className="footer-column">
      <h4>Newsletter</h4>
      <p className="newsletter-text">
        Sign up today and become part of a thriving wedding planning community. Enter your email below to subscribe!
      </p>
      <input type="email" placeholder="Email address" />
      <button>Subscribe</button>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Curriculam
