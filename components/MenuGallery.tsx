'use client';

import { useMemo, useState } from 'react';

type MenuImage = {
  src: string;
  alt: string;
  category: string;
};

type MenuGalleryProps = {
  categories: string[];
  images: MenuImage[];
  categoryLabels: Record<string, string>;
};

export default function MenuGallery({ categories, images, categoryLabels }: MenuGalleryProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages =
  activeCategory === 'all'
    ? images
    : images.filter((img) => img.category === activeCategory);
    return images.filter((image) => image.category === activeCategory);
  }, [activeCategory, images]);

  return (
    <div className="mt-14">
      <h3 className="font-accent text-2xl uppercase tracking-wide text-burntOrange">Menu Category Filter</h3>
      <div className="mb-8 mt-4 flex flex-wrap gap-3" data-testid="menu-category-filter">
        <button
          type="button"
          onClick={() => setActiveCategory('all')}
          aria-pressed={activeCategory === 'all'}
          className={`rounded-full border px-4 py-2 font-body text-sm uppercase tracking-wide transition ${
            activeCategory === 'all'
              ? 'border-burntOrange bg-burntOrange/20 text-burntOrange'
              : 'border-whiteSmoke/20 bg-charcoal/80 text-whiteSmoke/80 hover:border-burntOrange/70 hover:text-burntOrange'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={`rounded-full border px-4 py-2 font-body text-sm uppercase tracking-wide transition ${
              activeCategory === category
                ? 'border-burntOrange bg-burntOrange/20 text-burntOrange'
                : 'border-whiteSmoke/20 bg-charcoal/80 text-whiteSmoke/80 hover:border-burntOrange/70 hover:text-burntOrange'
            }`}
          >
            {categoryLabels[category]}
          </button>
        ))}
      </div>

      <h3 className="mb-4 font-accent text-2xl uppercase tracking-wide text-burntOrange">Menu Gallery</h3>
      <div className="columns-2 gap-4 md:columns-3 lg:columns-4" data-testid="menu-gallery">
        {filteredImages.map((image) => (
          <article
            key={image.src}
            className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-[0_12px_28px_rgba(0,0,0,0.45)]"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-auto w-full rounded-2xl transition duration-500 ease-out group-hover:scale-105"
            />
          </article>
        ))}
      </div>
    </div>
  );
}
