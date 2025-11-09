// export default function TrustedBySection() {
//   const testimonials = [
//     {
//       id: 1,
//       quote: "Chat jadi rapi, follow-up jalan sendiri. Tim fokus di closing.",
//       author: "Rina",
//       role: "Owner Toko Gadget",
//     },
//     {
//       id: 2,
//       quote: "Balas chat lebih cepat, closing juga lebih banyak.",
//       author: "Andi",
//       role: "Owner Toko Fashion",
//     },
//     {
//       id: 3,
//       quote:
//         "Janji temu dan pembayaran lebih tertata. Respon jauh lebih cepat.",
//       author: "Budi",
//       role: "Jasa Service AC",
//     },
//     {
//       id: 4,
//       quote:
//         "FAQ otomatis, pendaftaran naik. Admin lebih santai, tapi efektif.",
//       author: "Maya",
//       role: "Akademi Online",
//     },
//     {
//       id: 5,
//       quote:
//         "FAQ otomatis, pendaftaran naik. Admin lebih santai, tapi efektif.",
//       author: "Maya",
//       role: "Akademi Online",
//     },
//   ];

//   const topRow = testimonials.slice(0, 2);
//   const bottomRow = testimonials.slice(2, 5);

//   return (
//     <section className="relative py-16 md:py-24 px-4 overflow-hidden">
//       {/* Background with diagonal grid pattern and gradient */}
// <div className="absolute inset-0 -z-10">
//   <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100" />
//   <svg
//     className="absolute w-full h-full opacity-[0.03]"
//     viewBox="0 0 100 100"
//     preserveAspectRatio="none"
//   >
//     <defs>
//       <pattern
//         id="diagonal-grid"
//         x="0"
//         y="0"
//         width="10"
//         height="10"
//         patternUnits="userSpaceOnUse"
//         patternTransform="rotate(-45)"
//       >
//         <line
//           x1="0"
//           y1="0"
//           x2="0"
//           y2="10"
//           stroke="currentColor"
//           strokeWidth="0.5"
//         />
//       </pattern>
//     </defs>
//     <rect width="100" height="100" fill="url(#diagonal-grid)" />
//   </svg>
// </div>

//       <div className="max-w-7xl mx-auto">
//         {/* Headline Section */}
//         <div className="text-center mb-16 md:mb-24">
//           <h2 className="text-3xl md:text-5xl font-bold leading-tight text-balance max-w-4xl mx-auto">
//             <span className="text-black">Dipercaya </span>
//             <span className="bg-[#A7E6F8] px-2 py-1 rounded inline-block">
//               1.100+ Bisnis,
//             </span>
//             <span className="text-black"> Brand & Institusi</span>
//             <br />
//             <span className="text-black">Di </span>
//             <span className="bg-[#A7E6F8] px-2 py-1 rounded inline-block">
//               44 Kota & 30 Provinsi Indonesia
//             </span>
//             <span className="text-black"> – </span>
//             <span className="text-[#36D5E4]">ChatPro</span>
//             <span className="text-black"> Bikin</span>
//             <br />
//             <span className="text-black">
//               Tim Penjualan & CS Anda Lebih Cepat, Efisien,
//             </span>
//             <br />
//             <span className="text-black">dan Langsung Beres!</span>
//           </h2>
//         </div>

//         {/* Testimonials Container */}
//         <div className="space-y-6 md:space-y-8">
//           {/* Top Row - 2 Cards */}
//           <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
//             {topRow.map((testimonial) => (
//               <div
//                 key={testimonial.id}
//                 className="w-full md:w-80 mx-auto md:mx-0 bg-white rounded-2xl shadow-md shadow-gray-200 p-6 flex flex-col"
//               >
//                 {/* Stars */}
//                 <div className="flex justify-center gap-1 mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <span key={i} className="text-xl">
//                       ⭐
//                     </span>
//                   ))}
//                 </div>

//                 {/* Quote */}
//                 <p className="text-gray-700 text-center text-sm md:text-base font-medium mb-4 flex-grow">
//                   "{testimonial.quote}"
//                 </p>

//                 {/* Author */}
//                 <p className="text-gray-500 text-center text-xs md:text-sm">
//                   {testimonial.author} – {testimonial.role}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Bottom Row - 3 Cards */}
//           <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
//             {bottomRow.map((testimonial) => (
//               <div
//                 key={testimonial.id}
//                 className="w-full md:w-80 mx-auto md:mx-0 bg-white rounded-2xl shadow-md shadow-gray-200 p-6 flex flex-col"
//               >
//                 {/* Stars */}
//                 <div className="flex justify-center gap-1 mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <span key={i} className="text-xl">
//                       ⭐
//                     </span>
//                   ))}
//                 </div>

