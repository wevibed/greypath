export default function SectionHeading({ label, title, lede, align = 'left', className = '' }) {
  const isCenter = align === 'center';

  return (
    <div className={`${isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      {label ? <p className="spec-label">{label}</p> : null}
      <h2 className="mt-4 text-[1.75rem] font-semibold leading-[1.1] text-glacial sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {lede ? (
        <p className="mt-5 text-base leading-relaxed text-aluminium/75 sm:text-[1.0625rem]">{lede}</p>
      ) : null}
    </div>
  );
}