import React, { useEffect, useState } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import circleImage from "/src/assets/anime.jpg";
import { FiMenu, FiX } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from "/src/assets/header.jpg";

function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    Aos.init({ duration: "2000" });
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
              Curriculam
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

      <div
        className="background-fade"
        style={{
          backgroundImage: `url(${circleImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay">
          <div className="about-left" data-aos="zoom-out-up">
            <h1>ABOUT</h1>
            <h1>
              <span className="color">EDEX LIFE</span>
            </h1>
            <h1>
              <span className="color">SCHOOL</span>
            </h1>
          </div>
          <div className="about-right">
            <div className="about-text">
              <p className="main-quote" data-aos="zoom-out-up">
                Where 1% daily growth leads to <br />
                100% transformational change
              </p>
              <p className="sub-text" data-aos="zoom-out-up">
                At EDEX Life School, we believe greatness is built day by day.
                We're a 14-Week immersive academy designed to equip you with the
                skills, mindset, and grit needed to thrive in today's
                unpredictable world.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about">
        <h3 className="sec" data-aos="zoom-in-up">
          Who We Are
        </h3>
        <p data-aos="zoom-in-up">
          We're more than academy-we're a community of educators, entrepreneurs,
          and innovatiors passionate about real-world learning. Our program goes
          beyond textbooks by emphasizing practical experiences.hands-on
          challenges, and mentorship from industry experts.
        </p>
      </div>
      <div className="pillar">
        <h4 data-aos="zoom-in-up">
          We nurture growth across four key pillars:
        </h4>
      </div>
      <div class="card-container">
        <div
          class="card"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div class="card-number">1</div>
          <div>
            <h3>Mental Development</h3>
            <p>
              Develop critical thinking, adaptability, and leadership skills.
            </p>
          </div>
        </div>

        <div
          class="card"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div class="card-number">2</div>
          <div>
            <h3>Emotional Development</h3>
            <p>Build resilience, empathy, and strong interpersonal skills.</p>
          </div>
        </div>

        <div
          class="card"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div class="card-number">3</div>
          <div>
            <h3>Physical Development</h3>
            <p>Enhance wellness and energy management.</p>
          </div>
        </div>

        <div
          class="card"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div class="card-number">4</div>
          <div>
            <h3>Intellectual Development</h3>
            <p>
              Cultivate creativity, digital fluency, and financial literacy.
            </p>
          </div>
        </div>
      </div>
      <div className="mission">
        <h3 data-aos="zoom-in-down">Our Mission</h3>
        <p data-aos="zoom-in-down">
          Our mission is simple empower you to become a T-shaped professional.
          We help you master <br />
          your core passion while broadening your skills across multiple
          disciplins-preparing you to lead in yourcareer, entrepreneurship, and
          life .
        </p>
      </div>
      <div className="choose">
        <h1>Why Choose EDEX?</h1>
      </div>
      <div className="box">
        <div className="box-section" data-aos="flip-up">
          <h5>1%Better Every Day</h5>
          <p>
            Small,consistent improvements add upto <br />
            transformative results.
          </p>
        </div>
        <div className="box-section" data-aos="flip-up">
          <h5>Real-World Learning</h5>
          <p>
            Enjoy 90%practical training through expert
            <br />
            sessions, business visits, and interactive <br />
            challenges.
          </p>
        </div>
        <div className="box-section" data-aos="flip-up">
          <h5>Holistic Development</h5>
          <p>
            We nurture mind, body, and spirit to shape well- <br />
            rounded future-ready leaders.
          </p>
        </div>
      </div>
      <div className="divide">
        <div className="one-section" data-aos="flip-down">
          <h5>Our Story</h5>
          <p>
            Born from the belief the education shouldBorn from the belief that
            education should prepare you for life—not just exams— EDEX Life
            School was founded by a team of educators, entrepreneurs, and
            behavioral scientists. Since our inception, we’ve reimagined
            learning as a daily adventure, empowering hundreds of students to
            unlock their potential, launch startups, and secure dream roles at
            leading companies.
          </p>
        </div>
        <hr />
        <div className="two-section" data-aos="flip-down">
          <h5>
            Join the
            <br />
            Movement
          </h5>
          <p>
            Whether you aspire to be a future CEO, creative innovator, or tech
            pioneer, EDEX Life School is your launchpad for success. Here,
            you’ll gain 14 future-proof skills, a portfolio of real projects,
            and a network of mentors who are ready to support you every step of
            the way.
          </p>
        </div>
      </div>
      <div className="banner">
        <div className="image-banner">
          <img
            src="https://img.freepik.com/premium-photo/green-background-with-green-background-that-says-word-it_745528-2406.jpg"
            alt="banner"
          />
          <div className="banner-content">
            <h2>Ready To Transform Your Future?</h2>
            <button data-aos="zoom-out">View More</button>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* Column 1: Logo + Slogan + Socials */}
          <div className="footer-column">
            <h2 className="logo">
              Edex <span className="sub-logo">Life School</span>
            </h2>
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
              Sign up today and become part of a thriving wedding planning
              community. Enter your email below to subscribe!
            </p>
            <input type="email" placeholder="Email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
