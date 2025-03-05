import { ReactNode } from 'react';
import clsx from 'clsx';
import { Align } from '@/types';

type Props = {
    align?: Align;
    children: ReactNode;
};

export default function SummaryTableCell(props: Props) {
    return (
        <td
            className={clsx(
                'py-2 px-4 text-sm border-gray-100 border-r first-of-type:border-l',
                `text-${props.align || 'left'}`
            )}
        >
            {props.children}
        </td>
    );
}
