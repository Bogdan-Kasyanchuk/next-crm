import Image from 'next/image';
import { ReactNode } from 'react';

import { randomAvatar } from '@/mock/randomImage';

type Props = {
    children: ReactNode;
};

export default function Header(props: Props) {
    return (
        <header className='flex items-center gap-5 px-[30px] py-5 border-b border-gray-300'>
            <p className='grow text-3xl font-bold'>{props.children}</p>
            <div className='self-stretch w-px bg-gray-300' />
            <div className='flex items-center gap-2.5'>
                <Image width={40} height={40} src={randomAvatar(40)} alt='Avatar' className='rounded-full' />
                <div>
                    <p className='text-base font-semibold leading-tight'>Adam Smith</p>
                    <p className='text-sm font-light text-gray-900 leading-tight'>adamsmith@gmail.com</p>
                </div>
            </div>
        </header>
    );
}
