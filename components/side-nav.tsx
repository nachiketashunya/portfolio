'use client';

import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import {sidebarLinks} from '@/constants'

import useNavigation from '@/hook/use-navigation';
import { Icon } from '@iconify/react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils'

const SideNav = () => {
  const pathname = usePathname();

  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-24 text-white max-sm:hidden lg:w-[264px]'>

    <div className="flex flex- flex-col gap-6">
      {sidebarLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <Link
            href={link.route} 
            key={link.label}
            className={cn('flex gap-4 items-center p-4 rounded-lg h-12 w-full justify-start', {
              'bg-lime-50': isActive,
              'text-black': isActive
            }) } 
          >
            <Image
              src={ isActive && link.actUrl ? link.actUrl : link.imgUrl}
              alt={link.label}
              width={24}
              height={24}
            />
            <p className='text-lg font-semibold max-lg:hidden'>
              {link.label}
            </p>
        
          </Link>
        )
      })}
    </div>
    </section>
  );
};

export default SideNav;
