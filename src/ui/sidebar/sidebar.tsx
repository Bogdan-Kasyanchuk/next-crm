import Image from 'next/image';
import Links from './links';
import ExitButton from './exit-button';

export default function Sidebar() {
    return (
        <aside className='w-[170px] h-full lg:w-[200px] shrink-0 2xl:w-[230px]'>
            <div className='flex flex-col h-full overflow-y-auto bg-gray-900'>
                <Image
                    className='py-7 mx-auto'
                    width={122}
                    height={25}
                    src='/icons/logo.svg'
                    alt='logo'
                />
                <Links />
                <ExitButton />
            </div>
        </aside>
    );
}
