import Image from 'next/image';

const highlights = ['Authentic', 'Delicious', 'Timeless'];

export default function About() {
  return (
    <section id="story" className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
      <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10 md:h-[500px]">
        <Image
          src="/images/interior.svg"
          alt="The Gripiz smoky grill and restaurant interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      <div>
        <p className="font-subheading text-lg uppercase tracking-[0.2em] text-burntOrange">About Us</p>
        <h2 className="mt-3 font-heading text-6xl uppercase">Our Story</h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-whiteSmoke/85">
          The Gripiz was born from a passion for smoked grill and pizza. Our founders explored restaurants across Bali and were inspired to create a place where people can enjoy authentic smoked grill, pizza, and good company in a warm, comfortable dining atmosphere.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {highlights.map((word) => (
            <span
              key={word}
              className="rounded-full border border-burntOrange/60 bg-burntOrange/10 px-4 py-1 font-subheading text-sm uppercase tracking-[0.12em] text-burntOrange"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
