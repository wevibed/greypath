export default function SectionHeading({
  label,
  title,
  lede,
  align = 'left',
  className = '',
  theme = 'dark',
}) {
  const isCenter = align === 'center';
  const isLight = theme === 'light';

  return (
    <div
      className={`${isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}
    >
      {label && (
        <p
          className={`spec-label ${
            isLight ? 'text-[#52677B]' : 'text-[#8FB9E8]'
          }`}
        >
          {label}
        </p>
      )}

      <h2
        className={`mt-4 text-[1.75rem] font-semibold leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${
          isLight ? 'text-[#23384D]' : 'text-[#F4F6F8]'
        }`}
      >
        {title}
      </h2>

      {lede && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-[1.0625rem] ${
            isLight ? 'text-[#52606C]' : 'text-[#B7C2CE]'
          }`}
        >
          {lede}
        </p>
      )}
    </div>
  );
}