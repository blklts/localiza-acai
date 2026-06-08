import Link from 'next/link';
import Logo from './Logo';
import AccessibilityMenu from './AccessibilityMenu';
import NavBar from './NavBar';
import SignInModal from './SignInModal';
import { auth, signIn, signOut } from '@/auth';

export default async function Header() {
  const session = await auth();

  async function handleSignIn() {
    'use server';
    await signIn('google');
  }

  async function handleSignOut() {
    'use server';
    await signOut();
  }

  return (
    <header className="relative z-50 bg-primary text-white md:rounded-b-[20px] pl-[18px] pr-[18px]">
      <div className="grid grid-cols-3 items-center px-8 py-2">
        <div className="flex justify-start">
          <SignInModal user={session?.user} onSignIn={handleSignIn} onSignOut={handleSignOut} />
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
