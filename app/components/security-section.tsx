export default function SecuritySection() {
  const cards = [
    {
      title: "Arsitektur Multi-Tenant",
      description: "Data tiap user terisolasi, backup otomatis, siap scale.",
      titleColor: "#1D42AB",
    },
    {
      title: "Kinerja Stabil",
      description: "Uptime target tinggi, pengujian beban, dan monitoring.",
      titleColor: "#1D42AB",
    },
    {
      title: "Enterprise-Ready",
      description:
        "SLA, SSO, on-premise/private cloud & kepatuhan dapat disesuaikan.",
      titleColor: "#1D42AB",
    },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-tr from-blue-50 via-purple-50 to-blue-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Keamanan, Stabilitas & Kepatuhan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 md:p-8 text-center shadow-sm"
              style={{ backgroundColor: "#ffffff" }}
            >
              <h3
                className="text-xl md:text-2xl font-bold mb-3"
                style={{ color: card.titleColor }}
              >
                {card.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
