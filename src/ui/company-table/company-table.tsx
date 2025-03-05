import clsx from 'clsx';
import { ReactNode } from 'react';

const headers = ['Category', 'Company', 'Status', 'Promotion', 'Country', 'Joined date'];

type Props = {
    children: ReactNode;
};
export default function CompanyTable(props: Props) {
    return (
        <table className='-mt-2 w-full border-separate table-auto border-spacing-y-2'>
            <thead>
                <tr>
                    {headers.map((header, i) => (
                        <th key={i}
                            className={clsx(
                                'p-4 text-md font-semibold',
                                '[&:nth-child(3n+1)]:text-white [&:nth-child(3n+1)]:bg-gray-900',
                                '[&:nth-child(3n+2)]:text-gray-900 [&:nth-child(3n+2)]:bg-purple-200',
                                '[&:nth-child(3n+3)]:text-gray-900 [&:nth-child(3n+3)]:bg-lime-200'
                            )}
                        >
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>{props.children}</tbody>
        </table>
    );
}
