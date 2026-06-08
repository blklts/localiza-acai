import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import Logo from './Logo';
import AccessibilityMenu from './AccessibilityMenu';
import NavBar from './NavBar';
import { auth, signIn, signOut } from '@/auth';

export default async function Header() {
  const session = await auth();
  const user = session?.user;

  return (
    <header className="relative z-50 bg-primary text-white md:rounded-b-[20px] pl-[18px] pr-[18px]">
      <div className="grid grid-cols-3 items-center px-8 py-2">
        <div className="flex justify-start">
          {user ? (
            <form
              action={async () => {
                'use server';
                await signOut();
              }}
            >
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
          ) : (
            <form
              action={async () => {
                'use server';
                await signIn('google');
              }}
            >
              <button type="submit" className="flex items-center gap-2 text-sm hover:text-purple-200 transition-colors">
                <FaUserCircle className="text-xl" />
                <span className="hidden md:inline">Entrar</span>
              </button>
            </form>
          )}
        </div>
        <div className="flex justify-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Logo width={150} height={48} />
          </Link>
        </div>
        <div className="flex justify-end">
          <AccessibilityMenu />
        </div>
      </div>
      <NavBar />
    </header>
  );
}
