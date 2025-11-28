// src/components/LifeAtEdexPages.jsx
import React, { useRef, useState, useEffect } from "react";
import bubble from "../../assets/MeetOurCommunity/bubble arrow.png";

import img1 from "../../assets/LifeAtEdex/img1.jpg";
import img2 from "../../assets/LifeAtEdex/img2.jpg";
import img3 from "../../assets/LifeAtEdex/img3.jpg";
import img4 from "../../assets/LifeAtEdex/img4.jpg";
import img5 from "../../assets/LifeAtEdex/img5.jpg";
import img6 from "../../assets/LifeAtEdex/img6.jpg";

export default function LifeAtEdexPages() {
  const scrollRef = useRef(null);
  const [pageIndex, setPageIndex] = useState(0);

  const pages = [
    [img1, img2, img3, img4, img5, img6],
    [img3, img4, img1, img5, img2, img6],
    [img5, img2, img3, img4, img6, img1],
  ];

  useEffect(() => {
    const onResize = () => {
      if (!scrollRef.current) return;
      scrollRef.current.scrollTo({
        left: pageIndex * scrollRef.current.offsetWidth,
        behavior: "instant",
      });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [pageIndex]);

  const handleScroll = () => {
    const container = scrollRef.current;
    const index = Math.round(container.scrollLeft / container.offsetWidth);
    setPageIndex(index);
  };

  const goToPage = (index) => {
    const container = scrollRef.current;
    if (!container) return;
    const safeIndex = Math.max(0, Math.min(index, pages.length - 1));
    container.scrollTo({
      left: safeIndex * container.offsetWidth,
      behavior: "smooth",
    });
    setPageIndex(safeIndex);
  };

  return (
<section className="relative bg-black text-white w-full pt-10 lg:px-5 overflow-hidden lg:p-5 md:p-3">
      {/* Header */}
      <div className="max-w-[1200px] px-4  ">
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[90px] lufga-bold leading-tight mb-4">
          Life at EDEX
        </h1>
        <p className="text-white max-w-[650px] text-base sm:text-lg lg:text-xl mb-10 lufga-light">
          Discover snapshots of learning, teamwork, and real-world impact from our vibrant community.
        </p>
      </div>

      {/* Arrows (hidden on mobile) */}
      <div className="absolute right-6 top-20 px-15 hidden md:flex items-center gap-4 z-30">
        {/* LEFT ARROW */}
        <button
          onClick={() => goToPage(pageIndex - 1)}
          className="relative w-[60px] h-[60px] rounded-full flex items-center justify-center"
        >
          <img
            src={bubble}
            className="absolute inset-0 w-full h-full object-cover rounded-full rotate-180"
          />
          <svg
            className="absolute w-6 h-6 text-white rotate-180"
            fill="none"
            stroke="white"
            strokeWidth="3"
          >
            <line x1="7" y1="12" x2="17" y2="12" />
            <polyline points="12 7 17 12 12 17" />
          </svg>
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => goToPage(pageIndex + 1)}
          className="relative w-[60px] h-[60px] rounded-full flex items-center justify-center"
        >
          <img
            src={bubble}
            className="absolute inset-0 w-full h-full object-cover rounded-full"
          />
          <svg
            className="absolute w-6 h-6 text-white"
            fill="none"
            stroke="white"
            strokeWidth="3"
          >
            <line x1="7" y1="12" x2="17" y2="12" />
            <polyline points="12 7 17 12 12 17" />
          </svg>
        </button>
      </div>

      {/* Scrollable pages */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-full overflow-x-hidden no-scrollbar scroll-smooth mt-10 snap-x snap-mandatory"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex">
          {pages.map((page, pIndex) => (
            <div
              key={pIndex}
              className="snap-start shrink-0 w-full md:max-w-[1200px] mx-auto px-4"
              style={{ minWidth: "100%" }}
            >
              {/* Grid */}
            {/* Grid */}
<div className="
  grid 
  grid-cols-2              /* ALWAYS 2 columns on small screens */
  md:grid-cols-3           /* 3 columns from md */
  gap-2 
  auto-rows-[140px] 
  sm:auto-rows-[160px] 
  md:auto-rows-[260px]
">

  {/* Image 1 */}
  <div className="overflow-hidden group md:row-span-2">
    <img
      src={page[1]}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
  </div>

  {/* Image 2 */}
  <div className="overflow-hidden group">
    <img
      src={page[0]}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
  </div>

  {/* Image 3 */}
  <div className="overflow-hidden group md:row-span-2">
    <img
      src={page[2]}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
  </div>

  {/* Image 4 */}
  <div className="overflow-hidden group">
    <img
      src={page[3]}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
  </div>

  {/* Bottom Row (5 & 6 as 50/50 on all screens) */}
  <div className="col-span-2 md:col-span-3 grid grid-cols-2 gap-2">
    <div className="overflow-hidden group">
      <img
        src={page[4]}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <div className="overflow-hidden group">
      <img
        src={page[5]}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
  </div>
</div>

            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6 mb-3">
        <div className="inline-flex items-center gap-3">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={`rounded-2xl transition-all ${
                pageIndex === i ? "bg-white w-6 h-1" : "bg-gray-600 w-6 h-1"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
