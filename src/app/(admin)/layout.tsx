import Sidebar from '@/ui/sidebar/sidebar';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function Layout(props: Props) {
    return (
        <div className='flex w-full h-full'>
            <Sidebar />

            {props.children}
        </div>
    );
}
