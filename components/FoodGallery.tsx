import Image from 'next/image';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

type GalleryImage = {
  src: string;
  alt: string;
};

const MENU_ROOT = path.join(process.cwd(), 'public', 'images', 'menu');
const VALID_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

function humanizeName(fileName: string) {
  return path
    .basename(fileName, path.extname(fileName))
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function collectMenuImages(dir: string, baseDir = dir): Promise<GalleryImage[]> {
  const entries = await readdir(dir, { withFileTypes: true });

  const chunks = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        return collectMenuImages(fullPath, baseDir);
      }

      if (!entry.isFile()) {
        return [];
      }

      const extension = path.extname(entry.name).toLowerCase();
      if (!VALID_EXTENSIONS.has(extension)) {
        return [];
      }

      const relativePath = path.relative(baseDir, fullPath).split(path.sep).join('/');

      return [
        {
          src: encodeURI(`/images/menu/${relativePath}`),
          alt: humanizeName(entry.name)
        }
      ];
    })
  );

  return chunks.flat().sort((a, b) => a.src.localeCompare(b.src));
}

export default async function FoodGallery() {
  const images = await collectMenuImages(MENU_ROOT);

  return (
    <section id="gallery" className="bg-[#111111] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-heading text-5xl uppercase text-whiteSmoke md:text-6xl">Food Gallery</h2>
        <p className="mt-2 font-subheading text-xl text-whiteSmoke/75">
          Smoke-kissed moments from every menu category, curated automatically from our kitchen archive.
        </p>

        <div className="mt-10 columns-2 gap-6 md:columns-3 xl:columns-4">
          {images.map((image) => (
            <article key={image.src} className="group mb-6 break-inside-avoid overflow-hidden rounded-2xl bg-[#1E1E1E]">
              <div className="relative min-h-52 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={640}
                  height={840}
                  className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/35" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
