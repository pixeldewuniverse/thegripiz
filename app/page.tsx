import FadeInSection from '@/components/FadeInSection';
import Footer from '@/components/Footer';
import FromFire from '@/components/FromFire';
import FoodGallery from '@/components/FoodGallery';
import Hero from '@/components/Hero';
import Location from '@/components/Location';
import MenuSection from '@/components/MenuSection';
import Navbar from '@/components/Navbar';
import SignatureMenu from '@/components/SignatureMenu';
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
      <FadeInSection id="menu">
        <SignatureMenu />
      </FadeInSection>
      <FadeInSection>
        <FromFire />
      </FadeInSection>
      <FadeInSection>
        <MenuSection />
      </FadeInSection>
      <FadeInSection>
        <FoodGallery />
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
