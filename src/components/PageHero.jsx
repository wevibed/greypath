import { Image } from '@/components/ui/image';

export default function PageHero({ label, title, lede, img, alt }) {
  return (
    <section className="relative border-b border-white/10">
      {img ? (
        <div className="relative h-[44vh] min-h-[300px] w-full overflow-hidden lg:h-[52vh]">
          <Image src={img} alt={alt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/70 to-graphite/25" />
        </div>
      ) : (
        <div className="grain h-24 w-full border-b border-white/10 bg-graphite2 lg:h-32" />
      )}

      <div className={`mx-auto max-w-7xl px-5 lg:px-10 ${img ? '-mt-28 pb-14 lg:-mt-32' : 'pt-12'}`}>
        <p className="spec-label">{label}</p>
        <h1 className="mt-5 max-w-4xl text-[1.9rem] font-semibold leading-[1.05] text-glacial sm:text-[2.6rem] lg:text-[3.25rem]">
          {title}
        </h1>
        {lede ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-aluminium/75 sm:text-lg">{lede}</p>
        ) : null}
      </div>
    </section>
  );
}