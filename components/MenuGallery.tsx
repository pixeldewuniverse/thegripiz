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

  return withoutPublicPrefix.startsWith('/') ? withoutPublicPrefix
    : `/${withoutPublicPrefix}`;
};

export default function MenuGallery({
  categories,
  images,
  categoryLabels
}: MenuGalleryProps) {

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<MenuImage | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(24);

  useEffect(() => {
    if (activeCategory !== 'all' && !categories.includes(activeCategory)) {
      setActiveCategory('all');
    }
  }, [activeCategory, categories]);

  const filteredImages =
    activeCategory === 'all'
      ? images
      : images.filter((img) => img.category === activeCategory);

  const visibleImages =
    activeCategory === 'all'
      ? filteredImages.slice(0, visibleCount)
      : filteredImages;

  return (
    <div className="mt-12">

      <h3 className="font-heading text-2xl uppercase tracking-wide text-burntOrange">
        Menu Category Filter
      </h3>

      {/* FILTER BUTTONS */}

      <div className="mt-6 mb-10 flex flex-wrap items-center justify-center gap-3">

        <button
          onClick={() => {
            setActiveCategory('all');
            setVisibleCount(24);
          }}
          className={`px-5 py-2 rounded-full border text-sm uppercase transition
          ${activeCategory === 'all'
            ? 'bg-burntOrange text-white border-burntOrange'
            : 'bg-charcoal text-whiteSmoke border-whiteSmoke/20 hover:border-burntOrange'
          }`}
        >
          All
        </button>

        {categories.map((category) => {

          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setVisibleCount(24);
              }}
              className={`px-5 py-2 rounded-full border text-sm uppercase transition
              ${isActive
                ? 'bg-burntOrange text-white border-burntOrange'
                : 'bg-charcoal text-whiteSmoke border-whiteSmoke/20 hover:border-burntOrange'
              }`}
            >
              {categoryLabels[category]}
            </button>
          );

        })}

      </div>

      {/* GALLERY */}

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4">

        {visibleImages.map((image) => (

          <article
            key={image.src}
            className="mb-4 break-inside-avoid"
          >

            <button
              onClick={() => setSelectedImage(image)}
              className="w-full"
            >

              <Image
                src={toPublicImagePath(image.src)}
                alt={image.name}
                width={600}
                height={600}
                className="rounded-xl w-full h-auto hover:scale-105 transition"
              />

            </button>

            <p className="mt-2 text-center text-sm text-whiteSmoke font-body">
              {image.name}
            </p>

          </article>

        ))}

      </div>

      {/* LOAD MORE */}

      {activeCategory === 'all' && visibleCount < filteredImages.length && (

        <div className="mt-10 flex justify-center">

          <button
            onClick={() => setVisibleCount((prev) => prev + 24)}
            className="px-6 py-3 rounded-full bg-burntOrange text-white hover:opacity-90 transition"
          >
            Load More
          </button>

        </div>

      )}

      {/* POPUP */}

      {selectedImage && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setSelectedImage(null)}
        >

          <div
            className="relative max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>

            <img
              src={toPublicImagePath(selectedImage.src)}
              alt={selectedImage.name}
              className="rounded-xl w-full"
            />

            <p className="mt-3 text-center text-lg font-heading text-white">
              {selectedImage.name}
            </p>

          </div>

        </div>

      )}

    </div>
  );
}
