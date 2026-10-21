import { MessageCircle } from 'lucide-react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import PhoneHubs from '@/components/PhoneHubs';
import Reveal from '@/components/Reveal';
import { Image } from '@/components/ui/image';
import { IMG } from '@/lib/images';
import { BUSINESS, SERVICES, WHY_CHOOSE, whatsappLink, GENERAL_ENQUIRY } from '@/lib/site';

export default function About() {
  return (
    <>
      <Seo
        title="About GreyPath Glass & Aluminium Works | Glass & Aluminium in Zimbabwe"
        description="GreyPath Glass & Aluminium Works provides glass and aluminium solutions for residential, commercial and architectural projects in Zimbabwe — aluminium windows and doors, glass balustrades, showers, shop fronts, partitioning and specialist glass applications."
      />

      <PageHero
        label="About GreyPath · 06"
        title="A glass and aluminium works for residential, commercial and architectural projects"
        lede="GreyPath Glass & Aluminium Works advertises a broad range of glass and aluminium solutions, and works with homeowners and businesses on both new work and replacement glazing."
        img={IMG.aboutHero}
        alt="Close detail of a slim aluminium window frame meeting a clear glass pane — illustrative example"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading
              label="Business overview"
              title="Glass, aluminium and the specialist work around them"
              lede="The business is presented around the solutions it advertises rather than a history: aluminium framing, architectural glazing, bathroom and interior glass, commercial frontage glazing, and specialist glass applications."
            />
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-aluminium/70 sm:text-[0.95rem]">
              <p>
                Enquiries come from two directions. On the residential side, homeowners, renovators, landlords and
                residential developers ask about windows and doors, frameless showers, balustrades, sliding and
                folding doors, mirrors and splashbacks. On the commercial side, retailers, offices, contractors and
                property developers ask about shop fronts, interior glass partitioning, automatic doors, commercial
                aluminium framing, balustrades and reglazing.
              </p>
              <p>
                Because the advertised range covers the framing, the glazing and the specialist applications around
                them — including vinyl application and UV bonding — a project with several elements can be discussed
                with one business rather than several suppliers.
              </p>
              <p>
                Nothing on this website should be read as a promise about a specific project. Materials, glass
                thickness, hardware, lead times and the scope of work are confirmed directly with you when you
                request a quotation.
              </p>
            </div>
          </div>

          <figure className="overflow-hidden border border-white/10 bg-graphite2">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={IMG.aboutDetail}
                alt="Neatly stacked aluminium profiles and glass panes in a fabrication workshop — illustrative example"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-aluminium/70">
              Aluminium profiles and glazing stock — illustrative example of the materials involved.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-white/10 bg-graphite2">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
          <SectionHeading
            label="Range of applications"
            title="Thirteen advertised service areas"
            lede="The full advertised range, grouped as it appears on the services page."
          />
          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <div key={service.slug} className="bg-graphite px-6 py-6">
                <span className="font-mono text-[0.68rem] text-steelblue">{String(index + 1).padStart(2, '0')}</span>
                <p className="mt-4 font-heading text-[0.95rem] font-medium text-glacial">{service.name}</p>
                <p className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-aluminium/45">
                  {service.group}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <SectionHeading
          label="Working with GreyPath"
          title="What you can expect from an enquiry"
          lede="Practical points about how the business presents its work — nothing more than that."
        />
        <div className="mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((item, index) => (
            <div key={item.title} className="bg-graphite p-6 lg:p-8">
              <span className="font-mono text-[0.68rem] text-steelblue">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-5 font-heading text-lg font-medium leading-snug text-glacial">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-aluminium/70">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-graphite2">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              label="Contact"
              title={`Talk to ${BUSINESS.name}`}
              lede="Call any of the advertised numbers or send your project details on WhatsApp. The business will respond directly."
            />
            <a
              href={whatsappLink(GENERAL_ENQUIRY)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-steel shrink-0 px-7 py-4 text-[0.8rem] uppercase tracking-[0.14em]"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp enquiry
            </a>
          </div>
          <Reveal className="mt-12">
            <PhoneHubs />
          </Reveal>
        </div>
      </section>
    </>
  );
}