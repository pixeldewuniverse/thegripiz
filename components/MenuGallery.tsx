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

const toPublicImagePath = (src: string) => {
  const withoutDotPrefix = src.replace(/^\.\//, '');
  const withoutPublicPrefix = withoutDotPrefix.replace(/^\/?public\//, '/');

  return withoutPublicPrefix.startsWith('/') ? withoutPublicPrefix : `/${withoutPublicPrefix}`;
};

export default function MenuGallery({ categories, images, categoryLabels }: MenuGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const renderButton = (label: string, value: string) => {
    const isActive = activeCategory === value;

    return (
      <button
        key={value}
        type="button"
        onClick={() => setActiveCategory(value)}
        aria-pressed={isActive}
        className={`px-5 py-2 rounded-full border text-sm font-medium uppercase tracking-wide transition-all duration-300
        ${
          isActive
            ? 'bg-burntOrange text-white border-burntOrange shadow-lg'
            : 'bg-charcoal/80 text-whiteSmoke border-whiteSmoke/20 hover:border-burntOrange hover:text-burntOrange hover:bg-charcoal'
        }`}
      >
        {label}
      </button>
    );
  };

  const filteredImages =
    activeCategory === 'all'
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div className="mt-12">
      <div className="mt-6 mb-10 flex flex-wrap items-center justify-center gap-3">
        {renderButton('All', 'all')}

        {categories.map((category) =>
          renderButton(categoryLabels[category], category)
        )}
      </div>

      <div className="w-full columns-2 gap-4 md:columns-3 lg:columns-4">
        {filteredImages.map((image) => (
          <article
            key={image.src}
            className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl"
          >
            <Image
              src={image.src}
              alt="menu item"
              width={600}
              height={600}
              loading="lazy"
              className="h-auto w-full object-cover"
            />
          </article>
        ))}
      </div>
    </div>
  );
}
