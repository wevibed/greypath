import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { NAV, PHONES, whatsappLink, GENERAL_ENQUIRY } from '@/lib/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-panel border-b border-white/10' : 'border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-10">
          <Link to="/" className="group flex items-center gap-3" aria-label="GreyPath Glass & Aluminium Works home">
            <span className="flex h-9 w-9 items-center justify-center border border-white/25 bg-white/5">
              <span className="font-heading text-[0.8rem] font-bold tracking-tight text-glacial">GP</span>
            </span>
            <span className="leading-none">
              <span className="block font-heading text-[0.95rem] font-semibold tracking-tight text-glacial">
                GREYPATH
              </span>
              <span className="mt-1 block font-mono text-[0.55rem] uppercase tracking-[0.24em] text-aluminium/55">
                Glass &amp; Aluminium
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => {
              const active = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`link-underline font-heading text-[0.82rem] uppercase tracking-[0.12em] transition-colors ${
                    active ? 'text-glacial after:w-full' : 'text-aluminium/70 hover:text-glacial'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONES[0].tel}`}
              className="hidden items-center gap-2 border border-white/15 px-4 py-2 font-mono text-xs text-aluminium transition-colors hover:border-glacial hover:text-glacial md:inline-flex"
            >
              <Phone className="h-3.5 w-3.5" />
              {PHONES[0].display}
            </a>
            <Link
              to="/contact"
              className="hidden bg-glacial px-5 py-2 font-heading text-[0.8rem] font-medium uppercase tracking-[0.12em] text-graphite transition-colors hover:bg-aluminium md:inline-block"
            >
              Get a quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-glacial transition-colors hover:border-glacial lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-[60] bg-graphite/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
            <span className="font-heading text-[0.95rem] font-semibold tracking-tight text-glacial">GREYPATH</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-glacial"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mx-auto mt-6 max-w-7xl px-5 lg:px-10">
            <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
              {NAV.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group flex items-baseline gap-4 bg-graphite px-5 py-5 transition-colors hover:bg-white/[0.04]"
                >
                  <span className="font-mono text-[0.7rem] text-steelblue">{item.index}</span>
                  <span className="font-heading text-xl font-medium text-glacial">{item.label}</span>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${PHONES[0].tel}`}
                className="inline-flex flex-1 items-center justify-center gap-2 border border-white/20 px-5 py-4 font-mono text-sm text-aluminium"
              >
                <Phone className="h-4 w-4" /> {PHONES[0].display}
              </a>
              <a
                href={whatsappLink(GENERAL_ENQUIRY)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 bg-glacial px-5 py-4 font-heading text-sm font-medium text-graphite"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp enquiry
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}