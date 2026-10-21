import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { ArrowRight } from 'lucide-react';
import { IMG } from '@/lib/images';

export default function HomeHero() {
  return (
    <section className="relative border-b border-white/10">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative h-[52vh] min-h-[340px] w-full lg:h-[78vh]">
          <Image
            src={IMG.homeHero}
            alt="Aluminium-framed glass windows and sliding doors on a modern residence at dusk — illustrative example"
            className="h-full w-full object-cover"
            focalPointY={0.45}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-graphite/75 via-graphite/10 to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col justify-center gap-7 bg-graphite px-5 py-14 lg:-ml-20 lg:px-14 lg:py-20">
          <p className="spec-label">Zimbabwe · Residential &amp; Commercial</p>
          <h1 className="max-w-2xl text-[2rem] font-semibold leading-[1.03] text-glacial sm:text-[2.6rem] lg:text-[3.5rem]">
            Premium Glass &amp; Aluminium Solutions for Modern Spaces
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-aluminium/75 sm:text-lg">
            From contemporary aluminium windows and doors to elegant glass balustrades, frameless showers and
            commercial shop fronts, GreyPath Glass &amp; Aluminium Works provides solutions for residential and
            commercial projects.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="btn-steel group px-7 py-4 text-[0.8rem] uppercase tracking-[0.14em]"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link to="/services" className="btn-ghost-line px-7 py-4 text-[0.8rem] uppercase tracking-[0.14em]">
              Explore Our Services
            </Link>
          </div>

          <dl className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              { k: 'Sectors', v: 'Residential & commercial' },
              { k: 'Scope', v: 'Glass, aluminium & specialist' },
              { k: 'Enquiries', v: 'Call or WhatsApp directly' },
            ].map((item) => (
              <div key={item.k} className="bg-graphite px-5 py-5">
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-steelblue">{item.k}</dt>
                <dd className="mt-3 text-[0.82rem] leading-snug text-aluminium/80">{item.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}