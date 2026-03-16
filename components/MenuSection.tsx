import fs from 'node:fs';
import path from 'node:path';
import MenuGallery from '@/components/MenuGallery';

type MenuImage = {
  src: string;
  category: string;
  name: string;
};

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

const menuImages: MenuImage[] = categories.flatMap((category) => {
  const categoryPath = path.join(menuRoot, category);

  return fs
    .readdirSync(categoryPath, { withFileTypes: true })
    .filter((file) => file.isFile() && /\.(jpg|jpeg|png|webp)$/i.test(file.name))
    .map((file) => {
      const rawName = file.name.replace(/\.(jpg|jpeg|png|webp)$/i, '');
      const formattedName = rawName
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());

      return {
        src: `/images/menu/${category}/${file.name}`,
        category,
        name: formattedName
      };
    });
});

export default function MenuSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="font-heading text-5xl uppercase text-whiteSmoke md:text-6xl">Menu Gallery</h2>
      <p className="mt-2 font-body text-xl text-whiteSmoke/75">
        Browse our fire-kissed menu by category in a clean masonry gallery designed for fast mobile loading.
      </p>

      <MenuGallery categories={categories} images={menuImages} categoryLabels={categoryLabels} />
    </section>
  );
}
