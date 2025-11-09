// import Image from "next/image";

// const businessTypes = [
//   {
//     id: 1,
//     title: "F&B & Hospitality",
//     description:
//       "Reservasi/meja, antrian, pre-order & delivery, promo personal & loyalti.",
//     image: "/images/fnb.png",
//   },
//   {
//     id: 2,
//     title: "Jasa & Pelayanan",
//     description:
//       "Kualifikasi chat masuk, kirim penawaran, jadwalkan kunjungan, reminder & update pekerjaan.",
//     image: "/images/service.png",
//   },
//   {
//     id: 3,
//     title: "Edukasi & Komunitas",
//     description:
//       "Pendaftaran kelas, jawab FAQ, kirim materi, ingattkan kehadiran & Pembayaran.",
//     image: "/images/education.png",
//   },
//   {
//     id: 4,
//     title: "Kesehatan & Kecantikan (Klinik/Salon)",
//     description:
//       "Booking jadwal, reminder janji, aftercare & ajak review, paket layanan.",
//     image: "/images/health.png",
//   },
//   {
//     id: 5,
//     title: "Bisnis Online (Toko/Marketplace/DM)",
//     description:
//       "Jualan Katalog, tanya stock, checkout/konfirmasi bayar, follow-up keranjangjang & repeat order.",
//     image: "/images/ecommerce.png",
//   },
// ];

// export default function BusinessTypesSection() {
//   return (
//     <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Headline */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
//             Cocok Untuk{" "}
//             <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
//               Berbagai Bisnis
//             </span>
//           </h2>
//           <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-4"></div>
//         </div>

//         {/* Business Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
//           {businessTypes.map((business) => (
//             <div
//               key={business.id}
//               className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
//             >
//               {/* Image Container */}
//               <div className="relative w-full h-48 md:h-40 lg:h-44 overflow-hidden bg-gray-100">
//                 <Image
//                   src={business.image || "/placeholder.svg"}
//                   alt={business.title}
//                   fill
//                   className="object-cover w-full h-full"
//                   priority={business.id === 1}
//                 />
//               </div>

//               {/* Content Container */}
//               <div className="p-6 flex flex-col flex-grow">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center md:text-left">
//                   {business.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 leading-relaxed text-center md:text-left flex-grow">
//                   {business.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

const businessTypes = [
  {
    id: 1,
    title: "F&B & Hospitality",
    description:
      "Reservasi/meja, antrian, pre-order & delivery, promo personal & loyalti.",
    image: "/images/fnb.png",
  },
  {
    id: 2,
    title: "Jasa & Pelayanan",
    description:
      "Kualifikasi chat masuk, kirim penawaran, jadwalkan kunjungan, reminder & update pekerjaan.",
    image: "/images/fnb.png",
  },
  {
    id: 3,
    title: "Edukasi & Komunitas",
    description:
      "Pendaftaran kelas, jawab FAQ, kirim materi, ingatkan kehadiran & pembayaran.",
    image: "/images/education.png",
  },
  {
    id: 4,
    title: "Kesehatan & Kecantikan (Klinik/Salon)",
    description:
      "Booking jadwal, reminder janji, aftercare & ajak review, paket langganan.",
    image: "/images/health.png",
  },
  // {
  //   id: 5,
  //   title: "Bisnis Online (Toko/Marketplace/DM)",
  //   description:
  //     "Jualan katalog, tanya stock, checkout/konfirmasi bayar, follow-up keranjang & repeat order.",
  //   image: "/images/ecommerce.png",
  // },
  // {
  //   id: 6,
  //   title: "Edukasi & Komunitas",
  //   description:
  //     "Pendaftaran kelas, jawab FAQ, kirim materi, ingatkan kehadiran & pembayaran.",
  //   image: "/images/education.png",
  // },
  // {
  //   id: 7,
  //   title: "Kesehatan & Kecantikan (Klinik/Salon)",
  //   description:
  //     "Booking jadwal, reminder janji, aftercare & ajak review, paket langganan.",
  //   image: "/images/health.png",
  // },
  // {
  //   id: 8,
  //   title: "Bisnis Online (Toko/Marketplace/DM)",
  //   description:
  //     "Jualan katalog, tanya stock, checkout/konfirmasi bayar, follow-up keranjang & repeat order.",
  //   image: "/images/ecommerce.png",
  // },
];

export default function BusinessTypesSection() {
  return (
    <section className="pb-16 md:py-24 bg-gradient-to-b from-[#F4F7FF] to-[#EEF2FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Cocok Untuk{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
              Berbagai Bisnis
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessTypes.map((business) => (
            <div
              key={business.id}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center p-6"
            >
              <div className="relative w-full h-56 mb-4">
                <Image
                  src={business.image}
                  alt={business.title}
                  fill
                  className="object-contain rounded-t-3xl"
                  priority={business.id === 1}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {business.title}
              </h3>
              <div className="h-0.5 w-10 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mb-3"></div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {business.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
