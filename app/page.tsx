import FadeInSection from '@/components/FadeInSection';
import Footer from '@/components/Footer';
import FromFire from '@/components/FromFire';
import Hero from '@/components/Hero';
import Location from '@/components/Location';
import Navbar from '@/components/Navbar';
import MenuSection from '@/components/MenuSection';
import Experience from '@/components/Experience';
import About from '@/components/About';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="bg-ember">
      <Navbar />
      <Hero />
      <FadeInSection>
        <About />
      </FadeInSection>
      <FadeInSection>
        <FromFire />
      </FadeInSection>
      <FadeInSection id="menu">
        <MenuSection />
      </FadeInSection>
      <FadeInSection>
        <Experience />
      </FadeInSection>
      <FadeInSection>
        <Location />
      </FadeInSection>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
