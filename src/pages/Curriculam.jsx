import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Curiculam.css";
import { FiMenu, FiX } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from "/src/assets/header.jpg";
import frontimage from '/src/assets/graduate.png'
import manImage from '/src/assets/man.png'


function Curriculam() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    Aos.init({ duration: "2000" });
  }, []);

  return (
    <div>
      <nav className="navbar">
             <div className="navbar-left">
         <Link to="/">
           <img src={logo} alt="edexlogo" className="logo" />
         </Link>
       </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FiX size={28} color="white" />
          ) : (
            <FiMenu size={28} color="white" />
          )}
        </div>

        <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
          <h3>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </h3>
          <h3>
            <Link to="/curiculam" onClick={() => setMenuOpen(false)}>
              Curriculum
            </Link>
          </h3>
          <h3>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </h3>
          <h3>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </h3>
        </div>
      </nav>

      <div className="week-content" style={{paddingTop:"200px"}}>
        <div className="week-left" data-aos="fade-left">
          <h1>
            EDEX LIFE <br />
            SCHOOL
          </h1>
          <h2>14-WEEK PROGRAM</h2>
          <p style={{fontSize:"30px",fontWeight:"bold"}}>
            Our Mission:
            <br />
            </p>
            <p>
           Empower students to grow 1% every day-mentally, emotionally, physically, and intellectually— through hands-on, practical learning.
          </p>
        </div>

        <div className="week-right" data-aos="fade-right">
          <img
            src={frontimage}
            alt="EDEX Visual"
          />
        </div>
      </div>
      <div className="group">
        <div class="group-image">
          <img
            src="https://img.freepik.com/premium-photo/smiling-teacher-educator-with-glasses-background-class_209864-66.jpg"
            alt="Students"
          />
        </div>
        <div class="group-right" data-aos="fade-up">
          <div class="group-card">
            <p class="label">Next Batch Starts</p>
            <h3>June 1st Week</h3>
          </div>
          <div class="group-card">
            <p class="label">Location:</p>
            <h3>Cherpulassery, Kerala</h3>
          </div>
          <div class="group-card">
            <p class="label">Batch Start Date:</p>
            <h3>June 1st Week</h3>
          </div>
          <div class="group-card">
            <p class="label">Admissions Open –</p>
            <h3>Limited Seats Available!</h3>
          </div>
        </div>
      </div>
      {/* <hr /> */}
      <div className="works">
        <h1 data-aos="fade-up">How It Works</h1>

        <div className="works-section">
          {/* Left Side */}
          <div className="left-works">
            <div className="sub-works">
              <h5 data-aos="fade-up">Daily Tasks</h5>
              <p data-aos="fade-up">Boost your progress by 1% every day.</p>
            </div>
            <hr data-aos="fade-up" />
            <div className="sub-works">
              <h5 data-aos="fade-up">Reflection</h5>
              <p data-aos="fade-up">
                Track growth through your journals and peer feedback.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="right-works">
            <div className="sub-left">
              <h5 data-aos="fade-up">Expert Session</h5>
              <p data-aos="fade-up">Learn directly from industry leaders.</p>
            </div>
            <hr data-aos="fade-up" />
            <div className="sub-left">
              <h5 data-aos="fade-up">Business Visits</h5>
              <p data-aos="fade-up">Gain insight with real-world exposure.</p>
            </div>
            <hr data-aos="fade-up" />
            <div className="sub-left">
              <h5 data-aos="fade-up">Interactive Games</h5>
              <p data-aos="fade-up">
                Develop skills through practical challenges.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="themes">
        <div className="themes-header">
          <h1>Week-by-Week Themes</h1>
          <a href="#" className="view-more">
            View more
          </a>
        </div>

        <div className="theme-cards-container">
          <div className="theme-cards" data-aos="flip-right">
            <h2>
              Week 1: <br />
              Self- <br />
              Awareness & <br />
              vision
            </h2>
            <p>
              {" "}
              Discover your <br />
              strengths and set <br />
              your personal vision.
            </p>
          </div>
          <div className="theme-cards" data-aos="flip-right">
            <h2>
              Week 2: <br />
              Resilience
            </h2>
            <p>
              {" "}
              Learn to manage <br /> stress and bounce <br />
              back from challenges.
            </p>
          </div>
          <div className="theme-cards" data-aos="flip-right">
            <h2>
              Week 3: <br />
              Critical <br /> Thinking
            </h2>
            <p>
              {" "}
              Practice solving real-
              <br /> world problems.
            </p>
          </div>
          <div className="theme-cards" data-aos="flip-right">
            <h2>
              Week 4: <br />
              Emotional <br /> Intelligence
            </h2>
            <p>
              {" "}
              Enhance your ability <br /> to connect and lead <br /> with
              empathy.
            </p>
          </div>
          <div className="theme-cards" data-aos="flip-right">
            <h2>
              Week 5: <br />
              Creativity
            </h2>
            <p>
              Think outside the <br /> box and spark <br /> innovation.
            </p>
          </div>
          <div className="theme-cards" data-aos="flip-right">
            <h2>
              Week 6: <br />
              Entrepreneu-
              <br />
              rship
            </h2>
            <p>
              {" "}
              Explore what it takes <br /> to start and run a <br /> business.
            </p>
          </div>
          <div className="theme-cards" data-aos="flip-right">
            <h2>
              Week 7: <br />
              Financial <br /> Literacy
            </h2>
            <p>
              Understand money <br />
              management and <br /> basic investing.
            </p>
          </div>
          <div className="theme-cards" data-aos="flip-right">
            <h2>
              Week 8: <br />
              Adaptability
            </h2>
            <p>
              {" "}
              Learn to adjust <br /> quickly to new <br /> situations.
            </p>
          </div>
          <div className="theme-cards" data-aos="flip-right">
            <h2>
              Week 9: <br />
              Leadership
            </h2>
            <p>
              {" "}
              Develop skills to <br /> guide and inspire <br /> others.
            </p>
          </div>
          <div className="theme-cards" data-aos="flip-right">
            <h2>
              Week 10: <br />
              Communicat-
              <br />
              ion
            </h2>
            <p>
              Master clear and persuasive <br />
              communication.
            </p>
          </div>
          <div className="theme-cards" data-aos="flip-right">
            <h2>
              Week 11: <br />
              Collaboration
            </h2>
            <p>
              Work effectively in <br /> teams.
            </p>
          </div>
          <div className="theme-cards" data-aos="flip-right">
            <h2>
              Week 12: <br />
              Digital Skills
            </h2>
            <p>
              Build fluency in <br /> technology and <br /> digital tools.
            </p>
          </div>
          <div className="theme-cards" data-aos="flip-right">
            <h2>
              Week 13: <br />
              Cultural <br /> Intelligence
            </h2>
            <p>
              Embrace global <br />
              perspective and <br /> diversity.
            </p>
          </div>
          <div className="theme-cards" data-aos="flip-right">
            <h2>
              Week 14: <br />
              Entreprene-
              <br />
              urial Grit
            </h2>
            <p>
              Put it all together <br />
              pitch your project <br />
              and celebrate your <br />
              growth.
            </p>
          </div>
        </div>
      </div>
      <div className="four-box">
        <h1>What You Get?</h1>
        <div className="four-content">
          <img
            data-aos="fade-left"
            src={manImage}
            alt="Graduate"
            className="four-image"
          />

          <div className="four-grid">
            <div className="four-container" data-aos="zoom-out-right">
              <h3>
                Real-World <br />
                Experience
              </h3>
              <p>
                Expert talks and business visits every <br /> week.
              </p>
            </div>
            <div className="four-container" data-aos="zoom-out-left">
              <h3>Ongoing Support</h3>
              <p>
                Daily tasks, progress tracking, and <br /> Peer feedback.
              </p>
            </div>
            <div className="four-container" data-aos="zoom-out-right">
              <h3>Fun Challenges</h3>
              <p>
                Interactive games that reinforce what
                <br />
                you learn.
              </p>
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
          <p>
            Schedule a call with our expert to learn more about the course
            you're willing to join
          </p>

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
            <h2 className="logo">
              Edex <span className="sub-logo">Life School</span>
            </h2>
            <p className="slogan">Learn. Apply. Grow.</p>
            <div className="social-icons">
               <a
                href="https://youtube.com/@edexlifeschool?si=rUOWcRAm65NArbXa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube text-white"></i>
              </a>
              <a
                href="https://www.instagram.com/edex_life_school?igsh=MXV2MGp6cnk3d25waw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram text-white"></i>
              </a>
              <a
                href="https://wa.me/+919656439246"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp text-white"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
               <h4>Quick Links</h4>
               <ul >
                 <li><Link className="text-white" style={{textDecoration:"none"}} to="/">Home</Link></li>
                 <li><Link className="text-white" style={{textDecoration:"none"}}  to="/curiculam">Curriculum</Link></li>
                 <li><Link className="text-white" style={{textDecoration:"none"}} to="/about">About Us</Link></li>
                 <li><Link className="text-white" style={{textDecoration:"none"}} to="/contact">Contact</Link></li>
               </ul>
             </div>

          {/* Column 3: Address & Contact */}
           <div className="footer-column">
            <h4>Address</h4>
            <p>Cherpulassery, Kerala</p>
            <h4>Phone & mail</h4>
            <p>+91 96564 39246</p>
            <p>+918891719496</p>
            <p>info@edexlifeschool</p>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-column">
            <h4>Newsletter</h4>
            <p className="newsletter-text">
             Be the first to know about school events, new courses, and exclusive updates.
            </p>
            <input type="email" placeholder="Email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Curriculam;
