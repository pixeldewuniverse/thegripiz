'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type MenuImage = {
  src: string;
  category: string;
};

type MenuGalleryProps = {
  categories: string[];
  images: MenuImage[];
  categoryLabels: Record<string, string>;
};

export default function MenuGallery({ categories, images, categoryLabels }: MenuGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    console.log('Menu images:', images);
  }, [images]);

  useEffect(() => {
    if (activeCategory !== 'all' && !categories.includes(activeCategory)) {
      setActiveCategory('all');
    }
  }, [activeCategory, categories]);

  const filteredImages =
    activeCategory === 'all' ? images : images.filter((img) => img.category === activeCategory);

  return (
    <div className="mt-12">
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

      <div className="w-full columns-2 gap-4 md:columns-3 lg:columns-4" data-testid="menu-gallery">
        {filteredImages.map((image) => (
          <article
            key={image.src}
            className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-[0_12px_28px_rgba(0,0,0,0.45)]"
          >
            <Image
              src={image.src}
              alt="menu item"
              width={600}
              height={600}
              loading="lazy"
              sizes="(max-width:768px)50vw,(max-width:1200px)33vw,25vw"
              className="w-full h-auto object-cover transition hover:scale-105"
            />
          </article>
        ))}
      </div>
    </div>
  );
}
