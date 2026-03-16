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
        <p className="font-accent text-lg uppercase tracking-[0.2em] text-burntOrange">About Us</p>
        <h2 className="mt-3 font-heading text-6xl uppercase">Our Story</h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-whiteSmoke/85">
          The Gripiz is an Italian-inspired dining experience where artisan pizza meets bold smoked grill.
Located in the heart of Bali, we combine authentic Italian flavors with the rich aroma of real wood fire.

Our pizzas are crafted from handmade dough and premium ingredients, while our grilled selections are cooked in a Jasper oven, a world class charcoal oven that blends traditional wood fire cooking with modern precision.

The result is simple: perfectly soft and chewy pizzas, tender juicy meats, and deep smoky flavors in every bite.

More than just a restaurant, The Gripiz is a place to slow down, share good food, and enjoy the vibrant spirit of Bali.
 
Wherever your Bali journey takes you, make sure it leads you to The Gripiz.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {highlights.map((word) => (
            <span
              key={word}
              className="rounded-full border border-burntOrange/60 bg-burntOrange/10 px-4 py-1 font-accent text-sm uppercase tracking-[0.12em] text-burntOrange"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
