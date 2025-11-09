"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function KataPengguna() {
  const [activeIndex, setActiveIndex] = useState(1);

  const videos = [
    { id: 1, title: "Testimonial 1" },
    { id: 2, title: "Testimonial 2" },
    { id: 3, title: "Testimonial 3" },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Kata{" "}
            <span className="text-cyan-400">
              Pengguna<span className="text-pink-400">✨</span>
            </span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center gap-4 mb-12">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 p-2 hover:bg-white rounded-full shadow-lg transition-all"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-6 h-6 text-blue-900" />
          </button>

          {/* Carousel Videos */}
          <div className="flex items-center justify-center gap-4 w-full px-16">
            {videos.map((video, index) => {
              const isCenter = index === activeIndex;
              const isAdjacent =
                Math.abs(index - activeIndex) === 1 ||
                (activeIndex === 0 && index === videos.length - 1) ||
                (activeIndex === videos.length - 1 && index === 0);

              return (
                <div
                  key={video.id}
                  className={`transition-all duration-300 flex-shrink-0 ${
                    isCenter
                      ? "w-64 h-80 md:w-80 md:h-96"
                      : isAdjacent
                      ? "w-40 h-56 md:w-48 md:h-64 opacity-60"
                      : "w-32 h-40 opacity-40"
                  }`}
                >
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg">
                    {/* Play Button */}
                    <div className="flex items-center justify-center">
                      <div className="bg-white rounded-full p-4 shadow-xl">
                        <svg
                          className="w-8 h-8 text-gray-800"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 p-2 hover:bg-white rounded-full shadow-lg transition-all"
            aria-label="Next video"
          >
            <ChevronRight className="w-6 h-6 text-blue-900" />
          </button>
        </div>

        {/* Description Text */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-2">
            Jangan cuma percaya kata kami - ratusan bisnis, brand dan institusi
            sudah merasakan dampak nyata ChatPro:
          </p>
          <p className="text-gray-600 text-sm md:text-base italic">
            dari peningkatan penjualan & konversi hingga efisiensi tim Customer
            Service
          </p>
        </div>
      </div>
    </section>
  );
}
