import Image from 'next/image';
import { ReactNode } from 'react';

import { user } from '@/mock/user';

type Props = {
    children: ReactNode;
};

export default function Header(props: Props) {
    return (
        <header className='flex items-center gap-5 px-[30px] py-5 border-b border-gray-300'>
            <div className='grow text-3xl font-bold'>{props.children}</div>
            <div className='self-stretch w-px bg-gray-300 ml-auto' />
            <div className='flex items-center gap-2.5'>
                <Image
                    width={40}
                    height={40}
                    src={user.avatar}
                    alt={user.fullName}
                    className='rounded-full w-10 h-10'
                />
                <div>
                    <p className='text-base font-semibold leading-tight'>
                        {user.fullName}
                    </p>
                    <p className='text-sm font-light text-gray-900 leading-tight'>
                        {user.email}
                    </p>
                </div>
            </div>
        </header>
    );
}
