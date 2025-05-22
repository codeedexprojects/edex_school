import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
// import video from "/src/assets/animation.mp4";
import { FiMenu, FiX } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from "/src/assets/header.jpg";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="edexlogo" className="logo" />
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

      <div className="animation">
       <video autoPlay muted playsInline className="background-video">
  <source src="/animation.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

        <div className="home-heading">
          <h1>TRANSFORMING</h1>
          <h1>
            EDUCATION <span className="highlight">INTO</span>
          </h1>
          <h1>EXPERIENCE</h1>
        </div>
        <div className="sub">
          <h3>Learn.</h3>
          <h3>Happy.</h3>
          <h3>Grow.</h3>
        </div>
        <div className="subhead">
          <p data-aos="zoom-in">
            At EDEX Life School, We Believe in Learning By Doing. Our 100-days
            Master Course is designed to make you 1% better everyday, helping you
            bridge the gap between theory and Real-world Application{" "}
          </p>
        </div>
        <div className="btn">
          <button data-aos="zoom-in">Apply Now</button>
        </div>
      </div>
      <div class="batch-section" data-aos="fade-up">
        <div class="batch-left">
          <img
            src="https://img.freepik.com/premium-photo/smiling-teacher-educator-with-glasses-background-class_209864-66.jpg"
            alt="Students"
          />
        </div>
        <div class="batch-right" data-aos="fade-up">
          <div class="batch-card">
            <p class="label">Next Batch Starts</p>
            <h3>June 1st Week</h3>
          </div>
          <div class="batch-card">
            <p class="label">Location:</p>
            <h3>Cherpulassery, Kerala</h3>
          </div>
          <div class="batch-card">
            <p class="label">Batch Start Date:</p>
            <h3>June 1st Week</h3>
          </div>
          <div class="batch-card">
            <p class="label">Admissions Open –</p>
            <h3>Limited Seats Available!</h3>
          </div>
        </div>
      </div>
      <div className="unique" data-aos="zoom-in-up">
        <h1>What makes EDEX unique?</h1>
        <p>
          Discover what sets EDEX Life School apart and how it can transform{" "}
          <br /> your learning experience.
        </p>
      </div>
      <div className="skill-card">
        <div className="card1" data-aos="zoom-in">
          <h3>14 Skills</h3>
          <p>
            Engage in 14 weeks of structured learning for progressive growth and
            industry relevance.
          </p>
        </div>
        <div className="card1" data-aos="zoom-in">
          <h3>
            Immersive Learning <br />
            Experience
          </h3>
          <p>
            Master essential business and professional skills through hands-on
            learning
          </p>
        </div>
        <div className="card1" data-aos="zoom-in">
          <h3>
            Real-Life Business <br />
            Projects
          </h3>
          <p>
            Gain practical experience by working on real business challenges.
          </p>
        </div>
        <div className="card1" data-aos="zoom-in">
          <h3>Expert Talks</h3>
          <p>
            Learn from top industry leaders and successful entrepreneurs during
            14 insightful sessions.
          </p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className="card1"
          data-aos="zoom-in"
          style={{ width: "295px", textAlign: "center", alignItems: "center" }}
        >
          <h3>Strategic Games</h3>
          <p>
            Develop leadership, problem-solving, and negotiation <br />
            skills through high-impact simulations.
          </p>
        </div>
      </div>
    <div className="community">
  <h1>Meet Our Community</h1>
  <p>
    Discover the diverse individuals who have transformed their education{" "}
    <br /> into experience at EDEX Life School.
  </p>

  <div className="coming-soon-box">
    <span className="badge">Coming Soon</span>
    <p className="soon-text">
    Stay tuned to explore inspiring stories from our learners!<br />
      
    </p>
  </div>
</div>
      {/* <div className="img-card">
        <div className="cards" data-aos="flip-left">
          <img
            src="https://voyagehouston.com/wp-content/uploads/2022/08/c-PersonalDanielGarciaPrats__MG6384_1655264614439-1000x600.jpg"
            alt=""
          />
          <h3>Emily Johnson</h3>
          <p>
            A recent graduate eager to gain real-world business exposure and
            develop leadership skills to kickstart her career in the corporate
            world.
          </p>
        </div>
        <div className="cards" data-aos="flip-left">
          <img
            src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?cs=srgb&dl=adult-beach-beard-736716.jpg&fm=jpg"
            alt=""
          />
          <h3>Emily Johnson</h3>
          <p>
            A recent graduate eager to gain real-world business exposure and
            develop leadership skills to kickstart her career in the corporate
            world.
          </p>
        </div>
        <div className="cards" data-aos="flip-left">
          <img
            src="https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg"
            alt=""
          />
          <h3>Emily Johnson</h3>
          <p>
            A recent graduate eager to gain real-world business exposure and
            develop leadership skills to kickstart her career in the corporate
            world.
          </p>
        </div>
      </div> */}
      <div className="list">
        <h2 data-aos="fade-up">Who is this for?</h2>
        <ul>
          <li data-aos="fade-up">Graduate seeking practical experience.</li>
          <li data-aos="fade-up">
            Entrepreneurs aiming to building stronger business acumen.
          </li>
          <li data-aos="fade-up">
            Professionals looking to enhance leadership and decision-making
            skills.
          </li>
          <li data-aos="fade-up">
            Career Fast Trackers who want to accelerate their career growth.
          </li>
        </ul>
      </div>
     <h2 className="focus-heading">Focus Areas</h2>

<div className="card-container">
  <div className="card" data-aos="flip-down">
    <div className="card-number">1</div>
    <div>
      <h3>Mental Development</h3>
      <p>Develop critical thinking, adaptability, and leadership skills.</p>
    </div>
  </div>

  <div className="card" data-aos="flip-down">
    <div className="card-number">2</div>
    <div>
      <h3>Emotional Development</h3>
      <p>Build resilience, empathy, and strong interpersonal skills.</p>
    </div>
  </div>

  <div className="card" data-aos="flip-down">
    <div className="card-number">3</div>
    <div>
      <h3>Physical Development</h3>
      <p>Enhance wellness and energy management.</p>
    </div>
  </div>

  <div className="card" data-aos="flip-down">
    <div className="card-number">4</div>
    <div>
      <h3>Intellectual Development</h3>
      <p>Cultivate creativity, digital fluency, and financial literacy.</p>
    </div>
  </div>
</div>

      <div className="home-banner">
        <div className="home-image">
          <h2>Next Batch Starts Soon</h2>
          <br />
          <h5>Admission Open</h5>
          <br />
          <h5>Limited Seats Available!</h5>
          <br />
          <h5>Location: Cherpulassery, Kerala</h5>
          <br />
          <h5>Batch Start Date: June 1st Week</h5>
          <br />
          <a
            href="https://forms.gle/39rjF6kV9jtHihqH9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button data-aos="zoom-in">Apply Now</button>
          </a>
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
        <li><Link className="text-white" to="/">Home</Link></li>
        <li><Link className="text-white" to="/curiculam">Curriculum</Link></li>
        <li><Link className="text-white" to="/about">About Us</Link></li>
        <li><Link className="text-white" to="/contact">Contact</Link></li>
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

export default Home;
