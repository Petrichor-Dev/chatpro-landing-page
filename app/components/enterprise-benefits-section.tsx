import { Check } from "lucide-react";

export default function EnterpriseBenefitsSection() {
  const benefits = [
    "Layanan Publik Lebih Cepat & Responsif",
    "Efisiensi Tenaga & Biaya Operasional",
    "Mendukung Multi-Channel Komunikasi",
    "Peningkatan Citra Profesional Instansi",
    "Multi-Language Support",
    "White Label Solution (Enterprise)",
    "Advanced Analytics",
    "Priority Support (SLA)",
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-[#EEF2FF] to-[#F4F7FF]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Untuk Perusahaan & Instansi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-4 py-2 md:px-6 md:py-4 rounded-2xl"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="flex-shrink-0 rounded-full p-2 mt-1 bg-green-500">
                <Check size={24} style={{ color: "#ffffff" }} />
              </div>
              <p className="text-gray-800 font-medium text-base md:text-lg">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
