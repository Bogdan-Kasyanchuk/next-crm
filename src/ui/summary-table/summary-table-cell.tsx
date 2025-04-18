import clsx from 'clsx';
import { ReactNode } from 'react';

import { Align } from '@/types';

type Props = {
    children: ReactNode;
    align?: Align;
};

export default function SummaryTableCell(props: Props) {
    return (
        <td
            className={
                clsx(
                    'py-2 px-4 text-sm border-gray-100 border-r first-of-type:border-l',
                    `text-${props.align || 'left'}`
                )
            }
        >
            {props.children}
        </td>
    );
}
