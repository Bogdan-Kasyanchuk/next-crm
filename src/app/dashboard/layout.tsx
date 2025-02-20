import Sidebar from '@/ui/sidebar/sidebar';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
    console.log('Layout');

    return (
        <div className='flex w-full h-full'>
            <Sidebar />
            {children}
        </div>
    );
}
