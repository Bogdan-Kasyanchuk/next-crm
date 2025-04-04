import clsx from 'clsx';
import { ReactNode } from 'react';

import { Align } from '@/types';

type Props = {
    children: ReactNode;
    align?: Align;
};

export default function SummaryTableHeader(props: Props) {
    return (
        <th
            className={
                clsx(
                    'py-2 px-4 text-sm font-normal first-of-type:rounded-l-sm last-of-type:rounded-r-sm',
                    `text-${props.align || 'left'}`,
                    '[&:nth-child(3n+1)]:text-white [&:nth-child(3n+1)]:bg-gray-900',
                    '[&:nth-child(3n+2)]:text-gray-900 [&:nth-child(3n+2)]:bg-purple-200',
                    '[&:nth-child(3n+3)]:text-gray-900 [&:nth-child(3n+3)]:bg-lime-200'
                )
            }
        >
            {props.children}
        </th>
    );
}
