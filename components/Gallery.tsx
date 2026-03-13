import Image from 'next/image';

const galleryImages = [
  { src: '/images/pizza-gallery.svg', label: 'pizza' },
  { src: '/images/grill-gallery.svg', label: 'grill' },
  { src: '/images/sandwich-gallery.svg', label: 'sandwich' },
  { src: '/images/pasta-gallery.svg', label: 'pasta' },
  { src: '/images/dessert-gallery.svg', label: 'dessert' },
  { src: '/images/atmosphere-gallery.svg', label: 'restaurant atmosphere' }
];

export default function Gallery() {
  return (
    <div id="gallery" className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="font-heading text-6xl uppercase">Food Gallery</h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((img) => (
          <div key={img.src} className="group relative h-64 overflow-hidden rounded-2xl">
            <Image src={img.src} alt={img.label} fill className="object-cover transition duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}
