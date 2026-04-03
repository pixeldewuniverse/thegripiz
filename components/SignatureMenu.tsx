import Image from 'next/image';

type SignatureItem = {
  name: string;
  image: string;
};

const signatureItems: SignatureItem[] = [
  { name: 'Sun Pizza', image: '/images/menu/pizza/sun-pizza.jpg' },
  { name: 'Texas Smoked Grilled Platter', image: '/images/menu/steak/texas.jpg' },
  {
    name: 'Nasi Goreng Seafood Kecombrang',
    image: '/images/menu/nasi/nasi-goreng-seafood-kecombrang.jpg'
  },
  {
    name: 'Nasi Padang Smoked Chicken',
    image: '/images/menu/nasi/nasi-padang-smoked-chicken.jpg'
  }
];

export default function SignatureMenu() {
  return (
    <section className="mb-16">
      <div className="mb-8">
        <p className="font-accent text-sm uppercase tracking-[0.25em] text-burntOrange">Signature Selection</p>
        <h2 className="mt-2 font-heading text-5xl uppercase text-whiteSmoke md:text-6xl">Signature Menu</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {signatureItems.map((item) => (
          <article key={item.name} className="relative group overflow-hidden rounded-2xl">
            <Image
              src={item.image}
              alt={item.name}
              width={1200}
              height={900}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/60" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="font-heading text-3xl text-whiteSmoke">{item.name}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
