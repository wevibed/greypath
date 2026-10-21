import { MessageCircle } from 'lucide-react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import ProcessSteps from '@/components/ProcessSteps';
import Reveal from '@/components/Reveal';
import { Image } from '@/components/ui/image';
import { IMG } from '@/lib/images';
import { RESIDENTIAL_FEATURES, whatsappLink } from '@/lib/site';

const RESIDENTIAL_MESSAGE =
  'Hello GreyPath Glass & Aluminium Works, I would like a quotation for a residential glass or aluminium project. I can share the room, opening sizes and photographs.';

export default function Residential() {
  return (
    <>
      <Seo
        title="Residential Glass & Aluminium Solutions | GreyPath Glass & Aluminium Works"
        description="Aluminium windows and doors, frameless shower enclosures, glass balustrades, sliding and folding doors, mirrors and glass splashbacks for homes and residential projects. Request a residential quotation on WhatsApp."
      />

      <PageHero
        label="Residential · 03"
        title="Glass and aluminium for homes that use more natural light"
        lede="Homeowners, renovators, landlords and residential developers use GreyPath for aluminium windows and doors, frameless showers, balustrades, wide sliding openings, mirrors and glass splashbacks."
        img={IMG.resHero}
        alt="Open-plan home interior with an aluminium sliding glass wall opening onto a garden — illustrative example"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              label="Why glass and aluminium"
              title="More daylight, better use of the space you already have"
              lede="Slim aluminium framing and clear glazing change how a home feels day to day — more light reaches further into rooms, external views stay visible, and living areas can open onto gardens and outdoor space."
            />
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-aluminium/70">
              <p>
                A glazed opening can also make a smaller room work harder: a frameless shower screen opens up a
                bathroom, a mirrored or splashback wall adds depth in a kitchen, and a sliding or folding door turns
                a lounge into an indoor-outdoor space.
              </p>
              <p>
                Finishes, glass thickness and hardware are confirmed with GreyPath against your opening sizes and
                the way the space is used.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <figure className="overflow-hidden border border-white/10 bg-graphite2">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={IMG.resLight}
                  alt="Living room with tall aluminium-framed windows bringing in natural daylight — illustrative example"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm text-aluminium/70">
                Windows positioned and framed to draw daylight deep into the room.
              </figcaption>
            </figure>
            <figure className="overflow-hidden border border-white/10 bg-graphite2">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={IMG.resSplashback}
                  alt="Kitchen with a mirrored glass splashback behind the hob — illustrative example"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm text-aluminium/70">
                Mirrors and glass splashbacks made to the wall or counter dimension.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-graphite2">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
          <SectionHeading
            label="Residential scope"
            title="What homeowners ask GreyPath for"
            lede="Six of the applications that come up most often on residential projects."
          />
          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {RESIDENTIAL_FEATURES.map((feature, index) => (
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
          label="Residential quotations"
          title="Send your room, opening sizes and photographs"
          lede="Measurements speed up a quotation, but they are not required to start — describe the room and send a photograph of the existing opening from your phone."
        />
        <Reveal className="mt-12">
          <ProcessSteps />
        </Reveal>

        <div className="mt-12 flex flex-col gap-6 border border-white/10 bg-graphite2 p-6 sm:flex-row sm:items-center sm:justify-between lg:p-10">
          <div>
            <p className="font-heading text-lg font-medium text-glacial">Request a residential quotation</p>
            <p className="mt-2 text-sm text-aluminium/70">
              Your enquiry opens in WhatsApp with your project details written out.
            </p>
          </div>
          <a
            href={whatsappLink(RESIDENTIAL_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-steel shrink-0 px-7 py-4 text-[0.8rem] uppercase tracking-[0.14em]"
          >
            <MessageCircle className="h-4 w-4" /> Residential enquiry
          </a>
        </div>
      </section>
    </>
  );
}