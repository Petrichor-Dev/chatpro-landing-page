"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question:
      "Apakah aman untuk data instansi/perusahaan (keamanan & privasi)?",
    id: "q1",
  },
  {
    question:
      "Apakah bisa melayani ribuan chat masyarakat/pelanggan sekaligus?",
    id: "q2",
  },
  {
    question: "Apakah layanan bisa berjalan 24/7 tanpa hambatan?",
    id: "q3",
  },
  {
    question: "Apakah mendukung multi-agen & multi-departemen?",
    id: "q4",
  },
  {
    question: "Berapa lama proses setup hingga bisa digunakan?",
    id: "q5",
  },
  {
    question: "Apakah ada pendampingan atau training untuk tim kami?",
    id: "q6",
  },
];

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span style={{ color: "#1D42AB" }}>Pertanyaan</span>
          <span className="ml-3">Yang Sering Muncul</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq) => (
            <button
              key={faq.id}
              onClick={() =>
                setExpandedId(expandedId === faq.id ? null : faq.id)
              }
              className="text-left p-4 rounded-xl border-2 transition-all"
              style={{
                borderColor: "#9BEAEF",
                backgroundColor:
                  expandedId === faq.id ? "#E9EDFF" : "transparent",
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <p className="font-medium text-gray-800">{faq.question}</p>
                <ChevronDown
                  size={20}
                  className="mt-1 flex-shrink-0 transition-transform"
                  style={{
                    color: "#1D42AB",
                    transform:
                      expandedId === faq.id ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
