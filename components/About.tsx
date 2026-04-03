import Image from 'next/image';

const highlights = ['WOOD', 'FIRE', 'SMOKED'];

export default function About() {
  return (
    <section id="story" className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
      <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10 md:h-[500px]">
        <Image
          src="/public/outdoor.jpg"
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
         The Gripiz is an Italian-concept restaurant
specializing in artisan pizza and smoke grill.
Located in Bali, The Gripiz combines authentic
Italian flavors with bold smoked creations,
delivering a unique dining experience. Our
pizzas are crafted with quality ingredients and
handmade dough, while our grilled selections
are cooked using a Jasper oven a premium
charcoal oven that blends natural wood fire
with advanced technology.
The Jasper oven reaches high temperatures,
allowing the meat to cook faster while locking
in its juices, resulting in tender, flavorful, and
perfectly smoked dishes with a distinctive
aroma. This is one of the key advantages that
sets The Gripiz apart.
More than just a restaurant, The Gripiz offers a
vibrant yet comfortable atmosphere where
guests can enjoy great food, warm hospitality,
and memorable moments.
Wherever your holiday takes you in Bali, it’s
not complete without a visit to The Gripiz
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
