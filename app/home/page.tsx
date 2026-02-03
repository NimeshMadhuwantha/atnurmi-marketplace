import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import WhyAtnurmiSection from '../components/WhyAtnurmiSection';
import ProductsSection from '../components/ProductsSection';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <WhyAtnurmiSection />
      <ProductsSection />
      <CTASection />
    </main>
  );
}
