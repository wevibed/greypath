import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { ArrowUpRight } from 'lucide-react';
import { IMG } from '@/lib/images';

const PREVIEW = [
  {
    img: IMG.homeGallery1,
    alt: 'Frameless glass balustrade along a modern staircase — illustrative example',
    caption: 'Glass balustrades',
  },
  {
    img: IMG.homeGallery2,
    alt: 'Frameless glass shower enclosure in a modern bathroom — illustrative example',
    caption: 'Frameless showers',
  },
  {
    img: IMG.homeGallery3,
    alt: 'Retail shop front with a full-height glass facade at dusk — illustrative example',
    caption: 'Shop fronts',
  },
];

export default function GalleryPreview() {
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-3">
        {PREVIEW.map((item) => (
          <figure key={item.caption} className="group overflow-hidden border border-white/10 bg-graphite2">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={item.img}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
              />
            </div>
            <figcaption className="flex items-center justify-between gap-3 px-5 py-4">
              <span className="font-heading text-sm font-medium text-glacial">{item.caption}</span>
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-aluminium/45">
                Illustrative
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <Link
        to="/projects"
        className="mt-8 inline-flex items-center gap-2 border border-white/20 px-6 py-3 font-heading text-[0.8rem] uppercase tracking-[0.12em] text-glacial transition-colors hover:border-glacial hover:bg-white/5"
      >
        View the full gallery
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  );
}