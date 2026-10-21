import { useState } from 'react';
import { Image } from '@/components/ui/image';
import { MessageCircle } from 'lucide-react';
import { IMG } from '@/lib/images';
import { GALLERY, whatsappLink } from '@/lib/site';

const SIMILAR_MESSAGE =
  'Hello GreyPath Glass & Aluminium Works, I have seen an example of glass or aluminium work similar to what I need and would like a quotation.';

export default function GalleryGrid() {
  const [active, setActive] = useState('all');
  const items = active === 'all' ? GALLERY : GALLERY.filter((item) => item.id === active);

  const filterClass = (isActive) =>
    `border px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] transition-colors ${
      isActive
        ? 'border-glacial bg-glacial text-graphite'
        : 'border-white/15 text-aluminium/70 hover:border-glacial hover:text-glacial'
    }`;

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={() => setActive('all')} className={filterClass(active === 'all')}>
          All work
        </button>
        {GALLERY.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(item.id)}
            className={filterClass(active === item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <figure key={item.id} className="group relative overflow-hidden border border-white/10 bg-graphite2">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={IMG[item.image]}
                alt={`${item.title} — illustrative example of this glass and aluminium application`}
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-60"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-graphite/70 p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-steelblue">{item.note}</p>
                <p className="mt-2 text-sm leading-relaxed text-glacial/90">{item.caption}</p>
                <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-aluminium/60">
                  Illustrative example
                </p>
              </div>
            </div>
            <figcaption className="flex items-baseline justify-between gap-3 px-5 py-4">
              <span className="font-heading text-sm font-medium text-glacial">{item.title}</span>
              <a
                href={whatsappLink(SIMILAR_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-aluminium/60 transition-colors hover:text-steelblue"
              >
                <MessageCircle className="h-3 w-3" /> Enquire
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}