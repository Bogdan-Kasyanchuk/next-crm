import { ReactNode } from 'react';

import Sidebar from '@/ui/sidebar/sidebar';

type Props = {
    children: ReactNode;
    header: ReactNode;
};

export default function Layout(props: Props) {
    return (
        <div className='flex w-full h-full'>
            <Sidebar />

            <div className='l-page'>
                {props.header}

                {props.children}
            </div>
        </div>
    );
}