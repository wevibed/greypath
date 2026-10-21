import { MessageCircle } from 'lucide-react';
import { whatsappLink, GENERAL_ENQUIRY } from '@/lib/site';

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(GENERAL_ENQUIRY)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Send a WhatsApp enquiry to GreyPath Glass & Aluminium Works"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 border border-white/15 bg-glacial px-4 py-3 font-heading text-[0.8rem] font-medium uppercase tracking-[0.1em] text-graphite shadow-lg transition-transform duration-300 hover:-translate-y-0.5 hover:bg-aluminium"
    >
      <MessageCircle className="h-4 w-4" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}