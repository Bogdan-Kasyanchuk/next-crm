import { ReactNode } from 'react';
import clsx from 'clsx';

export type Props = {
  align?: 'left' | 'center' | 'right';
  children: ReactNode;
};

export default function SummaryTableCell(props: Props) {
  return (
    <td
      className={clsx(
        'py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l',
        `text-${props.align || 'left'}`,
      )}
    >
      {props.children}
    </td>
  );
}
