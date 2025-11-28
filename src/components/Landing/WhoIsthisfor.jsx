// src/components/WhoIsThisFor.jsx
import React from "react";
import GlassSurface from "../animations/glass.jsx";
import wavebg from "../../assets/whoIsthisFor/wave.png";
import img2 from "../../assets/whoIsthisFor/img2.jpg";

export default function WhoIsThisFor() {
  const items = [
    "Graduates seeking practical experience.",
    "Entrepreneurs aiming to building stronger business acumen.",
    "Professionals looking to enhance leadership and decision-making skills.",
    "Career Fast-Trackers who want to accelerate their career growth.",
  ];

  return (
    <div className="bg-black">
      <section
        className="
          w-full bg-[#1F1F1F] text-white 
          px-6 lg:px-20 py-16
          rounded-t-[50px]
          border-t-2 border-gray-500 
          overflow-visible
        "
      >
        {/* Heading */}
        <h1 className="lufga-bold font-semibold text-[40px] leading-[100%] mb-10">
          Who is this for ?
        </h1>

        {/* Main Layout — CLEANED */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT CONTENT */}
          <div className="col-span-2 relative space-y-6 mt-5">

            {/* WAVE BACKGROUND */}
            <img
              src={wavebg}
              className="absolute inset-0 w-full h-[500px] object-cover opacity-60 pointer-events-none"
            />

            {/* GLASS CARDS */}
            <div className="relative space-y-6">
              {items.map((text, index) => {
                const firstWord = text.split(" ")[0];
                const rest = text.replace(firstWord, "");

                return (
                <GlassSurface
  key={index}
  width="100%"
  height="auto"
  borderRadius={18}
  className="
    px-6 py-2
    shadow-[0_8px_25px_rgba(0,0,0,0.25)]
    cursor-pointer border-t-2
    transition-all duration-300
    flex items-start   /* FIX: forces content alignment to left */
  "
  displace={15}
  distortionScale={-150}
  redOffset={8}
  greenOffset={10}
  blueOffset={60}
  brightness={100}
  opacity={0.15}
  mixBlendMode="screen"
>
  <p className="lufga-light text-[22px] w-120 sm:text-[24px] leading-snug text-white text-left block">
    <span className="font-bold">{firstWord} </span>
    {rest}
  </p>
</GlassSurface>

                );
              })}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="col-span-1 flex flex-col items-center mt-5 gap-3 px-3">

            {/* IMAGE */}
            <img
              src={img2}
              className="w-full h-[300px] sm:h-[380px] lg:h-[390px] object-cover rounded-2xl shadow-xl"
              alt="person"
            />

            {/* BUTTON */}
            <button
              className="
                flex items-center justify-between w-full 
                bg-[#CDFF00]
                rounded shadow-lg px-4 py-3
                hover:scale-105 hover:shadow-2xl transition-all duration-300
              "
            >
              <span className="text-black lufga font-semibold text-[20px]">
                Let’s Communicate
              </span>

              <span
                className="
                  w-[60px] h-[60px] bg-white text-2xl
                  rounded-2xl flex items-center justify-center 
                  border border-black/20 text-black font-semibold
                "
              >
                ➜
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
