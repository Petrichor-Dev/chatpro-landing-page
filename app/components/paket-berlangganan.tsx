export default function PaketBerlangganan() {
  const packages = [
    {
      name: "Basic",
      price: "299.000",
      period: "/Bulan",
      popular: false,
      features: [
        "1.000 pesan per bulan",
        "Basic AI responses",
        "WhatsApp integration",
        "Email support",
        "Basic analytics",
      ],
      buttonText: "Mulai Sekarang",
      buttonVariant: "outline",
    },
    {
      name: "Premium",
      price: "799.000",
      period: "/Bulan",
      popular: true,
      features: [
        "10.000 pesan per bulan",
        "Advanced AI responses",
        "Multi-platform integration",
        "Priority support",
        "Advanced analytics",
        "Custom training",
        "API access",
      ],
      buttonText: "Mulai Sekarang",
      buttonVariant: "solid",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      popular: false,
      features: [
        "Unlimited messages",
        "Custom AI training",
        "White label solution",
        "Dedicated support",
        "Advanced integrations",
        "Custom features",
        "SLA guarantee",
      ],
      buttonText: "Hubungi Kami",
      buttonVariant: "outline",
    },
    {
      name: "Advanced",
      price: "999.000",
      period: "/Bulan",
      popular: false,
      features: [
        "Unlimited messages",
        "Custom AI training",
        "White label solution",
        "Dedicated support",
        "Advanced integrations",
        "Custom features",
        "SLA guarantee",
      ],
      buttonText: "Hubungi Kami",
      buttonVariant: "outline",
    },
  ];

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">
            Paket <span className="text-cyan-400">Berlangganan</span>
            <span className="text-cyan-400 ml-1">✨</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Pilih Paket Yang Sesuai Dengan Kebutuhan Bisnis Anda
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                pkg.popular
                  ? "border-2 border-cyan-400 bg-white shadow-lg scale-105"
                  : "border border-gray-200 bg-gray-50 hover:shadow-md"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Populer
                </div>
              )}

              {/* Package Name and Price */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {pkg.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">
                  Rp {pkg.price}
                </span>
                {pkg.period && (
                  <span className="text-gray-600 text-sm ml-1">
                    {pkg.period}
                  </span>
                )}
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="text-green-500 mt-0.5 flex-shrink-0">
                      <svg
                        className="w-5 h-5"
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
                    <span
                      className={`text-sm ${
                        pkg.popular ? "text-gray-700" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? "bg-gradient-to-r from-blue-600 to-cyan-400 text-white hover:shadow-lg"
                    : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
              >
                {pkg.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
