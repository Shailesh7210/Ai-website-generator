"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { SignInButton, useUser } from '@clerk/nextjs';

const MenuOptions = [
  { name: 'Pricing', Path: '/pricing' },
  { name: 'Contact Us', Path: '/contact-us' },
];

function Header() {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between p-4 shadow">
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <Image src="/logo.svg" alt="logo" width={35} height={35} />
        <h2 className="font-bold text-xl">AI Website Generator</h2>
      </div>

      {/* Menu options */}
      <div className="flex gap-3 font-bold">
        {MenuOptions.map((menu) => (
          <Link key={menu.name} href={menu.Path}>
            <Button variant="ghost">{menu.name}</Button>
          </Link>
        ))}
      </div>

      {/* Get Started Button */}
      <div>
        {!user ? (
          <SignInButton mode="modal" forceRedirectUrl="/workspace">
            <Button>
              Get Started <ArrowRight />
            </Button>
          </SignInButton>
        ) : (
          <Link href="/workspace">
            <Button>
              Get Started <ArrowRight />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
