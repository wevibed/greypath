import Seo from '@/components/Seo';
import SectionHeading from '@/components/SectionHeading';
import PhoneHubs from '@/components/PhoneHubs';
import QuoteForm from '@/components/QuoteForm';
import ProcessSteps from '@/components/ProcessSteps';
import Reveal from '@/components/Reveal';

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact GreyPath | Get a Glass & Aluminium Quotation in Zimbabwe"
        description="Call GreyPath Glass & Aluminium Works on 071 365 6979, 077 230 7770 or 078 908 5887, or send a quotation request on WhatsApp. Residential and commercial glass and aluminium projects in Zimbabwe."
      />

      <section className="border-b border-white/10">
        <div className="grain h-20 w-full border-b border-white/10 bg-graphite2 lg:h-24" />
        <div className="mx-auto max-w-7xl px-5 pt-12 lg:px-10">
          <p className="spec-label">Contact &amp; get a quote · 07</p>
          <h1 className="mt-5 max-w-4xl text-[1.9rem] font-semibold leading-[1.05] text-glacial sm:text-[2.6rem] lg:text-[3.25rem]">
            Request a quotation for your glass or aluminium project
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-aluminium/75 sm:text-lg">
            Call any of the three numbers below, or complete the quotation request and send it straight to GreyPath on
            WhatsApp. Both routes reach the business directly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-24">
        <SectionHeading
          label="Direct lines"
          title="Call or message GreyPath"
          lede="These are the advertised contact numbers. Use whichever line suits you — a call usually resolves a question faster, while WhatsApp is easier for photographs and dimensions."
        />
        <div className="mt-12">
          <PhoneHubs />
        </div>
      </section>

      <section id="quote" className="border-y border-white/10 bg-graphite2">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
          <SectionHeading
            label="Quotation request"
            title="Tell us about the project"
            lede="Complete the fields below. When you submit, the form opens WhatsApp with your enquiry written out, ready for you to send to GreyPath."
          />
          <div className="mt-12 border border-white/10 bg-graphite p-6 lg:p-10">
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <SectionHeading
          label="What happens next"
          title="The quotation process, explained"
          lede="Quotations are prepared by the business — there is no instant online pricing and installation cannot be booked automatically on this website."
        />
        <Reveal className="mt-12">
          <ProcessSteps />
        </Reveal>

        <div className="mt-12 grid gap-px border border-white/10 bg-white/10 lg:grid-cols-2">
          <div className="bg-graphite p-6 lg:p-10">
            <p className="spec-label">Useful to have ready</p>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-aluminium/75">
              {[
                'The type of opening or area — window, doorway, shop front, bathroom, staircase, office.',
                'Approximate width and height, or a photograph of the existing space.',
                'The property type: residential or commercial.',
                'The project location, so coverage can be confirmed.',
                'Whether the work is new, a replacement, or a repair.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-steelblue" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-graphite p-6 lg:p-10">
            <p className="spec-label">Please note</p>
            <p className="mt-6 text-sm leading-relaxed text-aluminium/75">
              The physical address, email address and operating hours of GreyPath Glass &amp; Aluminium Works have not
              been confirmed, so they are not published here. Please use the telephone numbers above to reach the
              business.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-aluminium/75">
              Service availability can vary by location and project — confirm coverage for your area when you enquire.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}