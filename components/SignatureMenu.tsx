import Image from 'next/image';
import type { FeatureCard } from './types';

const cards: FeatureCard[] = [
  {
    title: 'Smoked Grill',
    description: 'Slow smoked meats and BBQ specialties.',
    image: '/images/smoked-grill.svg'
  },
  {
    title: 'Pizza',
    description: 'Authentic pizza with Italian dough.',
    image: '/images/pizza.svg'
  },
  {
    title: 'Sandwich',
    description: 'Extraordinary smoked sandwich creations.',
    image: '/images/sandwich.svg'
  }
];

export default function SignatureMenu() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="font-heading text-6xl uppercase text-whiteSmoke">Signature Menu</h2>
      <p className="mt-2 font-subheading text-xl text-whiteSmoke/75">
        Fire-kissed flavors crafted for tourists, locals, and food bloggers in Bali.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <article key={card.title} className="card-fire group overflow-hidden">
            <div className="relative h-52 overflow-hidden rounded-xl">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="mt-5 font-subheading text-3xl text-burntOrange">{card.title}</h3>
            <p className="mt-2 text-whiteSmoke/85">{card.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
