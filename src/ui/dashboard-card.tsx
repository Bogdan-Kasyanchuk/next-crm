import { ReactNode } from 'react';

export type Props = {
    label: ReactNode;
    children: ReactNode;
};

export default function DashboardCard(props: Props) {
    return (
        <div className='w-full h-full bg-gray-100 rounded'>
            <p className='p-5 text-xl font-medium text-gray-900'>{props.label}</p>
            <div>{props.children}</div>
        </div>
    );
}
