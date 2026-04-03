'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type MenuImage = {
  src: string;
  category: string;
  name: string;
};

type MenuGalleryProps = {
  categories: string[];
  images: MenuImage[];
  categoryLabels: Record<string, string>;
};

export default function MenuGallery({ categories, images, categoryLabels }: MenuGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<MenuImage | null>(null);

  const filteredImages =
    activeCategory === 'all' ? images : images.filter((image) => image.category === activeCategory);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="mt-12">
      <div className="mb-10 flex flex-wrap items-center justify-center gap-6 border-b border-whiteSmoke/10 pb-3" data-testid="menu-category-filter">
        <button
          type="button"
          onClick={() => setActiveCategory('all')}
          className={`pb-2 text-sm uppercase tracking-wider transition ${
            activeCategory === 'all' ? 'border-b-2 border-burntOrange text-burntOrange' : 'text-whiteSmoke/70 hover:text-burntOrange'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`pb-2 text-sm uppercase tracking-wider transition ${
              activeCategory === category
                ? 'border-b-2 border-burntOrange text-burntOrange'
                : 'text-whiteSmoke/70 hover:text-burntOrange'
            }`}
          >
            {categoryLabels[category]}
          </button>
        ))}
      </div>

      <div className="columns-2 gap-4 md:columns-3 lg:columns-4" data-testid="menu-gallery">
        {filteredImages.map((image) => (
          <article key={image.src} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setSelectedImage(image)}
              className="group relative block w-full overflow-hidden rounded-xl text-left"
            >
              <Image
                src={image.src}
                alt={image.name}
                width={600}
                height={600}
                loading="lazy"
                sizes="(max-width:768px)50vw,(max-width:1200px)33vw,25vw"
                className="h-auto w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 transition duration-300 group-hover:opacity-100">
                <p className="font-heading text-2xl text-whiteSmoke">{image.name}</p>
              </div>
            </button>
          </article>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.name}
        >
          <div className="w-full max-w-3xl" onClick={(event) => event.stopPropagation()}>
            <div className="overflow-hidden rounded-2xl border border-whiteSmoke/15 bg-charcoal shadow-[0_20px_60px_rgba(0,0,0,0.65)]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.name}
                width={1400}
                height={1000}
                className="h-auto w-full object-cover"
              />
              <p className="px-6 py-4 text-center font-heading text-3xl text-whiteSmoke">{selectedImage.name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
