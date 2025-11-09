export default function Konsultasi1On1() {
  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Illustration */}
          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-square bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl flex items-center justify-center shadow-lg">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-sm">3D Illustration</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-6">
            {/* Title */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Konsultasi 1-On-1
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Konsultasi 1-on-1 dengan Expert ChatPro Bukan hanya software,
                kami juga siapkan pendampingan personal agar bisnis Anda
                benar-benar merasakan hasil:
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {[
                "Analisis kebutuhan bisnis mendalam",
                "Strategi implementasi yang tepat",
                "Panduan optimalisasi ROI",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl border-2 border-cyan-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium text-sm md:text-base">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl">
              Jadwalkan Konsultasi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
