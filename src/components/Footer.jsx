import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { NAV, PHONES, SERVICES, whatsappLink, GENERAL_ENQUIRY, BUSINESS, WHATSAPP_NOTE } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-graphite2">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
        <p className="spec-label">Contact GreyPath directly</p>
        <div className="mt-6 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
          {PHONES.map((phone) => (
            <div key={phone.tel} className="bg-graphite2 p-6 lg:p-8">
              <a
                href={`tel:${phone.tel}`}
                className="group flex items-center justify-between gap-4 font-mono text-xl tracking-tight text-glacial transition-colors hover:text-white lg:text-2xl"
              >
                {phone.display}
                <Phone className="h-4 w-4 shrink-0 text-steel transition-colors group-hover:text-steelblue" />
              </a>
              <a
                href={whatsappLink(GENERAL_ENQUIRY, phone.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 border border-white/15 px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-aluminium transition-colors hover:border-glacial hover:text-glacial"
              >
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
              </a>
            </div>
          ))}
        </div>
        <p className="mt-3 font-mono text-[0.68rem] text-aluminium/45">{WHATSAPP_NOTE}</p>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-heading text-lg font-semibold tracking-tight text-glacial">{BUSINESS.name}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-aluminium/65">
              Glass and aluminium solutions for residential, commercial and architectural projects in{' '}
              {BUSINESS.region}. Quotation requests are handled directly by telephone or WhatsApp.
            </p>
          </div>

          <div>
            <p className="spec-label">Pages</p>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="link-underline text-sm text-aluminium/75 hover:text-glacial"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="spec-label">Services</p>
            <ul className="mt-5 space-y-3">
              {SERVICES.slice(0, 7).map((service) => (
                <li key={service.slug}>
                  <Link to="/services" className="link-underline text-sm text-aluminium/75 hover:text-glacial">
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-sm text-steelblue hover:text-glacial"
                >
                  All services <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[0.72rem] text-aluminium/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.16em]">
            Service availability varies by project · confirm with GreyPath
          </p>
        </div>
      </div>
    </footer>
  );
}