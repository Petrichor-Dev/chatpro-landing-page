export default function PremiumFeaturesSection() {
  const features = [
    "AI ChatBot Pintar 24/7",
    "Omnichannel Chat",
    "CRM & Dashboard Chat",
    "Multi-Agent & Kolaborasi Tim",
    "Ticketing & Pipeline Order",
    "Broadcast & Follow-Up Otomatis",
    "Reminder & Sistem Pembayaran Otomatis",
    "Analytics & Performance Tracking",
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">
          Fitur <span style={{ color: "#1D42AB" }}>Premium</span>
        </h2>
        <p
          className="text-center text-lg md:text-xl mb-12 text-gray-700"
          style={{ color: "#100D66" }}
        >
          Solusi Lengkap Customer Service Anda
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 md:p-8 text-center font-semibold text-gray-800 border-2 transition-all hover:shadow-md"
              style={{
                borderColor: "#9BEAEF",
                backgroundColor: "#FFFFFF",
              }}
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
