import Navbar from "./components/navbar";
import HeroSection from "./components/hero-section";
import FeatureSection from "./components/feature-section";
import BusinessTypesSection from "./components/business-types-section";
import TrustedBySection from "./components/trusted-by-section";
import KataPengguna from "./components/kata-pengguna";
import Konsultasi1On1 from "./components/konsultasi-1-on-1";
import PaketBerlangganan from "./components/paket-berlangganan";
import MediaCoverageSection from "./components/media-coverage-section";
import FooterSection from "./components/footer-section";
import FAQSection from "./components/faq-section";
import SecuritySection from "./components/security-section";
import PremiumFeaturesSection from "./components/premium-features-section";
import EnterpriseBenefitsSection from "./components/enterprise-benefits-section";
import CTASection from "./components/cta-section";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <BusinessTypesSection />
      <EnterpriseBenefitsSection />
      <PremiumFeaturesSection />
      <TrustedBySection />
      <SecuritySection />
      <KataPengguna />
      <MediaCoverageSection />
      <Konsultasi1On1 />
      <PaketBerlangganan />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
