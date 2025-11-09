// import { Check } from "lucide-react";

// interface Feature {
//   title: string;
//   description: string;
//   features: string[];
// }

// interface FeatureCard {
//   icon: string;
//   title: string;
//   features: Feature[];
// }

// const featureCards: FeatureCard[] = [
//   {
//     icon: "operasional",
//     title: "Operasional",
//     features: [
//       {
//         title: "Bisa Banyak Brand/Perusahaan & Banyak Agen",
//         description: "",
//         features: [],
//       },
//       {
//         title: "Kolaborasi Tim & Notifikasi Pintas",
//         description: "",
//         features: [],
//       },
//       {
//         title: "Backup Otomatis & Ekspor Data Pelanggan",
//         description: "",
//         features: [],
//       },
//     ],
//   },
//   {
//     icon: "automasi",
//     title: "Automasi & AI",
//     features: [
//       {
//         title: "Chatbot AI Yang Bisa Dilatih",
//         description: "",
//         features: [],
//       },
//       {
//         title: "Balas Otomatis Di WhatsApp (Real-Time)",
//         description: "",
//         features: [],
//       },
//       {
//         title: "Jawab Otomatis Dari FAQ Toko Anda",
//         description: "",
//         features: [],
//       },
//       {
//         title: "Template Chat Pinter & Penilaian Prospek",
//         description: "",
//         features: [],
//       },
//       {
//         title: "Aktifkan Kembali Pelanggan Lama",
//         description: "",
//         features: [],
//       },
//     ],
//   },
//   {
//     icon: "penjualan",
//     title: "Penjualan",
//     features: [
//       {
//         title: "Tiket Layanan & Alur Order Yang Rapi",
//         description: "",
//         features: [],
//       },
//       {
//         title: "Broadcast & Follow-Up Otomatis",
//         description: "",
//         features: [],
//       },
//       {
//         title: "Pengingat Pembayaran Otomatis",
//         description: "",
//         features: [],
//       },
//       {
//         title: "Skor Kinerja & Gamifikasi Tim",
//         description: "",
//         features: [],
//       },
//     ],
//   },
//   {
//     icon: "data",
//     title: "Data & Integrasi",
//     features: [
//       {
//         title: "Laporan Penjualan & Kepuasan Pelanggan (CSAT)",
//         description: "",
//         features: [],
//       },
//       {
//         title: "Satu Dashboard Untuk WA",
//         description: "",
//         features: [],
//       },
//       {
//         title: "Tagihan Mendukung Banyak Negara",
//         description: "",
//         features: [],
//       },
//     ],
//   },
// ];

// const orderedCards = [
//   featureCards[0],
//   featureCards[2],
//   featureCards[1],
//   featureCards[3],
// ];

// function FeatureCard({ card }: { card: FeatureCard }) {
//   return (
//     <div className="flex flex-col gap-6 rounded-lg bg-white p-8 shadow-sm border border-gray-200">
//       {/* Placeholder Image */}
//       <div className="h-40 w-full rounded-lg bg-gray-300" />

//       {/* Card Content */}
//       <div>
//         <div className="flex items-center gap-2 mb-6">
//           <h3 className="text-2xl font-bold text-gray-900">{card.title}</h3>
//           <div className="h-1 w-8 bg-blue-600 rounded" />
//         </div>

//         {/* Features List */}
//         <ul className="space-y-3">
//           {card.features.map((feature, index) => (
//             <li key={index} className="flex items-start gap-3">
//               <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
//               <span className="text-gray-700 text-sm">{feature.title}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default function FeatureSection() {
//   return (
//     <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
//       <div className="mx-auto max-w-7xl px-6 md:px-8">
//         {/* Headline */}
//         <div className="mb-16 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
//             Balas Ribuan Chat Per Hari – Otomatis Dibawah{" "}
//             <span className="text-blue-600">3 Detik</span>{" "}
//             <span className="text-cyan-400">24 Jam Nonstop</span> Tanpa Terlewat
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-max md:auto-rows-fr">
//           {/* Top Left - Operasional */}
//           <FeatureCard card={orderedCards[0]} />

//           {/* Top Right - Penjualan */}
//           <FeatureCard card={orderedCards[1]} />

//           {/* Bottom Left - Automasi & AI (tall) */}
//           <div className="flex flex-col gap-6 rounded-lg bg-white p-8 shadow-sm border border-gray-200 md:row-span-1">
//             {/* Placeholder Image */}
//             <div className="h-64 w-full rounded-lg bg-gray-300" />

//             {/* Card Content */}
//             <div>
//               <div className="flex items-center gap-2 mb-6">
//                 <h3 className="text-2xl font-bold text-gray-900">
//                   {orderedCards[2].title}
//                 </h3>
//                 <div className="h-1 w-8 bg-blue-600 rounded" />
//               </div>

