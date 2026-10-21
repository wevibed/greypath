import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { ArrowUpRight } from 'lucide-react';
import { IMG } from '@/lib/images';

const SECTORS = [
  {
    to: '/residential',
    label: 'For homeowners & renovators',
    title: 'Residential Solutions',
    copy: 'Windows, doors, frameless showers, balustrades, mirrors and splashbacks for houses and apartments.',
    img: IMG.homeResidential,
    alt: 'Living space with aluminium-framed sliding glass doors opening onto a garden — illustrative example',
  },
  {
    to: '/commercial',
    label: 'For retailers, offices & contractors',
    title: 'Commercial Solutions',
    copy: 'Shop fronts, office partitioning, automatic doors, commercial glazing and reglazing enquiries.',
    img: IMG.homeCommercial,
    alt: 'Commercial building facade with a glass curtain wall at dusk — illustrative example',
  },
];

export default function SectorPortal() {
  return (
    <div className="grid gap-px border border-white/10 bg-white/10 lg:grid-cols-2">
      {SECTORS.map((sector) => (
        <Link key={sector.to} to={sector.to} className="group relative block overflow-hidden bg-graphite">
          <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-[5/4]">
            <Image
              src={sector.img}
              alt={sector.alt}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/55 to-graphite/10" />
          </div>

          <div className="absolute inset-x-0 bottom-0 p-6 lg:p-9">
            <p className="spec-label">{sector.label}</p>
            <h3 className="mt-4 font-heading text-2xl font-medium text-glacial lg:text-[1.75rem]">
              {sector.title}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-aluminium/75">{sector.copy}</p>
            <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-glacial">
              View solutions
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}