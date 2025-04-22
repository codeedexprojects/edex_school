import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'
import { FiMenu, FiX } from 'react-icons/fi';
import Aos from 'aos';
import 'aos/dist/aos.css'
 import logo from '/src/assets/header.jpg'



function Contact() {
      const [menuOpen, setMenuOpen] = useState(false);
      useEffect(()=>{
Aos.init({duration:"2000",overflow:"hidden"})
      },[])
  
  return (
    <div>
          <nav className="navbar" >
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
      <div className="contact-banner">
        <div className="image">
          <img src="https://i.pinimg.com/736x/4e/db/3b/4edb3b9fa6b417e11bd116d067c78c21.jpg" alt="contact" />
         <div className="contact-content" >
          <h1 data-aos="fade-right">CONTACT US <br />EDEX LIFE <br />SCHOOL</h1>
         </div>
        </div>
      </div>
      <div class="contact-section"data-aos="fade-up">
  <div class="contact-left">
    <h2>We’d Love to Hear from You!</h2>
    <p>Have questions about our programs? Need guidance on admissions? Reach out to us – we’re here to help!</p>

    <div class="contact-info">
  <p><i class="fa-solid fa-phone"></i> +91 12345 12345</p>
  <p><i class="fa-solid fa-envelope"></i> info@edexlifeschool</p>
  <p><i class="fa-solid fa-location-dot"></i> Cherpulassery, Kerala</p>
</div>
  </div>

  <div class="contact-right" data-aos="fade-up">
    <h3>Get a Call Back Now!</h3>
    <p>Fill in your details, and we'll reach out to you shortly.</p>
    <form>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <input type="text" placeholder="Phone Number" required />
      <button type="submit">Send</button>
    </form>
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

export default Contact
