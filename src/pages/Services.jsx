import { MessageCircle } from 'lucide-react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import ProcessSteps from '@/components/ProcessSteps';
import Reveal from '@/components/Reveal';
import { IMG } from '@/lib/images';
import {
  SERVICES,
  SERVICE_GROUP_ORDER,
  whatsappLink,
  GENERAL_ENQUIRY,
  serviceEnquiry,
} from '@/lib/site';

export default function Services() {
  return (
    <>
      <Seo
        title="Glass & Aluminium Services in Zimbabwe | GreyPath Glass & Aluminium Works"
        description="Aluminium windows and doors, glass balustrades, frameless showers, shop fronts, glass partitioning, reglazing, automatic doors, mirrors, splashbacks, vinyl applications, UV bonding and maintenance. Enquire on WhatsApp."
      />

      <PageHero
        label="Services · 02"
        title="Glass and aluminium services for residential and commercial projects"
        lede="Every service below can be enquired about directly, with a WhatsApp message pre-filled for the option you choose. Scope, materials and availability are confirmed with GreyPath for your specific project."
      />

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-20">
        {SERVICE_GROUP_ORDER.map((group, groupIndex) => {
          const groupServices = SERVICES.filter((service) => service.group === group);
          if (groupServices.length === 0) return null;

          return (
            <div key={group} className={groupIndex === 0 ? '' : 'mt-16 lg:mt-24'}>
              <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="spec-label">Group {String(groupIndex + 1).padStart(2, '0')}</p>
                  <h2 className="mt-3 font-heading text-2xl font-medium text-glacial sm:text-[1.75rem]">{group}</h2>
                </div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-aluminium/45">
                  {groupServices.length} {groupServices.length === 1 ? 'service' : 'services'}
                </p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {groupServices.map((service, index) => (
                  <Reveal key={service.slug} delay={index * 0.05}>
                    <ServiceCard service={service} img={IMG[service.image]} />
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}

        <div className="mt-16 border border-white/10 bg-graphite2 p-6 lg:mt-24 lg:p-10">
          <p className="spec-label">Please note</p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-aluminium/75">
            GreyPath advertises a broad range of glass and aluminium applications. Service availability can vary by
            location and project, and not every product is manufactured in-house — confirm the specifics of your
            requirement with the business when you enquire.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-graphite2">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
          <SectionHeading
            label="Requesting a quotation"
            title="How a service enquiry works"
            lede="Send the details you already have. Where you have measurements, photographs or drawings, share them in the same conversation and the enquiry moves faster."
          />
          <Reveal className="mt-12">
            <ProcessSteps />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <SectionHeading
            label="Not sure which service you need?"
            title="Describe the space and GreyPath will advise"
            lede="If your project involves more than one element — a shop front with a new door, or a bathroom with a shower screen and mirror — send the whole scope in one message."
          />
          <a
            href={whatsappLink(serviceEnquiry('my project (I am not sure which service applies)'))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-steel shrink-0 px-7 py-4 text-[0.8rem] uppercase tracking-[0.14em]"
          >
            <MessageCircle className="h-4 w-4" /> Start an enquiry
          </a>
        </div>
      </section>
    </>
  );
}