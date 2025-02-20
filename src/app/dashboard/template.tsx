import Sidebar from '@/ui/sidebar/sidebar';
import { ReactNode } from 'react';

export default function Template({ children }: { children: ReactNode }) {
    console.log('Template');
    return (
        <div className='flex w-full h-full'>
            <div className='flex items-center justify-center w-20 h-full bg-red-200 shrink-0'>
                Sidebar
            </div>
            {children}
        </div>
    );
}
