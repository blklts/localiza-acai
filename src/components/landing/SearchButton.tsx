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
      if(query === "")
      {
          setOpen(false);
          return;
      }
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
    <div className="inline-flex items-center gap-2 bg-secondary text-white font-semibold rounded-lg px-4 py-3 w-fit hover:bg-secondary-hover" onClick={handleIconClick}>
      <button
        type="button"
        // Prevent the input from blurring before the click fires
        onMouseDown={e => e.preventDefault()}
        onClick={handleIconClick}
        aria-label="Buscar"
        className="flex-shrink-0 hover:opacity-80 transition-opacity"
      >
        <img
          src="/icons/lupa.svg"
          alt=""
          style={{ width: '1em', height: '1em', filter: 'brightness(0) invert(1)' }}
        />
      </button>

      <input
        ref={inputRef}
        value={query}
        onChange={e => setQuery(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        placeholder="Pesquise um local"
        className={`bg-transparent outline-none placeholder-white/60 transition-all duration-300 ${
          open ? 'w-48 opacity-100' : 'w-0 opacity-0 pointer-events-none'
        }`}
      />
    </div>
  );
}
