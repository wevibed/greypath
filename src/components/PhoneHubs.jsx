import { Phone, MessageCircle } from 'lucide-react';
import { PHONES, whatsappLink, GENERAL_ENQUIRY, WHATSAPP_NOTE } from '@/lib/site';

export default function PhoneHubs({ className = '' }) {
  return (
    <div className={className}>
      <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
        {PHONES.map((phone, index) => (
          <div key={phone.tel} className="flex flex-col bg-graphite p-6 lg:p-8">
            <span className="spec-label">Line {String(index + 1).padStart(2, '0')}</span>
            <a
              href={`tel:${phone.tel}`}
              className="mt-5 font-mono text-2xl tracking-tight text-glacial transition-colors hover:text-steelblue"
            >
              {phone.display}
            </a>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`tel:${phone.tel}`}
                className="btn-steel px-4 py-3 text-[0.78rem] uppercase tracking-[0.12em]"
              >
                <Phone className="h-3.5 w-3.5" /> Call this number
              </a>
              <a
                href={whatsappLink(GENERAL_ENQUIRY, phone.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-line px-4 py-3 text-[0.78rem] uppercase tracking-[0.12em]"
              >
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp enquiry
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-aluminium/45">
        {WHATSAPP_NOTE}
      </p>
    </div>
  );
}