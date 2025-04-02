'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
    const router = useRouter();

    const handleExitClick = () => {
        router.push('/');
    };

    return (
        <button
            className='flex items-center gap-2 p-5 mt-auto'
            onClick={handleExitClick}
        >
            <Image
                width={18}
                height={18}
                src='/icons/arrow-left-on-rectangle.svg'
                alt='Exit'
            />
            <span className='font-medium text-white'>Exit</span>
        </button>
    );
}
