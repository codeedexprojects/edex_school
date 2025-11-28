import React from "react";
import grouppic from "../../assets/grouppic.jpg";
import vrMan from "../../assets/Vrman.png";

const BannerPage = () => {
  return (
    <div className="w-full bg-white px-6 sm:px-12 lg:px-20 xl:px-32 pt-12 lg:pt-20 pb-0">

      {/* MAIN GRID - equal height left/right */}
      <div className="
        grid grid-cols-1 lg:grid-cols-2 
        gap-10 lg:gap-16 xl:gap-20 
        items-stretch
        max-w-[1800px] mx-auto
      "
      >

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between w-full min-h-full">

          {/* HEADING SECTION */}
          <div className="mb-6 sm:mb-8 md:mb-12 w-full">
            <div
              className="
                lufga-bold
                text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-[55px]
                leading-tight origin-left
                w-full
              "
            >
              <span className="lufga-bold block leading-none">
                Elevate Your Potential
              </span>

              <div className="flex flex-wrap items-center mt-1 sm:mt-2 gap-2 sm:gap-3">
                <span className="lufga-bold mx-1 sm:mx-1">with</span>

                {/* + ur */}
                <div className="flex items-center gap-0">
                  <div
                    className="
                      bg-black rounded-full 
                      w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-12 lg:h-12 
                      flex items-center justify-center shrink-0
                    "
                  >
                    <span
                      className="
                        bg-[#C5FF00] rounded-full 
                        w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8
                        flex items-center justify-center
                      "
                    >
                      <span
                        className="
                          text-white font-bold
                          text-lg sm:text-sm md:text-base lg:text-lg
                          leading-none
                        "
                      >
                        +
                      </span>
                    </span>
                  </div>

                  <span className="lufga-bold leading-none pl-0 ml-0">ur</span>
                </div>

                <span
                  className="
                    bg-[#C5FF00] font-bold 
                    px-2 sm:px-3 md:px-4 rounded-3xl
                    text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-[55px]
                  "
                >
                  Growth
                </span>

                <span
                  className="
                    lufga-bold
                    text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-[55px]
                  "
                >
                  Magic
                </span>
              </div>
            </div>
          </div>

          {/* GROUP IMAGE + BADGE */}
          <div className="relative w-full max-w-full mt-2 mb-5 flex-1">
            <img
              src={grouppic}
              className="w-full h-full object-cover rounded-[30px]"
              alt="group"
            />

            {/* BADGE */}
            <div className="absolute bottom-4 left-4 
  px-2 sm:px-4 md:px-5 
  py-2 sm:py-2 
  flex items-start gap-2 sm:gap-3">

  {/* Text Box */}
  <div className="bg-[#C5FF00] 
    px-4 sm:px-6 md:px-8 lg:px-10 
    py-2 sm:py-2 
    flex items-center">

    <span className="text-black lufga 
      text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg 
      font-semibold leading-tight">

      Crafting Learning Experiences
      <br className="hidden sm:block" />
      that Inspire Lasting Change
    </span>
  </div>

  {/* Side Bars */}
  <div className="flex items-start">
    <div className="border-r-[6px] border-[#C5FF00] 
      h-[40px] sm:h-[50px] md:h-[60px]"></div>

    <div className="border-r-[4px] border-[#C5FF00] 
      px-1 h-[40px] sm:h-[50px] md:h-[60px]"></div>

    <div className="border-r-[2px] border-[#C5FF00] 
      px-1 h-[40px] sm:h-[50px] md:h-[60px]"></div>

    <div className="border-r-[1px] border-[#C5FF00] 
      px-1 h-[40px] sm:h-[50px] md:h-[60px]"></div>
  </div>

</div>


            {/* ARROW CIRCLE */}
            <div
              className="
                absolute 
                bottom-[-15px] right-[-15px] 
                sm:bottom-[-20px] sm:right-[-20px]
                bg-[#C5FF00]
                w-[55px] h-[55px] sm:w-[70px] sm:h-[70px]
                rounded-full flex items-center justify-center shadow-lg
              "
            >
              <svg
                width="30"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 sm:w-8 sm:h-8"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-between w-full min-h-full">

          {/* PARAGRAPH - text shrinks on mobile */}
          <h4
            className="
              lufga-light text-black font-normal
              text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl
              leading-normal tracking-wide
              max-w-2xl
              mb-8 sm:mb-12 lg:mb-16 xl:mb-20
            "
          >
            At EDEX Life School, we amplify your personal and professional journey
            through immersive, hands-on learning. Build skills, strengthen your
            mindset, and unlock your potential—one day at a time.
          </h4>

          {/* VR MAN IMAGE - keeps equal height with left image */}
          <div className="relative w-full flex-1 min-h-[300px] sm:min-h-[380px] md:min-h-[450px] lg:min-h-[520px] xl:min-h-[600px]">
            <img
              src={vrMan}
              alt="VR Man"
              className="
                absolute 
                bottom-0 
                left-1/2 
                -translate-x-1/2 
                h-full 
                w-auto 
                object-contain
                object-bottom
              "
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default BannerPage;
