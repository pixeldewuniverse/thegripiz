import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import MenuGallery from '@/components/MenuGallery';

const menuRoot = path.join(process.cwd(), 'public', 'images', 'menu');

const menuImages = fs
  .readdirSync(menuRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .flatMap((categoryDir) => {
    const categoryPath = path.join(menuRoot, categoryDir.name);

    return fs
      .readdirSync(categoryPath, { withFileTypes: true })
      .filter((file) => file.isFile() && /\.(jpg|jpeg|png|webp)$/i.test(file.name))
      .map((file) => ({
        src: `/images/menu/${categoryDir.name}/${file.name}`,
        alt: `${categoryDir.name.replace(/-/g, ' ')} menu item`
      }));
  });

const menuRoot = path.join(process.cwd(), 'public', 'images', 'menu');

const getCategoryLabel = (category: string) => {
  const customLabels: Record<string, string> = {
    'burger-buns': 'Burger & Buns'
  };

  if (customLabels[category]) {
    return customLabels[category];
  }

  return category
    .split('-')
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(' ');
};

const categories = fs
  .readdirSync(menuRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort((a, b) => a.localeCompare(b));

const categoryLabels = Object.fromEntries(categories.map((category) => [category, getCategoryLabel(category)]));

const menuImages = categories.flatMap((category) => {
  const categoryPath = path.join(menuRoot, category);

  return fs
    .readdirSync(categoryPath, { withFileTypes: true })
    .filter((file) => file.isFile() && /\.(jpg|jpeg|png|webp)$/i.test(file.name))
    .map((file) => ({
      src: `/images/menu/${category}/${file.name}`,
      alt: `${getCategoryLabel(category)} menu item`,
      category
    }));
});

export default function SignatureMenu() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="font-heading text-5xl uppercase text-whiteSmoke md:text-6xl">Menu Gallery</h2>
      <p className="mt-2 font-body text-xl text-whiteSmoke/75">
        Explore The Gripiz menu in a fire-lit masonry gallery inspired by our dark restaurant aesthetic.
      </p>

      <div className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4">
        {menuImages.map((image) => (
          <article
            key={image.src}
            className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-burntOrange/20 bg-smoke/80 shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-auto w-full transition duration-500 ease-out group-hover:scale-105"
            />
          </article>
        ))}
      </div>

      <MenuGallery categories={categories} images={menuImages} categoryLabels={categoryLabels} />
    </section>
  );
}
