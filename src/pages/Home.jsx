import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import ProcessSteps from '@/components/ProcessSteps';
import HomeHero from '@/components/home/HomeHero';
import SectorPortal from '@/components/home/SectorPortal';
import GalleryPreview from '@/components/home/GalleryPreview';
import { SERVICES } from '@/lib/site';

const serviceImages = [
  'photo-1600607687939-ce8a6c25118c',
  'photo-1600566753086-00f18fb6b3ea',
  'photo-1600607687920-4e2a09cf159d',
  'photo-1600607687644-c7171b42498f',
  'photo-1497366754035-f200968a6e72',
  'photo-1486406146926-c627a92ad1ab',
  'photo-1620626011761-996317b8d101',
  'photo-1604709177225-055f99402ea3',
  'photo-1511818966892-d7d671e672a2',
  'photo-1487958449943-2429e8be8625',
  'photo-1511818966892-d7d671e672a2',
  'photo-1600607687920-4e2a09cf159d',
  'photo-1600566753190-17f0baa2a6c3',
];

function ServiceCarousel() {
  const [active, setActive] = useState(0);
  const total = SERVICES.length;

  const move = (direction) => {
    setActive((current) => (current + direction + total) % total);
  };

  const getOffset = (index) => {
    let offset = index - active;

    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    return offset;
  };

  return (
    <section className="relative mt-12 overflow-hidden">
      <div className="relative mx-auto flex min-h-[490px] max-w-6xl items-center justify-center sm:min-h-[540px] lg:min-h-[570px]">
        {SERVICES.map((service, index) => {
          const offset = getOffset(index);
          const distance = Math.abs(offset);

          if (distance > 2) return null;

          const imageId = serviceImages[index % serviceImages.length];
          const imageUrl = `https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=1200&q=85`;

          return (
            <article
              key={service.slug}
              aria-hidden={offset !== 0}
              className="absolute left-1/2 top-1/2 w-[84%] max-w-[690px] -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out"
              style={{
                transform: `translate(calc(-50% + ${offset * 66}%), calc(-50% + ${distance * 7}px)) scale(${offset === 0 ? 1 : distance === 1 ? 0.82 : 0.68})`,
                opacity: offset === 0 ? 1 : distance === 1 ? 0.48 : 0.16,
                zIndex: 10 - distance,
                pointerEvents: offset === 0 ? 'auto' : 'none',
              }}
            >
              <div className="overflow-hidden rounded-2xl border border-[#A9B0B5]/50 bg-[#E8E4DC] shadow-2xl">
                <div className="grid min-h-[390px] md:grid-cols-[0.82fr_1.18fr]">
                  <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 lg:p-9">
                    <div>
                      <div className="mb-7 flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#23384D]/20 text-[#23384D]">
                          <span className="font-mono text-sm">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </span>

                        <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#52677B]">
                          {service.group}
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl font-semibold leading-tight text-[#23384D] sm:text-3xl">
                        {service.name}
                      </h3>

                      <p className="mt-4 text-sm leading-relaxed text-[#52606C]">
                        Discover our {service.name.toLowerCase()} solutions for residential and commercial spaces, designed to complement modern architecture.
                      </p>
                    </div>

                    <div>
                      <p className="mb-5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#52677B]">
                        GreyPath Glass &amp; Aluminium
                      </p>

                      <Link
                        to="/services"
                        tabIndex={offset === 0 ? 0 : -1}
                        className="inline-flex items-center gap-2 border border-[#23384D]/30 px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#23384D] transition-colors hover:bg-[#23384D] hover:text-white"
                      >
                        View service
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="relative min-h-[230px] overflow-hidden md:min-h-[390px]">
                    <img
                      src={imageUrl}
                      alt={service.name}
                      loading={distance === 0 ? 'eager' : 'lazy'}
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#23384D]/40 via-transparent to-transparent" />

                    <span className="absolute bottom-5 right-5 font-mono text-xs tracking-[0.18em] text-white">
                      {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="relative z-20 mt-1 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="Previous service"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#23384D]/20 bg-[#E8E4DC] text-[#23384D] transition-colors hover:bg-[#D2CCC1]"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2">
          {SERVICES.map((service, index) => (
            <button
              key={service.slug}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show ${service.name}`}
              aria-current={index === active ? 'true' : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === active
                  ? 'w-8 bg-[#23384D]'
                  : 'w-2 bg-[#A9B0B5] hover:bg-[#52677B]'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Next service"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#23384D]/20 bg-[#E8E4DC] text-[#23384D] transition-colors hover:bg-[#D2CCC1]"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

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

      <section className="border-y border-[#A9B0B5]/40 bg-[#E8E4DC]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              label="Explore our expertise"
              title="Services designed for modern spaces"
              lede="Browse our glass, aluminium, architectural glazing and specialist services."
              theme="light"
            />

            <Link
              to="/services"
              className="inline-flex shrink-0 items-center gap-2 border border-[#23384D]/30 px-6 py-3 font-heading text-[0.8rem] uppercase tracking-[0.12em] text-[#23384D] transition-colors hover:bg-[#23384D] hover:text-white"
            >
              All services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <Reveal>
            <ServiceCarousel />
          </Reveal>
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