import Image from 'next/image';

const spaces = [
  '/images/interior.svg',
  '/images/outdoor-seating.svg',
  '/images/dining-space.svg'
];

export default function Experience() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="font-heading text-6xl uppercase">Restaurant Experience</h2>
      <p className="mt-3 font-subheading text-2xl text-whiteSmoke/85">Comfortable place to dine with friends.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {spaces.map((src) => (
          <div key={src} className="relative h-64 overflow-hidden rounded-2xl">
            <Image src={src} alt="The Gripiz dining ambiance" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
