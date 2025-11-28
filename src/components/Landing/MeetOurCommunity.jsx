import React, { useRef, useState, useEffect } from "react";

import bubble from "../../assets/MeetOurCommunity/bubble arrow.png";
import badgeBlack from "../../assets/MeetOurCommunity/badge.png";
import badgeWhite from "../../assets/MeetOurCommunity/badgewhite.png";
import ambras from "../../assets/MeetOurCommunity/ambras.jpg";
import Arjun from "../../assets/MeetOurCommunity/Arjun.png";
import Mustafa from "../../assets/MeetOurCommunity/Mustafa.jpg";
import Rafeeq from "../../assets/MeetOurCommunity/Rafeeq.jpg";
import Najiya from "../../assets/MeetOurCommunity/najiya.jpg";

const people = [
  {
    name: "Ambras",
    quote:
      "Great mentors don't just teach business—they inspire leaders to create, innovate, and transform industries.",
    img: ambras,
  },
  {
    name: "Arjun K",
    quote:
      "Great mentors don't just teach business — they inspire leaders to create, innovate, and transform industries.",
    img: Arjun,
  },
  {
    name: "Muhammed Musthafa",
    quote:
      "True guidance helps you turn challenges into opportunities and ideas into impactful business realities.",
    img: Mustafa,
  },
  {
    name: "Muhammed Rafeeq",
    quote:
      "A mentor lights the path where knowledge meets experience and ambition meets success.",
    img: Rafeeq,
  },
  {
    name: "Najiya Nasrin",
    quote:
      "Business wisdom is best learned from those who've lived, failed, and risen again.",
    img: Najiya,
  },
];

// -----------------------------------------------------------------------------
// CARD COMPONENT - RESPONSIVE WITH INCREASED WIDTH
// -----------------------------------------------------------------------------
function Card({ person }) {
  return (
    <div className="group relative bg-white text-black rounded-3xl 
      min-w-[320px] sm:min-w-[360px] md:min-w-[400px] lg:min-w-[420px]
      h-[500px] sm:h-[550px] md:h-[580px] lg:h-[600px]
      overflow-hidden rounded-b-4xl 
      transition-all duration-500 hover:shadow-2xl flex flex-col">

      {/* Text Section - Fixed height */}
      <div className="hover:bg-[#D4FF24] ">
        <div className="
          flex-shrink-0 
          p-4 sm:p-5 md:p-6 lg:p-7
          h-[180px] sm:h-[190px] md:h-[200px]
          transition-all duration-500 
          lg:group-hover:scale-90 lg:group-hover:origin-top
        ">
          {/* Name */}
          <h1 className="
            font-bold lufga-bold
            text-xl sm:text-2xl md:text-3xl lg:text-4xl
            leading-tight w-50 mb-2
            transition-all duration-500 origin-top-left
            group-hover:text-lg
            sm:group-hover:text-xl
            md:group-hover:text-2xl
            lg:group-hover:text-2xl
          ">
            {person.name}
          </h1>

          {/* Quote */}
         <p
  className="
    flex-grow
    lufga
    mt-2 sm:mt-4 tracking-tight
    text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl
    opacity-100
    transition-all duration-500 origin-top-left
    group-hover:text-[10px] 
    sm:group-hover:text-sm 
    md:group-hover:text-sm 
    lg:group-hover:text-base
  "
>
  "{person.quote}"
</p>

        </div>

        {/* Badges */}
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5 md:top-6 md:right-6 z-10">
          <img
            src={badgeBlack}
            className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full transition-opacity duration-300 group-hover:opacity-0"
            alt="Badge"
          />
          <img
            src={badgeWhite}
            className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 absolute rounded-full inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-100"
            alt="Badge Hover"
          />
        </div>

      {/* Image Section - Flexible height that fills remaining space */}
      <div className="flex-1 relative min-h-[320px] sm:min-h-[360px] md:min-h-[380px] lg:min-h-[400px] rounded-b-3xl">
        <img
          src={person.img}
          alt={person.name}
          className="
            w-full h-full object-cover object-top
            rounded-t-4xl mt-3
            transition-transform duration-700 ease-out 
            transform-gpu origin-bottom
            group-hover:scale-105
          "
        />
      </div>
            </div>

    </div>
  );
}

// -----------------------------------------------------------------------------
// MAIN COMPONENT
// -----------------------------------------------------------------------------
export default function Community() {
  const scrollRef = useRef(null);
  const [canScrollMore, setCanScrollMore] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollMore(scrollLeft + clientWidth < scrollWidth - 20);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      checkScroll();
      scrollContainer.addEventListener("scroll", checkScroll);
      return () => scrollContainer.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const goToNextCard = () => {
    if (scrollRef.current) {
      const cardWidth = window.innerWidth < 640 ? 320 : 
                        window.innerWidth < 768 ? 360 : 
                        window.innerWidth < 1024 ? 400 : 420;
      scrollRef.current.scrollBy({ left: cardWidth + 32, behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="max-w-full mx-auto px-2 sm:px-5 md:px-8 lg:px-30 xl:px-20 py-10 sm:py-12 md:py-16 lg:py-20">
        {/* Scroll Button */}
        <button
          onClick={goToNextCard}
          className={`
            absolute right-4 sm:right-6 md:right-8 lg:right-12 xl:right-20
            top-8 sm:top-12 md:top-16 lg:top-24
            w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 lg:w-16 lg:h-16
            rounded-full flex items-center justify-center 
            backdrop-blur-md z-30 transition-opacity duration-300
            ${canScrollMore ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
        >
          <img
            src={bubble}
            className="absolute inset-0 w-full h-full object-cover rounded-full"
            alt="Scroll"
          />
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white z-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <line x1="7" y1="12" x2="17" y2="12" />
            <polyline points="12 7 17 12 12 17" />
          </svg>
        </button>

<div
  className="
    pl-4 xs:pl-5 sm:pl-6 md:pl-8 lg:pl-10 xl:pl-14
    pr-6 xs:pr-8 sm:pr-10 md:pr-14 lg:pr-20 xl:pr-28
  "
>
  {/* Title */}
  <h1
    className="
      font-bold lufga-bold tracking-tight 
      text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
      leading-tight sm:leading-snug
      mb-3 sm:mb-4 md:mb-5 lg:mb-6
    "
  >
    Meet Our Community
  </h1>

  {/* Subtitle */}
  <p
    className="
      max-w-4xl 
      text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
      font-light lufga-light
      leading-relaxed md:leading-relaxed
      opacity-100
      mb-8 sm:mb-10 md:mb-12 lg:mb-14
    "
  >
    Discover the diverse individuals who have transformed their education
    into real-world experience at EDEX Life School.
  </p>
</div>


        {/* Horizontal Scrolling Cards */}
       <div
  ref={scrollRef}
  className="
    flex 
    gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 
    overflow-x-auto 
    snap-x snap-mandatory 
    scrollbar-hide 
    scroll-smooth 

    /* Bottom padding */
    pb-4 xs:pb-5 sm:pb-6 md:pb-8 lg:pb-10

    /* NEW Right & Left responsive padding */
    pr-6 xs:pr-8 sm:pr-10 md:pr-14 lg:pr-20 xl:pr-28
    pl-4 xs:pl-5 sm:pl-6 md:pl-8 lg:pl-10 xl:pl-14
  "
>


          {people.map((person, i) => (
            <Card key={i} person={person} />
          ))}
        </div>

        {/* Fade Right Effect */}
      </div>
    </section>
  );
}