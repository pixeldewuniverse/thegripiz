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

const toPublicImagePath = (src: string) => {
  const withoutDotPrefix = src.replace(/^\.\//, '');
  const withoutPublicPrefix = withoutDotPrefix.replace(/^\/?public\//, '/');

  return withoutPublicPrefix.startsWith('/') ? withoutPublicPrefix : `/${withoutPublicPrefix}`;
};

export default function MenuGallery({ categories, images, categoryLabels }: MenuGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<MenuImage | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(24);

  useEffect(() => {
    if (activeCategory !== 'all' && !categories.includes(activeCategory)) {
      setActiveCategory('all');
    }
  }, [activeCategory, categories]);

  const filteredImages =
    activeCategory === 'all' ? images : images.filter((img) => img.category === activeCategory);

  const visibleImages =
    activeCategory === 'all' ? filteredImages.slice(0, visibleCount) : filteredImages;

  const renderButton = (label: string, value: string) => {
    const isActive = activeCategory === value;

    return (
      <button
        key={value}
        type="button"
        onClick={() => {
          setActiveCategory(value);
          setVisibleCount(24);
        }}
        aria-pressed={isActive}
        className={`font-body px-5 py-2 rounded-full border text-sm font-medium uppercase tracking-wide transition-all duration-300
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

  return (
    <div className="mt-12">
      <h3 className="font-heading text-2xl uppercase tracking-wide text-burntOrange">Menu Category Filter</h3>
      <div
        className="mt-6 mb-10 flex flex-wrap items-center justify-center gap-3 overflow-x-auto pb-2"
        data-testid="menu-category-filter"
      >
        {renderButton('All', 'all')}

        {categories.map((category) => renderButton(categoryLabels[category], category))}
      </div>

      <div className="w-full columns-2 gap-4 md:columns-3 lg:columns-4" data-testid="menu-gallery">
        {visibleImages.map((image) => (
          <article
            key={image.src}
            className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-[0_12px_28px_rgba(0,0,0,0.45)]"
          >
            <button type="button" onClick={() => setSelectedImage(image)} className="w-full text-left">
              <Image
                src={toPublicImagePath(image.src)}
                alt={image.name}
                width={600}
                height={600}
                loading="lazy"
                sizes="(max-width:768px) 100vw, 33vw"
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </button>
            <p className="mt-2 text-center font-body text-sm text-whiteSmoke">{image.name}</p>
          </article>
        ))}
      </div>

      {activeCategory === 'all' && visibleCount < filteredImages.length && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 24)}
            className="px-6 py-3 rounded-full bg-burntOrange text-white font-body hover:opacity-90 transition"
          >
            Load More
          </button>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-lg w-full" onClick={(event) => event.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white text-2xl"
              aria-label="Close modal"
            >
              ✕
            </button>

            <img
              src={toPublicImagePath(selectedImage.src)}
              alt={selectedImage.name}
              className="rounded-xl w-full"
            />

            <p className="mt-3 text-center text-lg font-heading text-white">{selectedImage.name}</p>
          </div>
        </div>
      )}
    </div>
  );
}
