"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Check,
  Menu,
  X,
  Clock,
  BarChart3,
  Bot,
  Smartphone,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({} as any);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev: any) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                ChatPro
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#features"
                  className="hover:text-green-400 transition-colors"
                >
                  Fitur
                </a>
                <a
                  href="#demo"
                  className="hover:text-green-400 transition-colors"
                >
                  Demo
                </a>
                <a
                  href="#pricing"
                  className="hover:text-green-400 transition-colors"
                >
                  Harga
                </a>
                <a
                  href="#contact"
                  className="hover:text-green-400 transition-colors"
                >
                  Kontak
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 hover:text-green-400"
              >
                Fitur
              </a>
              <a href="#demo" className="block px-3 py-2 hover:text-green-400">
                Demo
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 hover:text-green-400"
              >
                Harga
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 hover:text-green-400"
              >
                Kontak
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-green-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ${
                isVisible.hero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span className="bg-gradient-to-r from-white via-green-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
                Tingkatkan Layanan Pelanggan Anda
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">
                dengan WhatsApp AI Chatbot
              </span>
            </h1>

            <p
              className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
                isVisible.hero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Otomatisasi customer service 24/7 dengan teknologi AI terdepan.
              Tingkatkan kepuasan pelanggan dan efisiensi bisnis Anda.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
                isVisible.hero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105"
              >
                Coba Sekarang
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
              >
                Lihat Demo
              </Button>
            </div>
          </div>

          {/* Hero Visual Placeholder */}
          <div
            className={`mt-16 transition-all duration-1000 delay-700 ${
              isVisible.hero
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-full max-w-4xl mx-auto h-64 md:h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
              <div className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="absolute top-4 left-10 w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="absolute top-4 left-16 w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Keunggulan Utama
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Solusi AI chatbot terdepan untuk meningkatkan pengalaman pelanggan
              Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Bot className="h-12 w-12 text-green-400" />,
                title: "AI Cerdas",
                description:
                  "Teknologi NLP terdepan untuk memahami dan merespons pelanggan dengan akurat",
              },
              {
                icon: <Clock className="h-12 w-12 text-blue-400" />,
                title: "24/7 Otomatis",
                description:
                  "Layanan pelanggan tanpa henti, siap melayani kapan saja tanpa batas waktu",
              },
              {
                icon: <BarChart3 className="h-12 w-12 text-purple-400" />,
                title: "Analytics Mendalam",
                description:
                  "Dashboard lengkap dengan insights dan laporan performa yang detail",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`bg-gray-800/50 border-gray-700 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-green-500/10 ${
                  isVisible.features
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-gray-700/50 rounded-full">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Section */}
      <section
        id="demo"
        className="py-20 bg-gradient-to-r from-gray-900/50 to-blue-900/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible.demo
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                Siap untuk Melihat Demo?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Dapatkan demo personal dan konsultasi gratis untuk kebutuhan
                bisnis Anda
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Nama Lengkap"
                    className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                  />
                  <Input
                    placeholder="Email"
                    type="email"
                    className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <Input
                  placeholder="Nama Perusahaan"
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                />
                <Input
                  placeholder="Nomor WhatsApp"
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                />
                <Textarea
                  placeholder="Ceritakan kebutuhan bisnis Anda..."
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 min-h-[120px]"
                />
                <Button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-3 text-lg font-semibold">
                  Minta Demo Gratis
                </Button>
              </form>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible.demo
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10"></div>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-700 rounded-full"></div>
                  <Smartphone className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-24 w-24 text-green-400/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Testimoni Klien
            </h2>
            <p className="text-xl text-gray-300">
              Dengarkan pengalaman klien yang telah merasakan manfaatnya
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible.testimonials
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-8 border-l-green-400 border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible.testimonials
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="grid grid-cols-4 gap-4 mb-8">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full border border-gray-600"
                  ></div>
                ))}
              </div>
              <blockquote className="text-xl text-gray-300 italic mb-6">
                ChatPro AI telah mengubah cara kami melayani pelanggan. Response
                time meningkat 300% dan kepuasan pelanggan naik drastis.
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-white">Sarah Johnson</p>
                  <p className="text-gray-400">CEO, TechCorp Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features Grid */}
      <section
        id="premium-features"
        className="py-20 bg-gradient-to-r from-gray-900/50 to-blue-900/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Fitur Premium
            </h2>
            <p className="text-xl text-gray-300">
              Solusi lengkap untuk semua kebutuhan customer service Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Multi-Language Support",
              "Advanced Analytics",
              "Custom Integration",
              "Priority Support",
              "White Label Solution",
              "API Access",
              "Custom Training",
              "Enterprise Security",
            ].map((feature, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-500 hover:scale-105 ${
                  isVisible["premium-features"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 mb-4 relative overflow-hidden hover:border-green-400/50 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5"></div>
                </div>
                <h3 className="text-lg font-semibold text-white">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy & Tools Section */}
      <section id="strategy" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible.strategy
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                Dashboard & Analytics
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Kelola dan monitor performa chatbot Anda dengan dashboard yang
                intuitif dan analytics yang mendalam
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <Check className="h-5 w-5 text-green-400 mr-3" />
                  Real-time conversation monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="h-5 w-5 text-green-400 mr-3" />
                  Performance metrics & KPI tracking
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="h-5 w-5 text-green-400 mr-3" />
                  Customer satisfaction analytics
                </li>
              </ul>
              <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3">
                Lihat Dashboard
              </Button>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible.strategy
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="space-y-6">
                <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
                  <div className="absolute top-4 left-4 right-4 h-8 bg-gray-700/50 rounded"></div>
                  <div className="absolute top-16 left-4 right-4 bottom-4 grid grid-cols-3 gap-2">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="bg-gray-700/30 rounded"></div>
                    ))}
                  </div>
                </div>
                <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1-on-1 Consultation Section */}
      <section
        id="consultation"
        className="py-20 bg-gradient-to-r from-gray-900/50 to-blue-900/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible.consultation
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="flex justify-center space-x-8">
                <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full"></div>
                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full"></div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible.consultation
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                Konsultasi 1-on-1
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Dapatkan konsultasi personal dengan expert kami untuk
                memaksimalkan potensi bisnis Anda dengan AI chatbot
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <Check className="h-5 w-5 text-green-400 mr-3" />
                  Analisis kebutuhan bisnis mendalam
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="h-5 w-5 text-green-400 mr-3" />
                  Strategi implementasi yang tepat
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="h-5 w-5 text-green-400 mr-3" />
                  Panduan optimalisasi ROI
                </li>
              </ul>
              <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3">
                Jadwalkan Konsultasi
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Paket Berlangganan
            </h2>
            <p className="text-xl text-gray-300">
              Pilih paket yang sesuai dengan kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "Rp 299.000",
                period: "/bulan",
                features: [
                  "1.000 pesan per bulan",
                  "Basic AI responses",
                  "WhatsApp integration",
                  "Email support",
                  "Basic analytics",
                ],
              },
              {
                name: "Premium",
                price: "Rp 799.000",
                period: "/bulan",
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
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                features: [
                  "Unlimited messages",
                  "Custom AI training",
                  "White label solution",
                  "Dedicated support",
                  "Advanced integrations",
                  "Custom features",
                  "SLA guarantee",
                ],
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular
                    ? "border-green-400 scale-105"
                    : "border-gray-700"
                } bg-gray-800/50 hover:border-green-400/50 transition-all duration-500 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Paling Populer
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-4xl font-bold text-green-400 mb-1">
                      {plan.price}
                    </div>
                    <div className="text-gray-400">{plan.period}</div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-3 ${
                      plan.popular
                        ? "bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                        : "bg-gray-700 hover:bg-gray-600"
                    } text-white`}
                  >
                    {plan.name === "Enterprise"
                      ? "Hubungi Kami"
                      : "Mulai Sekarang"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        className="py-20 bg-gradient-to-r from-green-900/30 to-blue-900/30"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible.cta
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Siap Bergabung?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Mulai transformasi digital customer service Anda hari ini dengan
              ChatPro AI
            </p>

            <Card className="bg-gray-800/50 border-green-400/50 p-8 mb-8">
              <CardContent className="p-0">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    Rp 500.000
                  </div>
                  <div className="text-gray-400 mb-4">
                    Paket Premium - Bulan Pertama
                  </div>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-center text-gray-300">
                      <Check className="h-4 w-4 text-green-400 mr-2" />
                      Setup & konfigurasi gratis
                    </li>
                    <li className="flex items-center text-gray-300">
                      <Check className="h-4 w-4 text-green-400 mr-2" />
                      Training AI sesuai bisnis Anda
                    </li>
                    <li className="flex items-center text-gray-300">
                      <Check className="h-4 w-4 text-green-400 mr-2" />
                      Support 24/7 bulan pertama
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-12 py-4 text-xl font-semibold shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105"
            >
              Mulai Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
                WhatsApp AI Bot
              </div>
              <p className="text-gray-400 mb-4">
                Solusi AI chatbot terdepan untuk meningkatkan customer service
                bisnis Anda.
              </p>
              <div className="flex space-x-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gray-700 rounded-full"
                  ></div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Produk</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Fitur
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Harga
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Demo
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Karir
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Kontak
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Dokumentasi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Status
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2024 WhatsApp AI Bot. All rights reserved.
              </p>
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full"></div>
                  <div>
                    <p className="text-white font-semibold">Endorsed by</p>
                    <p className="text-gray-400 text-sm">Tech Leaders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
