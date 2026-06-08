'use client';

import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoClose } from 'react-icons/io5';

interface Props {
  user?: { name?: string | null; image?: string | null } | null;
  onSignIn: () => Promise<void>;
  onSignOut: () => Promise<void>;
}

export default function SignInModal({ user, onSignIn, onSignOut }: Props) {
  const [open, setOpen] = useState(false);

  if (user) {
    return (
      <form action={onSignOut}>
        <button type="submit" className="flex items-center gap-2 text-sm hover:text-purple-200 transition-colors">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {user.image ? (
            <img src={user.image} alt="" className="w-6 h-6 rounded-full object-cover" />
          ) : (
            <FaUserCircle className="text-xl" />
          )}
          <span className="hidden md:inline">{user.name ?? 'Sair'}</span>
        </button>
      </form>
    );
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 text-sm hover:text-purple-200 transition-colors"
      >
        <FaUserCircle className="text-xl" />
        <span className="hidden md:inline">Entrar</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl px-10 py-8 shadow-xl flex flex-col items-center gap-6 min-w-[320px]"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between w-full">
              <h2 className="font-sans font-bold text-xl text-primary">Entrar</h2>
              <button onClick={() => setOpen(false)} className="text-zinc-400 hover:text-zinc-600 transition-colors">
                <IoClose className="text-2xl" />
              </button>
            </div>

            <p className="text-zinc-500 text-sm text-center">
              Entre com sua conta Google para acessar o LocalizAçaí.
            </p>

            <form action={onSignIn} className="w-full">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 border border-zinc-200 rounded-xl px-6 py-3 text-sm font-sans font-medium text-zinc-700 hover:bg-zinc-50 transition-colors shadow-sm"
              >
                <FcGoogle className="text-xl flex-shrink-0" />
                Entrar com Google
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
