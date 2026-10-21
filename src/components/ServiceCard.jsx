import { MessageCircle } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { whatsappLink, serviceEnquiry } from '@/lib/site';

export default function ServiceCard({ service, img }) {
  return (
    <article className="group flex h-full flex-col border border-white/10 bg-graphite2 transition-colors duration-300 hover:border-white/25">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={img}
          alt={`${service.name} — illustrative example of this glass and aluminium solution`}
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 via-transparent to-transparent opacity-80" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-medium leading-snug text-glacial">{service.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-aluminium/70">{service.blurb}</p>
        <a
          href={whatsappLink(serviceEnquiry(service.name))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-glacial transition-colors hover:text-steelblue"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Enquire about {service.name}
        </a>
      </div>
    </article>
  );
}