//                 {/* Quote */}
//                 <p className="text-gray-700 text-center text-sm md:text-base font-medium mb-4 flex-grow">
//                   "{testimonial.quote}"
//                 </p>

//                 {/* Author */}
//                 <p className="text-gray-500 text-center text-xs md:text-sm">
//                   {testimonial.author} – {testimonial.role}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function TrustedBySection() {
  const testimonials = [
    {
      id: 1,
      quote: "Chat jadi rapi, follow-up jalan sendiri. Tim fokus di closing.",
      author: "Rina",
      role: "Owner Toko Gadget",
    },
    {
      id: 2,
      quote: "Balas chat lebih cepat, closing juga lebih banyak.",
      author: "Andi",
      role: "Owner Toko Fashion",
    },
    {
      id: 3,
      quote:
        "Janji temu dan pembayaran lebih tertata. Respon jauh lebih cepat.",
      author: "Budi",
      role: "Jasa Service AC",
    },
    {
      id: 4,
      quote:
        "FAQ otomatis, pendaftaran naik. Admin lebih santai, tapi efektif.",
      author: "Maya",
      role: "Akademi Online",
    },
    {
      id: 5,
      quote:
        "FAQ otomatis, pendaftaran naik. Admin lebih santai, tapi efektif.",
      author: "Maya",
      role: "Akademi Online",
    },
  ];

  const topRow = testimonials.slice(0, 2);
  const bottomRow = testimonials.slice(2, 5);

  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden">
      {/* background gradient + subtle diagonal grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100" />
        <svg
          className="absolute w-full h-full opacity-[0.03]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="diagonal-grid"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(-45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="10"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#diagonal-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top row - 2 testimonial cards */}
        <div className="flex flex-col md:flex-row items-center justify-evenly gap-6 md:gap-12 mb-20">
          {topRow.map((t) => (
            <div key={t.id} className="relative w-full max-w-sm md:max-w-xs">
              {/* star pill */}
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-3 py-1 shadow-sm flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.447a1 1 0 00-.364 1.118l1.287 3.962c.3.921-.755 1.688-1.54 1.118l-3.37-2.447a1 1 0 00-1.176 0l-3.37 2.447c-.784.57-1.84-.197-1.54-1.118l1.286-3.962a1 1 0 00-.364-1.118L2.063 9.39c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(16,24,40,0.06)] p-6 pt-8 md:pt-10 text-center">
                <p className="text-gray-700 text-sm md:text-base font-medium mb-4">
                  “{t.quote}”
                </p>
                <p className="text-gray-500 text-xs md:text-sm">
                  {t.author} – {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Headline (center, long multiline) */}
        <div className="text-center mb-5 px-4">
          <h2 className="mx-auto text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 max-w-4xl">
            <span>Dipercaya </span>
            <span className="inline-block bg-[#9BEAEF] text-[#042A49] px-2 rounded">
              1.100+ Bisnis,
            </span>
            <span> Brand & Institusi</span>
            <br className="hidden md:block" />
            <span className="block md:inline">Di </span>
            <span className="inline-block bg-[#9BEAEF] text-[#042A49] px-2 rounded">
              44 Kota & 30 Provinsi Indonesia
            </span>
            <span className="block md:inline"> – </span>
            <span className="text-[#1D42AB]">ChatPro</span>
            <span className="block md:inline"> Bikin</span>
            <br />
            <span className="block">
              Tim Penjualan & CS Anda Lebih Cepat, Efisien,
            </span>
            <span className="block">Dan Langsung Beres!</span>
          </h2>
        </div>

        {/* Bottom row - 3 testimonial cards */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 mt-6">
          {bottomRow.map((t, idx) => (
            <div
              key={t.id}
              className={`relative w-full max-w-sm md:max-w-xs ${
                idx === 1 ? "mt-32" : ""
              }`}
            >
              {/* star pill */}
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-3 py-1 shadow-sm flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.447a1 1 0 00-.364 1.118l1.287 3.962c.3.921-.755 1.688-1.54 1.118l-3.37-2.447a1 1 0 00-1.176 0l-3.37 2.447c-.784.57-1.84-.197-1.54-1.118l1.286-3.962a1 1 0 00-.364-1.118L2.063 9.39c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(16,24,40,0.06)] p-6 pt-8 md:pt-10 text-center">
                <p className="text-gray-700 text-sm md:text-base font-medium mb-4">
                  “{t.quote}”
                </p>
                <p className="text-gray-500 text-xs md:text-sm">
                  {t.author} – {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
