import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import ProcessSteps from '@/components/ProcessSteps';
import HomeHero from '@/components/home/HomeHero';
import SectorPortal from '@/components/home/SectorPortal';
import GalleryPreview from '@/components/home/GalleryPreview';
import { SERVICES } from '@/lib/site';

export default function Home() {
  return (
    <>
      <Seo
        title="GreyPath Glass & Aluminium Works | Glass & Aluminium Solutions in Zimbabwe"
        description="Aluminium windows and doors, glass balustrades, frameless showers, shop fronts and office glass partitioning for residential and commercial projects in Zimbabwe."
      />

      <HomeHero />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <SectionHeading
          label="Our services"
          title="Glass and aluminium services"
          lede="Explore glass and aluminium solutions for residential, commercial and architectural projects."
        />
        <Reveal className="mt-12">
          <SectorPortal />
        </Reveal>
      </section>

      <section className="border-y border-white/10 bg-graphite2">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              label="Service index"
              title="Glass and aluminium services"
              lede="Explore our range of aluminium framing, architectural glazing, bathroom glass, commercial frontage and specialist applications."
            />
            <Link
              to="/services"
              className="inline-flex shrink-0 items-center gap-2 border border-white/20 px-6 py-3 font-heading text-[0.8rem] uppercase tracking-[0.12em] text-glacial transition-colors hover:border-glacial hover:bg-white/5"
            >
              All services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <Link
                key={service.slug}
                to="/services"
                className="group flex items-start gap-4 bg-graphite px-6 py-6 transition-colors hover:bg-white/[0.04]"
              >
                <span className="font-mono text-[0.68rem] text-steelblue">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="flex-1">
                  <span className="block font-heading text-[0.95rem] font-medium text-glacial">
                    {service.name}
                  </span>
                  <span className="mt-2 block font-mono text-[0.6rem] uppercase tracking-[0.14em] text-aluminium/45">
                    {service.group}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <SectionHeading
          label="How it works"
          title="Four steps from enquiry to arrangement"
          lede="Quotations are prepared directly by the business, and installation is arranged once project details are confirmed."
        />
        <Reveal className="mt-12">
          <ProcessSteps />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <SectionHeading
          label="Project gallery"
          title="Explore our work"
          lede="Discover the kinds of projects GreyPath serves, from aluminium windows and doors to glass balustrades, frameless showers, shop fronts, partitions and specialist glass applications."
        />
        <Reveal className="mt-12">
          <GalleryPreview />
        </Reveal>
      </section>
    </>
  );
}