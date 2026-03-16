import Image from 'next/image';

type SignatureItem = {
  name: string;
  description: string;
  image: string;
};

const signatureItems: SignatureItem[] = [
  {
    name: 'Sun Pizza',
    description: 'Wood-fired pizza with bright tomato sauce, creamy mozzarella, and ember-charred crust.',
    image: '/images/menu/pizza/sun-pizza.jpg'
  },
  {
    name: 'Texas Smoked Grilled Platter',
    description: 'Smokehouse-style grilled meats with bold BBQ glaze, pickles, and rustic fire-roasted sides.',
    image: '/images/menu/steak/texas.jpg'
  },
  {
    name: 'Nasi Goreng Seafood Kecombrang',
    description: 'Wok-seared Indonesian fried rice with seafood, torch ginger aroma, and smoky chili accents.',
    image: '/images/menu/nasi/nasi-goreng-seafood-kecombrang.jpg'
  },
  {
    name: 'Nasi Padang Smoked Chicken',
    description: 'Fragrant rice served with tender smoked chicken and rich Indonesian spices layered with fire.',
    image: '/images/menu/nasi/nasi-padang-smoked-chicken.jpg'
  }
];

export default function SignatureMenu() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="font-heading text-5xl uppercase text-whiteSmoke md:text-6xl">Signature Menu</h2>
      <p className="mt-2 font-body text-xl text-whiteSmoke/75">
        Dark, fire-kissed, and smoke-infused creations made for a premium dining experience.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {signatureItems.map((item) => (
          <article
            key={item.name}
            className="group overflow-hidden rounded-2xl border border-burntOrange/30 bg-smoke/90 shadow-[0_0_0_1px_rgba(255,106,43,0.1),0_15px_35px_rgba(0,0,0,0.55)] transition duration-300 hover:-translate-y-1 hover:border-burntOrange/60 hover:shadow-fire"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/25 to-transparent" />
            </div>

            <div className="space-y-3 p-5">
              <h3 className="font-accent text-2xl leading-tight text-burntOrange">{item.name}</h3>
              <p className="text-sm leading-relaxed text-whiteSmoke/80">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
