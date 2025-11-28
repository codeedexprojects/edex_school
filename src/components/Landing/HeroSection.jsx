/* SIZE-ENHANCED HERO SECTION */
import React from "react";
import LiquidEther from "../animations/LiquidEther";
import Aos from "aos";
import edexScroll from "../../assets/edexScroll.png";

export default function HeroSection() {
  return (
    <div>
      <section
        className="
          relative 
          w-full 
          min-h-[95vh] sm:min-h-[100vh] md:min-h-[115vh]
          overflow-hidden 
          bg-black 
          text-white 
          flex 
          items-center 
          justify-center
          pt-26 sm:pt-32
        "
      >

        {/* Background Animation */}
        <div className="absolute inset-0">
          <LiquidEther
            colors={["#00FF38", "#00E544", "#00C93B"]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>

        {/* CONTENT */}
        <div
          className="
            relative z-10
            w-full max-w-[1500px] 
            mx-auto 
            px-6 sm:px-8 md:px-10
            text-center 
            mb-20 sm:mb-24
          "
        >

          {/* HEADINGS */}
          <div className="space-y-3 sm:space-y-4">

            {/* TRANSFORMING */}
            <div
              className="
                lufga-bold
                leading-none
                text-[30px] xs:text-[36px] sm:text-[42px]
                md:text-[70px] lg:text-[55px] xl:text-[65px]
              "
            >
              <span className="text-gray-300 px-3 sm:px-4">TRANSFORMING</span>
            </div>

            {/* EDUCATION INTO */}
            <h1
              className="
                lufga-bold flex flex-wrap 
                justify-center items-end gap-3 sm:gap-4
                leading-none
              "
            >
              <span className="text-[35px] xs:text-[45px] sm:text-[52px] md:text-[70px] lg:text-[85px] xl:text-[90px]">
                EDUCATION
              </span>

              <span className="text-gray-300 text-[24px] xs:text-[30px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[70px] pb-1">
                INTO
              </span>
            </h1>

            {/* EXPERIENCE */}
            <div
              className="
                lufga-bold leading-none tracking-wide
                text-[40px] xs:text-[48px] sm:text-[58px]
                md:text-[80px] lg:text-[100px] xl:text-[70px]
              "
            >
              <span className="px-3">EXPERIENCE</span>
            </div>
          </div>

          {/* Learn - Apply - Grow */}
<div
  className="
    mt-8 mb-6
    flex flex-row justify-center items-center
    whitespace-nowrap        /* prevents text from breaking into new lines */
    
    gap-3 xs:gap-5 sm:gap-8 md:gap-14 lg:gap-20 xl:gap-28
    
    text-[16px] xs:text-[20px] sm:text-[28px]
    md:text-[45px] lg:text-[75px] xl:text-[120px]

    lufga   "
>
  <h1 className="text-white/90 lg:mx-15 hover:text-[#CDFF00] transition duration-300">
    Learn
  </h1>

  <h1 className="text-white/90 lg:mx-15 hover:text-[#CDFF00] transition duration-300">
    Apply
  </h1>

  <h1 className="text-white/90 lg:mx-15 hover:text-[#CDFF00] transition duration-300">
    Grow
  </h1>
</div>




          {/* Sub Heading */}
<h2
  className="
    lufga tracking-wide leading-[100%]
    text-[14px]
    sm:text-[16px]
    md:text-[18px]
    lg:text-[20px]
    xl:!text-[23px]
    2xl:!text-[25px]
    text-[#F1F1F1]
    max-w-[1100px] mx-auto mt-4
  "
>

  At EDEX Life School, we believe in learning by doing. Our 100-day
  Master Course is designed to make you 1% better every day, bridging
  the gap between theory and real-world application.
</h2>





          {/* APPLY BUTTON */}
       <div className="mt-10 sm:mt-12 flex justify-center">
        
  <button
    className="
      lufga 
      leading-relaxed
      text-white/90 
      transition-all duration-300
      hover:text-black

      /* RESPONSIVE PADDING */
      px-6 xs:px-7 sm:px-9 md:px-12 lg:px-14 xl:px-16
      py-3 xs:py-3.5 sm:py-4 md:py-5 lg:py-6

      /* RESPONSIVE FONT SIZE */
      text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]

      /* BORDER + BACKGROUND */
      border-b border-l-2 border-white/40
      rounded
      bg-white/5 backdrop-blur-md

      /* HOVER */
      hover:bg-white
      hover:shadow-xl hover:scale-[1.03]
    "
  >
    <span className="lufga text-2xl">Apply Now</span>
  </button>


</div>



        </div>
      </section>

      {/* SCROLLING BANNER */}
      <div
        className="
          w-full overflow-hidden bg-[#CDFF00]
          py-3 sm:py-4 rotate-[2deg]
          -mt-6 sm:-mt-10 md:-mt-12
        "
      >
        <div className="flex items-center whitespace-nowrap animate-scroll">
          {[...Array(25)].map((_, i) => (
            <React.Fragment key={i}>
              <img
                src={edexScroll}
                alt="banner"
                className="
                  h-10 xs:h-12 sm:h-14 md:h-16 
                  lg:h-20 xl:h-[90px]
                  mx-3 sm:mx-4
                "
              />
              <span
                className="
                  text-black 
                  text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                  mx-2
                "
              >
                ✦
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
