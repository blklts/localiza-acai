'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface SearchButtonProps {
  open: boolean;
  setOpen: (v: boolean) => void;
}

export default function SearchButton({ open, setOpen }: SearchButtonProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function search() {
    if (query === '') { setOpen(false); return; }
    router.push(`/map${query ? `?q=${encodeURIComponent(query)}` : ''}`);
  }

  function handleIconClick() {
    if (open) {
      search();
    } else {
      setOpen(true);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') search();
    if (e.key === 'Escape') { setQuery(''); setOpen(false); }
  }

  function handleBlur() {
    if (!query) setOpen(false);
  }

  return (
    /*
     * Mobile:  flex-row  → input (left, always visible) + icon (right)
     * Desktop: flex-row-reverse → icon (left) + collapsible input (right)
     */
    <div
      className="flex md:flex-row-reverse w-full md:w-auto items-center gap-2 bg-secondary text-white font-semibold rounded-[24px] px-4 py-3 hover:bg-secondary-hover cursor-pointer"
      onClick={handleIconClick}
    >
      <input
        ref={inputRef}
        value={query}
        onChange={e => setQuery(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        placeholder="Pesquise um local"
        className={`bg-transparent outline-none placeholder-white/60 transition-all duration-300 flex-1 min-w-0 md:flex-none ${
          open ? 'md:w-48 md:opacity-100' : 'md:w-0 md:opacity-0 md:pointer-events-none'
        }`}
      />

      <button
        type="button"
        onMouseDown={e => e.preventDefault()}
        onClick={handleIconClick}
        aria-label="Buscar"
        className="flex-shrink-0 hover:opacity-80 transition-opacity"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/lupa.svg"
          alt=""
          style={{ width: '1em', height: '1em', filter: 'brightness(0) invert(1)' }}
        />
      </button>
    </div>
  );
}
