'use client'
import { useRouter } from 'next/router';
import Link from 'next/link';

export const NavLink = ({ href, children }) => {
  const router = useRouter();
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return (
      <button className='shadow-black' onClick={() => router.push(href)}>
        {children}
      </button>
    );
  }

  return (
    <Link className='shadow-black' href={href}>
      <li className={`nav-item  ${router.pathname === href ? 'active' : ''}`}>
        {children}
      </li>
    </Link>
  );
};