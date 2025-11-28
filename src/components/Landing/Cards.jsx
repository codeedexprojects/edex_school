import React from "react";
import card1 from "../../assets/Cards/card1.jpg";
import card2 from "../../assets/Cards/card2.jpg";
import card3 from "../../assets/Cards/card3.jpg";
import card4 from "../../assets/Cards/card4.jpg";
import card5 from "../../assets/Cards/card5.jpg";

const data = [
  {
    id: "01",
    img: card1,
    title: "14 Skills",
    desc: "Master essential business and professional skills through hands–on learning."
  },
  {
    id: "02",
    img: card2,
    title: "Immersive Learning Experience",
    desc: "Engage in 14 weeks of structured learning for progressive growth and industry relevance."
  },
  {
    id: "03",
    img: card3,
    title: "Real-Life Business Projects",
    desc: "Gain practical experience by working on real business challenges."
  },
  {
    id: "04",
    img: card4,
    title: "Expert Talks",
    desc: "Learn from top industry leaders and successful entrepreneurs during 14 insightful sessions."
  },
  {
    id: "05",
    img: card5,
    title: "Strategic Games",
    desc: "Develop leadership, problem-solving, and negotiation skills through high–impact simulations."
  },
];

export default function UniqueSection() {
  return (
    <section className="bg-black text-white w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-20">

     {/* Heading */}
<p
  className="
    lufga-bold 
    lg:px-5
    text-3xl          /* mobile */
    sm:text-4xl       /* tablets */
    md:text-5xl       /* laptops */
    lg:text-5xl
  "
>
  What makes EDEX unique?
</p>

{/* Subheading */}
<p
  className="
    lufga-light 
    lg:px-5
    text-xl           /* mobile */
    sm:text-2xl       /* tablets */
    md:text-3xl       /* laptops */
    leading-relaxed
    max-w-[900px]
  "
>
  Discover what sets EDEX Life School apart and how it can transform your learning experience.
</p>


      {/* Top row - 3 cards with reduced gap */}
      <div className="flex flex-col items-center mt-15 gap-4 sm:gap-6">
        
        {/* All cards in one container for medium screens, split rows for large */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 w-full lg:hidden">
          {/* Medium screens: 2-2-1 layout */}
          {data.map((card, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-3xl p-4 sm:p-5 shadow-lg
                         w-full sm:w-[calc(50%-12px)] md:w-[calc(50%-12px)] 
                         transition duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2
                         flex flex-col"
            >
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden flex-shrink-0">
                <img 
                  src={card.img} 
                  className="w-full h-[200px] sm:h-[220px] object-cover"
                  alt={card.title}
                />

                {/* Number Badge */}
                <div
                  className="absolute top-3 right-3 
                    w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12
                    bg-[#D7FF00] rounded-full
                    flex items-center justify-center
                    text-black font-bold text-sm sm:text-base"
                >
                  {card.id}
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-grow pt-4">
                {/* Title */}
                <h2 className="font-bold kumbh text-lg sm:text-xl md:text-[22px] leading-tight mb-2">
                  {card.title}
                </h2>

                {/* Description */}
                <p className="text-gray-500 lufga-light text-sm sm:text-[15px] leading-[150%]">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Large screens: 3-2 staggered layout */}
        <div className="hidden lg:flex flex-col items-center gap-4 md:gap-6 w-full">
          {/* First row - 3 cards */}
          <div className="flex flex-wrap justify-center gap-5 md:gap-6 w-full">
            {data.slice(0, 3).map((card, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-3xl p-4 sm:p-5 shadow-lg
lg:w-[450px] xl:w-[500px] 2xl:w-[550px] 
                           transition duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2
                           flex flex-col"
              >
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden flex-shrink-0">
                  <img 
                    src={card.img} 
                    className="w-full h-[200px] sm:h-[220px] object-cover"
                    alt={card.title}
                  />

                  {/* Number Badge */}
                  <div
                    className="absolute top-3 right-3 
                      w-12 h-12
                      bg-[#D7FF00] rounded-full lufga-bold  text-2xl
                      flex items-center justify-center
                      text-black font-bold "
                  >
                    {card.id}
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex flex-col flex-grow pt-4">
                  {/* Title */}
                  <h2 className="font-bold kumbh text-xl md:text-[22px] leading-tight mb-2">
                    {card.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 lufga text-[20px] leading-[150%]">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 2 cards centered */}
          <div className="flex flex-wrap justify-center gap-5 md:gap-6 w-full">
            {data.slice(3).map((card, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-3xl p-4 sm:p-5 shadow-lg
lg:w-[450px] xl:w-[500px] 2xl:w-[550px]
                           transition duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2
                           flex flex-col"
              >
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden flex-shrink-0">
                  <img 
                    src={card.img} 
                    className="w-full h-[200px] sm:h-[220px] object-cover"
                    alt={card.title}
                  />

                  {/* Number Badge */}
                  <div
                    className="absolute top-3 right-3 
                      w-12 h-12
                      bg-[#D7FF00] rounded-full lufga-bold
                      flex items-center justify-center
                      text-black font-bold text-2xl"
                  >
                    {card.id}
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex flex-col flex-grow pt-4">
                  {/* Title */}
                  <h2 className="font-bold kumbh text-xl md:text-[22px] leading-tight mb-2">
                    {card.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 lufga text-[20px] leading-[150%]">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}