// "use client";

// import { CheckCircle2 } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <section className="bg-gradient-to-br from-[#E9EDFF] via-white to-[#F0F4FF] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Main Hero Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
//           {/* Left: Video/Image Placeholder */}
//           <div className="flex justify-center">
//             <div className="relative">
//               <div
//                 className="bg-gray-200 rounded-2xl w-full aspect-square md:aspect-auto md:w-96 md:h-96 shadow-lg flex items-center justify-center"
//                 role="img"
//                 aria-label="ChatPro demo video placeholder"
//               >
//                 <div className="flex flex-col items-center gap-3">
//                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
//                     <svg
//                       className="w-8 h-8 text-[#1D42AB]"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M8 5v14l11-7z" />
//                     </svg>
//                   </div>
//                   <span className="text-gray-500 font-medium">Demo Video</span>
//                 </div>
//               </div>
//               {/* Trust Badge */}
//               <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-md flex items-center gap-2 whitespace-nowrap">
//                 <span className="text-lg">⭐</span>
//                 <span className="text-sm font-medium text-gray-700">
//                   Dipercaya 1.500+ bisnis • Rata-rata respon {"<"} 3 detik
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Right: Hero Content */}
//           <div className="flex flex-col gap-6 md:pt-8">
//             <div className="space-y-3">
//               <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//                 AI Customer Service dan Sales{" "}
//                 <span className="text-[#1D42AB]">WhatsApp 24/7</span>
//               </h1>
//               <p className="text-3xl md:text-4xl font-bold">
//                 <span className="text-[#1D42AB]">Chat</span>{" "}
//                 <span className="text-[#9BEAEF]">Langsung Beres!</span>
//               </p>
//             </div>

//             {/* Supporting Text */}
//             <p className="text-gray-600 text-sm md:text-base leading-relaxed">
//               Chat Terbalas Otomatis, Penjualan naik 2x Lipat. Fokusnya
//               Penjualan naik,{" "}
//               <span className="font-semibold">
//                 Chat Terbalas Cepat dan Nonstop 24 Jam.
//               </span>
//             </p>

//             {/* Feature List */}
//             <div className="space-y-3">
//               <div className="flex items-start gap-3">
//                 <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
//                 <span className="text-gray-700">
//                   Follow-up otomatis, Penjualan naik
//                 </span>
//               </div>
//               <div className="flex items-start gap-3">
//                 <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
//                 <span className="text-gray-700">
//                   Respon Cepat {"<"} 3 detik, tak ada chat terlewat
//                 </span>
//               </div>
//               <div className="flex items-start gap-3">
//                 <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
//                 <span className="text-gray-700">
//                   Data aman, Multi tenant, Fitur analisis dan bisa Broadcast
//                 </span>
//               </div>
//             </div>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-3 pt-4">
//               <button className="bg-gradient-to-r from-[#1D42AB] to-[#0F2E7A] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105">
//                 Mulai Sekarang
//               </button>
//               <button className="border-2 border-[#1D42AB] text-[#1D42AB] px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
//                 Lihat Demo
//               </button>
//             </div>

//             {/* Guarantee Text */}
//             <p className="text-sm text-gray-500 italic">
//               *Garansi Uang Kembali
//             </p>
//           </div>
//         </div>

//         {/* Feature Highlights Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-20">
//           <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//             <h3 className="font-bold text-gray-900 mb-2 text-sm">
//               Balas Otomatis {"<"} 3 detik
//             </h3>
//             <p className="text-gray-600 text-xs leading-relaxed">
//               Nggak ada chat terlewat, Customer dilayani 24 jam Nonstop, kurang
//               dari 3 detik
//             </p>
//           </div>

//           <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//             <h3 className="font-bold text-gray-900 mb-2 text-sm">
//               Follow-up jalan sendiri
//             </h3>
//             <p className="text-gray-600 text-xs leading-relaxed">
//               Otomatis Mengingatkan, Mengejar, dan Mengkonversi setiap chat
//               Customer yang masuk
//             </p>
//           </div>

//           <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//             <h3 className="font-bold text-gray-900 mb-2 text-sm">
//               Chat rapi di CRM = Pipeline
//             </h3>
//             <p className="text-gray-600 text-xs leading-relaxed">
//               Melihat status tiap prospek, siapa yang harus di follow-up, dan
//               progress penjualan. Semua otomatis AI Bekerja sendiri
//             </p>
//           </div>

