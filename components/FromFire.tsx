import Image from 'next/image';

export default function FromFire() {
  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-2 md:items-center">
      <div className="relative h-80 overflow-hidden rounded-2xl md:h-[480px]">
        <Image src="/images/brisket.svg" alt="Smoked brisket" fill className="object-cover" />
      </div>
      <div>
        <p className="font-subheading text-lg uppercase tracking-[0.2em] text-burntOrange">Showcase</p>
        <h2 className="mt-3 font-heading text-6xl uppercase">From The Fire</h2>
        <p className="mt-5 max-w-xl text-lg text-whiteSmoke/85">
          Slow cooked BBQ with authentic smoky flavor. Each cut is grilled with precision and served with premium casual smokehouse vibes.
        </p>
        <a href="#menu-list" className="btn-primary mt-8">
          See Menu
        </a>
      </div>
    </div>
  );
}
