import Image from 'next/image';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

type GalleryItem = {
  src: string;
  label: string;
};

const MENU_IMAGES_DIR = path.join(process.cwd(), 'public', 'images', 'menu');
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

function toLabel(filePath: string): string {
  return path
    .basename(filePath, path.extname(filePath))
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function getMenuGalleryImages(dir: string, baseDir = dir): Promise<GalleryItem[]> {
  const entries = await readdir(dir, { withFileTypes: true });

  const nested = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        return getMenuGalleryImages(fullPath, baseDir);
      }

      if (!entry.isFile()) {
        return [];
      }

      const extension = path.extname(entry.name).toLowerCase();
      if (!IMAGE_EXTENSIONS.has(extension)) {
        return [];
      }

      const relativePath = path.relative(baseDir, fullPath).split(path.sep).join('/');
      return [
        {
          src: `/images/menu/${relativePath}`,
          label: toLabel(entry.name)
        }
      ];
    })
  );

  return nested.flat().sort((a, b) => a.src.localeCompare(b.src));
}

export default async function FoodGallery() {
  const galleryImages = await getMenuGalleryImages(MENU_IMAGES_DIR);

  return (
    <section id="gallery" className="bg-[#111111] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-heading text-5xl uppercase text-whiteSmoke md:text-6xl">Food Gallery</h2>
        <p className="mt-2 font-subheading text-xl text-whiteSmoke/75">
          Every fire-crafted menu visual, curated automatically from our smokehouse kitchen archive.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {galleryImages.map((img) => (
            <article
              key={img.src}
              className="group relative overflow-hidden rounded-2xl border border-burntOrange/20 bg-[#1E1E1E] shadow-[0_0_0_1px_rgba(255,106,43,0.08),0_18px_38px_rgba(0,0,0,0.5)]"
            >
              <div className="relative h-72">
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/10 transition duration-300 group-hover:bg-black/45" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4">
                  <p className="font-subheading text-lg text-whiteSmoke">{img.label}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
