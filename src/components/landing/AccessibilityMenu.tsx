'use client';

import { useState, useRef, useEffect } from 'react';
import { FaFont, FaAdjust, FaMinus, FaPlus, FaMoon, FaQuestionCircle } from 'react-icons/fa';
import { useDarkMode } from '@/contexts/DarkModeContext';

export default function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const { dark, toggle, daltonism, toggleDaltonism } = useDarkMode();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={`relative py-3 px-4 ${open ? 'bg-a11y-bg rounded-t-[20px]' : ''}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/acessibilidade.svg" alt="" width={20} height={20} className="brightness-0 invert" />
        <span className="underline hidden md:inline">Acessibilidade</span>
      </button>

      {open && (
        <div className="absolute right-0 min-w-[200px] bg-a11y-bg text-white rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px] py-2 z-50 text-sm">
          <p className="px-4 py-1 text-xs font-semibold text-a11y-label uppercase tracking-wide">Tamanho do texto</p>
          <div className="flex items-center gap-2 px-4 py-2">
            <button className="flex items-center justify-center w-8 h-8 rounded border border-a11y-border hover:bg-a11y-hover transition-colors" aria-label="Diminuir fonte">
              <FaMinus className="text-xs" />
            </button>
            <span className="flex-1 text-center"><FaFont className="inline" /></span>
            <button className="flex items-center justify-center w-8 h-8 rounded border border-a11y-border hover:bg-a11y-hover transition-colors" aria-label="Aumentar fonte">
              <FaPlus className="text-xs" />
            </button>
          </div>
          <hr className="my-1 border-a11y-border" />
          <button
            onClick={toggleDaltonism}
            className={`flex items-center gap-2 w-full px-4 py-2 hover:bg-a11y-hover transition-colors text-left ${daltonism ? 'bg-a11y-hover' : ''}`}
          >
            <FaAdjust />
            Modo Daltônico
          </button>
          <button
            onClick={toggle}
            className={`flex items-center gap-2 w-full px-4 py-2 hover:bg-a11y-hover transition-colors text-left ${dark ? 'bg-a11y-hover' : ''}`}
          >
            <FaMoon />
            Modo Noturno
          </button>
          <hr className="my-1 border-a11y-border" />
          <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-a11y-hover transition-colors text-left">
            <FaQuestionCircle />
            Ajuda
          </button>
        </div>
      )}
    </div>
  );
}