//           <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//             <h3 className="font-bold text-gray-900 mb-2 text-sm">
//               AI paham konteks, jawab natural
//             </h3>
//             <p className="text-gray-600 text-xs leading-relaxed">
//               Bukan template aku, percakapan terasa manusiawi. AI bisa Memahami
//               Konteks dan Penyesuaian gaya Bahasa
//             </p>
//           </div>

//           <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//             <h3 className="font-bold text-gray-900 mb-2 text-sm">
//               Bisa Kustomisasi
//             </h3>
//             <p className="text-gray-600 text-xs leading-relaxed">
//               Atur AI Sesuai Gaya bahasa dan Chat yang kamu inginkan
//             </p>
//           </div>
//         </div>

//         {/* Bottom Tagline */}
//         <div className="text-center mt-12 text-gray-600 text-sm italic">
//           Balas cepat, Follow-up Otomatis, Penjualan Naik, Percakapan Natural –
//           ChatPro.
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F7FF] to-[#EEF2FF] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background grid pattern */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="absolute w-full h-full opacity-40"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 8 0 L 0 0 0 8"
                fill="none"
                stroke="#DAE4FF"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Main Hero Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-24">
          {/* Left: Video Placeholder */}
          <div className="flex justify-center relative">
            <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-xl h-[400px] aspect-video flex items-center justify-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
                <svg
                  className="w-10 h-10 text-[#1D42AB]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white border border-[#E4E8FF] rounded-full px-5 py-2 shadow-md flex items-center gap-2 text-sm md:text-base">
              <span className="text-yellow-400 text-lg">⭐</span>
              <span className="text-gray-700 font-medium">
                Dipercaya{" "}
                <span className="text-[#1D42AB] font-semibold">
                  1.500+ bisnis
                </span>{" "}
                • Rata-rata{" "}
                <span className="text-[#00A79D] font-semibold">
                  respon {"<"} 3 detik
                </span>
              </span>
            </div>
          </div>

          {/* Right: Text content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              AI Customer Service dan Sales{" "}
              <span className="text-[#1D42AB]">WhatsApp 24/7</span>
            </h1>
            <p className="text-3xl md:text-4xl font-bold mt-3">
              <span className="text-[#1D42AB]">Chat</span>{" "}
              <span className="text-[#44D8E1]">Langsung Beres!</span>
            </p>

            <p className="mt-5 text-gray-600 text-sm md:text-base leading-relaxed">
              Chat Terbalas Otomatis, Penjualan naik 2x Lipat. Fokusnya
              Penjualan naik,{" "}
              <span className="font-semibold text-gray-800">
                Chat Terbalas Cepat dan Nonstop 24 Jam.
              </span>
            </p>

            {/* Feature list */}
            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">
                  Follow-up otomatis, Penjualan naik
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">
                  Respon Cepat {"<"} 3 detik, tak ada chat terlewat
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">
                  Data aman, Multi tenant, Fitur analisis dan bisa Broadcast
                </span>
              </li>
            </ul>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6">
              <button className="bg-gradient-to-r from-[#1D42AB] to-[#0E2C73] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105">
                Mulai Sekarang
              </button>
              <button className="border border-[#1D42AB] text-[#1D42AB] px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Lihat Demo
              </button>
            </div>

            <p className="text-sm text-gray-500 italic mt-3">
              *Garansi Uang Kembali
            </p>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1D42AB]">
            Keunggulan <span className="text-[#00AEEF]">Utama</span>
            <span className="text-[#44D8E1]">✦</span>
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
          {[
            {
              title: "Balas Otomatis < 3 detik",
              desc: "Nggak ada chat terlewat, Customer dilayani 24 jam Nonstop, kurang dari 3 detik",
            },
            {
              title: "Follow-up jalan sendiri",
              desc: "Otomatis Mengingatkan, Mengejar, dan Mengonversi setiap chat Customer yang masuk",
            },
            {
              title: "Chat rapi di CRM = Pipeline",
              desc: "Melihat status tiap prospek, siapa yang harus di follow-up, dan progress penjualan.",
            },
            {
              title: "AI paham konteks, jawab natural",
              desc: "Percakapan terasa manusiawi. AI paham konteks & gaya bahasa pengguna.",
            },
            {
              title: "Bisa Kustomisasi",
              desc: "Atur gaya bahasa & balasan AI sesuai brand kamu.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-[#E5E9F5] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                {item.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <div className="text-center text-gray-600 text-sm italic">
          Balas cepat, Follow-up Otomatis, Penjualan Naik, Percakapan Natural –{" "}
          <span className="text-[#1D42AB] font-semibold">ChatPro</span>.
        </div>
      </div>
    </section>
  );
}
