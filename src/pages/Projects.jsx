import { MessageCircle } from 'lucide-react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import GalleryGrid from '@/components/GalleryGrid';
import Reveal from '@/components/Reveal';
import { IMAGE_NOTE } from '@/lib/images';
import { whatsappLink } from '@/lib/site';

const SIMILAR_PROJECT_MESSAGE =
  'Hello GreyPath Glass & Aluminium Works, I would like to discuss a project similar to the work shown on your gallery page.';

export default function Projects() {
  return (
    <>
      <Seo
        title="Projects & Gallery | Glass & Aluminium Applications | GreyPath"
        description="Illustrative gallery of glass and aluminium applications: aluminium windows and doors, glass balustrades, frameless showers, shop fronts, glass partitions, mirrors, splashbacks and sliding or folding doors."
      />

      <PageHero
        label="Projects & gallery · 05"
        title="Glass and aluminium applications by category"
        lede="Filter by the kind of work you are planning. Each image is an illustrative example of the application — not a photograph of a completed GreyPath project."
      />

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-20">
        <div className="border border-white/10 bg-graphite2 px-6 py-5 lg:px-8">
          <p className="font-mono text-[0.66rem] uppercase leading-relaxed tracking-[0.12em] text-aluminium/60">
            <span className="text-steelblue">Please note:</span> {IMAGE_NOTE}
          </p>
        </div>

        <div className="mt-12">
          <Reveal>
            <GalleryGrid />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 bg-graphite2">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="spec-label">Discuss a similar project</p>
            <h2 className="mt-4 font-heading text-2xl font-medium leading-tight text-glacial sm:text-[2rem]">
              Seen something close to what you need?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-aluminium/70 sm:text-base">
              Send GreyPath the category, the size of the opening and a photograph of the existing space. That is
              usually enough for a quotation conversation to start.
            </p>
          </div>
          <a
            href={whatsappLink(SIMILAR_PROJECT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-steel shrink-0 px-7 py-4 text-[0.8rem] uppercase tracking-[0.14em]"
          >
            <MessageCircle className="h-4 w-4" /> Discuss a similar project
          </a>
        </div>
      </section>
    </>
  );
}