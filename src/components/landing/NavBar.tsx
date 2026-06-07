'use client';

import { useRef, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navLinks = [
  { label: 'Quem somos', href: '/quem-somos' },
  { label: 'Conheça o branqueamento', href: '/branqueamento' },
  { label: 'Saiba como funciona o selo', href: '/selo' },
  { label: 'Conheça o açaí do Pará', href: '/acai-do-para' },
  { label: 'Informações governamentais', href: '/informacoes-governamentais' },
  { label: 'Junte-se a nós', href: '/junte-se-a-nos' },
];

export default function NavBar() {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  function update() {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }

  useEffect(() => {
    update();
    const el = scrollRef.current;
    if (!el) return;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <nav className="relative border-t border-[#f5f5f5] py-3">
      {showLeft && (
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-primary to-transparent z-10" />
      )}
      {showRight && (
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-primary to-transparent z-10" />
      )}
      <div ref={scrollRef} onScroll={update} className="overflow-x-auto scrollbar-hide">
        <div className="flex md:justify-center min-w-full">
          <ul className="flex items-center gap-x-6 px-6 py-2 text-sm">
            {navLinks.map(({ label, href }) => (
              <li key={href} className="flex-shrink-0">
                <Link
                  href={href}
                  className={`hover:text-accent transition-colors whitespace-nowrap px-3 py-1 ${pathname === href ? 'bg-secondary rounded-[20px]' : 'underline'}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
