import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/footer-logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-black text-white py-14 px-6 sm:px-10 md:px-14 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-14">

  {/* Logo + Social Icons */}
  <div className="flex flex-col items-center md:items-start text-center md:text-left">
    <img
  src={logo}
  alt="Edex Life School Logo"
  className="
    w-20        /* very small screens (smaller than 360px) */
    xs:w-15     /* small phones */
    sm:w-20     /* normal phones */
    md:w-25     /* tablets */
    lg:w-30     /* laptops */
    xl:w-35     /* large desktops */
    object-contain
  "
/>

    <p className="lufga text-base sm:text-lg md:text-sm px-2 mt-3 text-center whitespace-nowrap">
      Learn. Apply. Grow.
    </p>

    <div className="flex gap-6 sm:gap-8 text-xl sm:text-2xl mt-6 justify-center md:justify-start">
      <a href="#"><FaFacebookF className="hover:text-[#D1FF22] transition" /></a>
      <a href="#"><FaInstagram className="hover:text-[#D1FF22] transition" /></a>
      <a href="#"><FaWhatsapp className="hover:text-[#D1FF22] transition" /></a>
    </div>
  </div>

  {/* Quick Links */}
  <div className="text-center md:text-left lufga">
    <h3 className="text-lg sm:text-xl mb-4 ">Quick Links</h3>

    <ul className="space-y-2 text-gray-300 text-base sm:text-lg ">
      <li><Link to="/home" className="hover:text-[#D1FF22]">Home</Link></li>
      <li><Link to="/curiculum" className="hover:text-[#D1FF22]">Curriculum</Link></li>
      <li><Link to="/about" className="hover:text-[#D1FF22]">About Us</Link></li>
      <li><Link to="/contact" className="hover:text-[#D1FF22]">Contact</Link></li>
    </ul>
  </div>

  {/* Address */}
  <div className="text-center md:text-left lufga">
    <h3 className="text-lg sm:text-xl font-semibold mb-3">Address</h3>
    <p className="text-gray-300 text-sm sm:text-base">Cherpulassery, Kerala</p>

    <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">Phone & Mail</h3>
    <p className="text-gray-300 text-sm sm:text-base">+91 12345 12345</p>
    <p className="text-gray-300 text-sm sm:text-base">info@edexlifeschool</p>
  </div>

  {/* Newsletter */}
  <div className="text-center md:text-left lufga">
    <h3 className="text-lg sm:text-xl font-semibold mb-4">Newsletter</h3>

    <p className="text-gray-300 text-sm sm:text-base mb-6">
      Be the first to know about school events, new courses, and exclusive updates.
    </p>

    <input
      type="email"
      placeholder="Email address"
      className="
        w-full bg-white text-black px-3 sm:px-4 py-2.5 sm:py-3 
        rounded outline-none focus:ring-2 focus:ring-[#D1FF22]
        text-sm sm:text-base
      "
    />

    <button
      className="
        w-full bg-white text-black font-semibold 
        mt-4 py-2.5 sm:py-3 rounded
        hover:bg-[#D1FF22] hover:text-black 
        transition text-sm sm:text-base
      "
    >
      Subscribe
    </button>
  </div>

</div>


      {/* Bottom Line */}
      <div className="w-full h-[1px] bg-gray-700 mt-14"></div>
    </footer>
  );
}

export default Footer;
