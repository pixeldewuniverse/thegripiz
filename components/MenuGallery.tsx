'use client';

import Image from 'next/image';
<<<<<<< codex/update-menu-layout-to-masonry-style-gv95e8
import { useMemo, useState } from 'react';
=======
import { useEffect, useState } from 'react';
>>>>>>> main

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

<<<<<<< codex/update-menu-layout-to-masonry-style-gv95e8
export default function MenuGallery({ categories, images, categoryLabels }: MenuGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') {
      return images;
    }

    return images.filter((image) => image.category === activeCategory);
  }, [activeCategory, images]);

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
=======
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
>>>>>>> main
          }`}
        >
          All
        </button>
<<<<<<< codex/update-menu-layout-to-masonry-style-gv95e8
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

      <div className="columns-2 gap-4 md:columns-3 lg:columns-4" data-testid="menu-gallery">
        {filteredImages.map((image) => (
          <article key={image.src} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl">
            <div className="group overflow-hidden rounded-2xl shadow-[0_12px_28px_rgba(0,0,0,0.45)]">
              <Image
                src={image.src}
                alt={image.name}
                width={600}
                height={600}
                loading="lazy"
                sizes="(max-width:768px)50vw,(max-width:1200px)33vw,25vw"
                className="h-auto w-full rounded-2xl object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-2 text-center text-sm text-whiteSmoke/80">{image.name}</p>
          </article>
        ))}
      </div>
=======

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

>>>>>>> main
    </div>
  );
}
