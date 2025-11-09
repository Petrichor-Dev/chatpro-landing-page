"use client";

export default function CTASection() {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 md:px-8 lg:px-16">
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1D42AB] to-[#9BEAEF] " />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Column - Text and Buttons */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Aktifkan ChatPro & Jawab Chat Otomatis Hari Ini
            </h2>
            <p className="text-white text-opacity-80 text-lg md:text-xl">
              Trial 7 hari – bisa batal kapan saja
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Solid Button */}
            <button
              className="px-8 py-3 rounded-full bg-white text-[#1D42AB] font-semibold hover:bg-opacity-90 transition-all duration-200 whitespace-nowrap"
              aria-label="Start free trial"
            >
              Coba Gratis 7 Hari
            </button>

            {/* Outlined Button */}
            <button
              className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-200 whitespace-nowrap"
              aria-label="Schedule demo"
            >
              Jadwalkan Demo
            </button>
          </div>
        </div>

        {/* Right Column - Phone Mockups */}
        <div className="flex justify-center items-center gap-6 md:gap-8 h-96 md:h-auto">
          {/* First Phone Placeholder */}
          <div className="w-32 h-64 md:w-40 md:h-80 bg-gray-300 rounded-3xl shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300" />

          {/* Second Phone Placeholder */}
          <div className="w-32 h-64 md:w-40 md:h-80 bg-gray-300 rounded-3xl shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300" />
        </div>
      </div>
    </section>
  );
}
