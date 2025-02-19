import { ReactNode } from 'react';
import clsx from 'clsx';

export type Props = {
  align?: 'left' | 'center' | 'right';
  children: ReactNode;
};

export default function SummaryTableHeader(props: Props) {
  return (
    <th
      className={clsx(
        'py-2 px-5 text-xs font-normal first-of-type:rounded-l-sm last-of-type:rounded-r-sm',
        `text-${props.align || 'left'}`,
        '[&:nth-child(3n+1)]:text-white [&:nth-child(3n+1)]:bg-gray-900',
        '[&:nth-child(3n+2)]:text-gray-900 [&:nth-child(3n+2)]:bg-purple-200',
        '[&:nth-child(3n+3)]:text-gray-900 [&:nth-child(3n+3)]:bg-lime-200',
      )}
    >
      {props.children}
    </th>
  );
}
