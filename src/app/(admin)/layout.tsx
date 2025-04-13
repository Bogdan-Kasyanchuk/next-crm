import { ReactNode } from 'react';

import Header from '@/ui/header';
import Sidebar from '@/ui/sidebar/sidebar';

type Props = {
    children: ReactNode;
    title: ReactNode;
    modal: ReactNode;
};

export default function Layout(props: Props) {
    return (
        <>
            <div className='flex w-full h-full'>
                <Sidebar />

                <div className='l-page'>
                    <Header>{props.title}</Header>

                    {props.children}
                </div>
            </div>

            {props.modal}
        </>
    );
}