import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import ProcessSteps from '@/components/ProcessSteps';
import Reveal from '@/components/Reveal';
import { Image } from '@/components/ui/image';
import { IMG } from '@/lib/images';
import { COMMERCIAL_FEATURES, whatsappLink } from '@/lib/site';

const COMMERCIAL_MESSAGE =
  'Hello GreyPath Glass & Aluminium Works, I would like a quotation for a commercial glass or aluminium project. My project involves:';

export default function Commercial() {
  return (
    <>
      <Seo
        title="Commercial Glass & Glazing Solutions | GreyPath Glass & Aluminium Works"
        description="Glass shop fronts, office glass partitioning, automatic doors, commercial aluminium windows and doors, balustrades and reglazing for retailers, offices, contractors and developers. Enquire on WhatsApp."
      />

      <PageHero
        label="Commercial · 04"
        title="Commercial glazing and aluminium for business premises"
        lede="Retailers, offices, contractors, architects and property developers use GreyPath for shop fronts, glazed partition walls, automatic entrances, commercial aluminium framing, balustrades and reglazing."
        img={IMG.comHero}
        alt="Commercial office building with a glass curtain wall facade at blue hour — illustrative example"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              label="Frontage and interior"
              title="Glazing that works for the building and the people in it"
              lede="A commercial installation usually has to do several jobs at once: make a premises visible from the street, let daylight into the trading or working floor, and divide space without making it feel closed in."
            />
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-aluminium/70">
              <p>
                Shop fronts are typically glazed for maximum visibility, while interiors are partitioned in glass so
                that offices and meeting rooms stay lit and quiet without losing the open feel of the floor.
                Automatic doors suit entrances with regular foot traffic, and reglazing or maintenance keeps an
                existing installation working.
              </p>
              <p>
                For commercial projects, GreyPath will discuss the materials, hardware and installation arrangements
                for the specific site when you enquire.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <figure className="overflow-hidden border border-white/10 bg-graphite2">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={IMG.comOffice}
                  alt="Open-plan office with glass partition walls and a glazed meeting room — illustrative example"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm text-aluminium/70">
                Glazed partitioning that keeps daylight and sightlines across a floor.
              </figcaption>
            </figure>
            <figure className="overflow-hidden border border-white/10 bg-graphite2">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={IMG.comEntrance}
                  alt="Commercial building entrance with automatic sliding glass doors — illustrative example"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm text-aluminium/70">
                Automatic entrance glazing for buildings with regular traffic.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-graphite2">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
          <SectionHeading
            label="Commercial scope"
            title="What businesses enquire about"
            lede="Six application areas that come up most often on commercial projects."
          />
          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {COMMERCIAL_FEATURES.map((feature, index) => (
              <div key={feature.title} className="bg-graphite p-6 lg:p-8">
                <span className="font-mono text-[0.68rem] text-steelblue">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-5 font-heading text-lg font-medium leading-snug text-glacial">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-aluminium/70">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <SectionHeading
          label="Commercial project enquiry"
          title="Describe the premises and what you need done"
          lede="Tell GreyPath the type of premises, the frontage or interior areas involved, and any drawings or dimensions you already have. That is enough to open a quotation conversation."
        />
        <Reveal className="mt-12">
          <ProcessSteps />
        </Reveal>

        <div className="mt-12 grid gap-px border border-white/10 bg-white/10 lg:grid-cols-2">
          <div className="bg-graphite2 p-6 lg:p-10">
            <p className="spec-label">Fastest route</p>
            <h3 className="mt-4 font-heading text-xl font-medium text-glacial">Send a commercial enquiry</h3>
            <p className="mt-3 text-sm leading-relaxed text-aluminium/70">
              A WhatsApp message opens with a commercial enquiry already started — add the premises type and scope,
              then send it.
            </p>
            <a
              href={whatsappLink(COMMERCIAL_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-steel mt-6 px-7 py-4 text-[0.8rem] uppercase tracking-[0.14em]"
            >
              <MessageCircle className="h-4 w-4" /> Commercial enquiry
            </a>
          </div>

          <div className="bg-graphite2 p-6 lg:p-10">
            <p className="spec-label">Detailed route</p>
            <h3 className="mt-4 font-heading text-xl font-medium text-glacial">Use the quotation form</h3>
            <p className="mt-3 text-sm leading-relaxed text-aluminium/70">
              The form collects the name, contact number, service, project type, location and a short description,
              then hands the whole thing to WhatsApp.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 border border-white/20 px-6 py-3 font-heading text-[0.8rem] uppercase tracking-[0.12em] text-glacial transition-colors hover:border-glacial hover:bg-white/5"
            >
              Go to the quote form
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}