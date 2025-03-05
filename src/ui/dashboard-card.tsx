import { ReactNode } from 'react';

type Props = {
    label: ReactNode;
    children: ReactNode;
};

export default function DashboardCard(props: Props) {
    return (
        <div className='flex flex-col w-full h-full bg-gray-100 rounded'>
            <p className='p-4 text-xl font-semibold text-gray-900'>{props.label}</p>
            <div className='grow overflow-y-auto'>{props.children}</div>
        </div>
    );
}
