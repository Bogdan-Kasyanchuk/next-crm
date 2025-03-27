'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const links = [
    {
        name: 'Dashboard',
        href: '/dashboard',
        icon: '/icons/squares.svg',
    },
    {
        name: 'Companies',
        href: '/companies',
        icon: '/icons/briefcase.svg',
    },
];

export default function Links() {
    const pathname = usePathname();

    return (
        <ul className='space-y-7 mt-10'>
            {links.map((link) => (
                <li key={link.name}>
                    <Link
                        href={link.href}
                        className={clsx('flex items-center h-9 ml-5 mr-1 gap-2', {
                            'after:h-full after:ml-auto after:border-2 after:border-purple-200 after:rounded-sm': pathname === link.href,
                        })}
                    >
                        <Image width={18} height={18} src={link.icon} alt={link.name} />
                        <span className='font-medium text-zinc-50'>{link.name}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