//               {/* Features List */}
//               <ul className="space-y-3">
//                 {orderedCards[2].features.map((feature, index) => (
//                   <li key={index} className="flex items-start gap-3">
//                     <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
//                     <span className="text-gray-700 text-sm">
//                       {feature.title}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Bottom Right - Data & Integrasi (extra tall) */}
//           <div className="flex flex-col gap-6 rounded-lg bg-white p-8 shadow-sm border border-gray-200 md:row-span-1">
//             {/* Placeholder Image */}
//             <div className="h-96 w-full rounded-lg bg-gray-300" />

//             {/* Card Content */}
//             <div>
//               <div className="flex items-center gap-2 mb-6">
//                 <h3 className="text-2xl font-bold text-gray-900">
//                   {orderedCards[3].title}
//                 </h3>
//                 <div className="h-1 w-8 bg-blue-600 rounded" />
//               </div>

//               {/* Features List */}
//               <ul className="space-y-3">
//                 {orderedCards[3].features.map((feature, index) => (
//                   <li key={index} className="flex items-start gap-3">
//                     <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
//                     <span className="text-gray-700 text-sm">
//                       {feature.title}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Check } from "lucide-react";

interface Feature {
  title: string;
}

interface FeatureCard {
  title: string;
  features: Feature[];
}

const featureCards: FeatureCard[] = [
  {
    title: "Operasional",
    features: [
      { title: "Bisa Banyak Brand/Perusahaan & Banyak Agen" },
      { title: "Kolaborasi Tim & Notifikasi Pintas" },
      { title: "Backup Otomatis & Ekspor Data Pelanggan" },
    ],
  },
  {
    title: "Automasi & AI",
    features: [
      { title: "Chatbot AI Yang Bisa Dilatih" },
      { title: "Balas Otomatis Di WhatsApp (Real-Time)" },
      { title: "Jawab Otomatis Dari FAQ Toko Anda" },
      { title: "Template Chat Pinter & Penilaian Prospek" },
      { title: "Aktifkan Kembali Pelanggan Lama" },
    ],
  },
  {
    title: "Penjualan",
    features: [
      { title: "Tiket Layanan & Alur Order Yang Rapi" },
      { title: "Broadcast & Follow-Up Otomatis" },
      { title: "Pengingat Pembayaran Otomatis" },
      { title: "Skor Kinerja & Gamifikasi Tim" },
      { title: "Skor Kinerja & Gamifikasi Tim" },
    ],
  },
  {
    title: "Data & Integrasi",
    features: [
      { title: "Laporan Penjualan & Kepuasan Pelanggan (CSAT)" },
      { title: "Satu Dashboard Untuk WA" },
      { title: "Tagihan Mendukung Banyak Negara" },
    ],
  },
];

/**
 * Layout mapping to match sketch:
 * - Left column (stacked): top => featureCards[0] (Operasional) (small card)
 *                        bottom => featureCards[2] (Penjualan) (large card)
 * - Right column: top => featureCards[1] (Automasi & AI) (tall card)
 *                 bottom => featureCards[3] (Data & Integrasi) (small horizontal)
 */

function Card({
  card,
  variant = "normal",
}: {
  card: FeatureCard;
  variant?: "small" | "large" | "tall" | "normal" | "horizontal";
}) {
  const base =
    "bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 flex flex-col";
  const sizes: Record<string, string> = {
    small: "h-44",
    large: "h-96",
    tall: "h-auto md:h-[520px]",
    normal: "",
    horizontal: "h-40",
  };

  return (
    <div
      className={`${base} ${sizes[variant]} overflow-hidden relative`}
      role="region"
      aria-label={card.title}
    >
      {/* placeholder image area (top-left in design) */}
      <div className="mb-4 md:mb-6">
        <div className="w-full rounded-lg bg-gray-100 h-36 md:h-44 overflow-hidden" />
      </div>

      {/* title with short accent */}
      <div className="flex items-center gap-3 mb-4">
        <h3 className="text-lg md:text-xl font-bold text-gray-900">
          {card.title}
        </h3>
        <span className="h-1 w-8 bg-[#1D42AB] rounded" />
      </div>

      {/* features */}
      <ul className="mt-1 space-y-3 flex-1">
        {card.features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm leading-relaxed">
              {f.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FeatureSection() {
  return (
    <section className="w-full  bg-gradient-to-b from-white to-[#f7fbff] py-16 md:py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Headline */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            Balas Ribuan Chat Per Hari – Otomatis Dibawah{" "}
            <span className="text-[#1D42AB]">3 Detik</span>{" "}
            <span className="text-[#44D8E1]">24 Jam Nonstop</span> Tanpa
            Terlewat
          </h2>
        </div>

        {/* Grid that matches sketch */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* LEFT column (stacked) */}
          <div className="flex flex-col gap-8">
            {/* top small */}
            <Card card={featureCards[0]} />

            {/* bottom large */}
            <Card card={featureCards[2]} />
          </div>

          {/* RIGHT column */}
          <div className="flex flex-col gap-8">
            {/* tall card on top */}
            <Card card={featureCards[1]} />

            {/* small horizontal card at bottom (looks shorter in height) */}
            <Card card={featureCards[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
