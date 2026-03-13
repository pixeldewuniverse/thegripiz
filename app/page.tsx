import FadeInSection from '@/components/FadeInSection';
import Footer from '@/components/Footer';
import FromFire from '@/components/FromFire';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Location from '@/components/Location';
import MenuList from '@/components/MenuList';
import Navbar from '@/components/Navbar';
import SignatureMenu from '@/components/SignatureMenu';
import Experience from '@/components/Experience';

export default function Home() {
  return (
    <main className="bg-ember">
      <Navbar />
      <Hero />
      <FadeInSection id="menu">
        <SignatureMenu />
      </FadeInSection>
      <FadeInSection>
        <FromFire />
      </FadeInSection>
      <FadeInSection>
        <MenuList />
      </FadeInSection>
      <FadeInSection>
        <Gallery />
      </FadeInSection>
      <FadeInSection>
        <Experience />
      </FadeInSection>
      <FadeInSection>
        <Location />
      </FadeInSection>
      <Footer />
    </main>
  );
}
