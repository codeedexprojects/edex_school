import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FocusAreas() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out", once: false });
  }, []);

  const focusData = [
    { id: 1, title: "Mental Development", desc: "Develop critical thinking, adaptability, and leadership skills." },
    { id: 2, title: "Emotional Development", desc: "Build resilience, empathy, and strong interpersonal skills." },
    { id: 3, title: "Physical Development", desc: "Enhance wellness and energy management." },
    { id: 4, title: "Intellectual Development", desc: "Cultivate creativity, digital fluency, and financial literacy." },
  ];

  return (
    <div className="w-full bg-black text-white py-20 px-6 sm:px-8 md:px-12 lg:px-14 xl:px-20">

      {/* Heading */}
      <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl lufga-bold">
        Focus Areas
      </h1>

      {/* Cards */}
      <div
        className="
          grid 
          grid-cols-2                 /* Always 2 cards on mobile */
          sm:grid-cols-2
          md:grid-cols-2
          lg:grid-cols-4
          gap-4 sm:gap-6 md:gap-8 
          mt-10
        "
      >
        {focusData.map((item) => (
          <div
            key={item.id}
            data-aos="flip-left"
            className="
              bg-white text-black 
              rounded-xl 
              shadow-md 
              cursor-pointer 
              hover:bg-[#D1FF22]
              transition-all duration-300 
              hover:shadow-xl hover:scale-[1.03]

              min-h-[170px] 
              xs:min-h-[185px] 
              sm:min-h-[200px] 
              md:min-h-[230px] 
              lg:min-h-[250px]

              p-3 xs:p-4 sm:p-5 md:p-6
              flex flex-col
            "
          >

            {/* Number Badge */}
            <div
              className="
                w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-11 lg:h-11
                bg-[#D1FF22] text-black 
                rounded flex items-center justify-center
                text-[11px] xs:text-[12px] sm:text-[14px] md:text-[15px] lg:text-[17px]
                lufga-bold
                mb-2
              "
            >
              {item.id}
            </div>

            {/* Title */}
   <p
  className="
    lufga-bold
    max-w-[340px]
    text-wrap
    leading-tight
    overflow-hidden

    /* Fluid auto-scaling text (shrinks on small, grows on large) */
    text-[clamp(16px,4vw,35px)]

    mb-2
  "
>
  {item.title}
</p>


            {/* Description */}
            <p
              className="
                flex-grow
                lufga-light 
                text-[10px] xs:text-[11px] sm:text-[13px] md:text-[14px] lg:text-[20px]
                leading-relaxed
                text-gray-900
              "
            >
              {item.desc}
            </p>

          </div>
        ))}
      </div>

      {/* Learn • Apply • Grow Section */}
      <div className="mt-20 flex flex-col items-center py-10">
        
        {/* Heading Row */}
        <div
          data-aos="fade-up"
          className="
            flex flex-wrap justify-center items-center 
            gap-2 sm:gap-4 md:gap-8 
            text-[22px] xs:text-[26px] sm:text-[38px] lg:text-[60px] 
            lufga-bold text-center
          "
        >
          <span>Learn</span>
          <span className="text-[#D1FF22] text-xl sm:text-3xl lg:text-5xl">✦</span>
          <span>Apply</span>
          <span className="text-[#D1FF22] text-xl sm:text-3xl lg:text-5xl">✦</span>
          <span>Grow</span>
        </div>

        {/* Divider Row */}
        <div className="w-full max-w-5xl mt-10 flex items-center px-4 gap-2">
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full"></span>
          <span className="flex-1 h-[2px] bg-gray-500"></span>
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full"></span>
          <span className="text-gray-300 text-2xl sm:text-4xl lg:text-5xl px-4">✦</span>
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full"></span>
          <span className="flex-1 h-[2px] bg-gray-500"></span>
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>

    </div>
  );
}
