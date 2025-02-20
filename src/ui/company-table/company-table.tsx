import { ReactNode } from 'react';

const headers = ['Category', 'Company', 'Status', 'Promotion', 'Country', 'Joined date'];

export type Props = {
    children: ReactNode;
};
export default function CompanyTable(props: Props) {
    return (
        <table className='w-full border-separate table-auto border-spacing-y-2'>
            <thead>
                <tr>
                    {headers.map((header, i) => (
                        <th key={i} className='pb-5 text-sm font-light text-gray-900'>
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>{props.children}</tbody>
        </table>
    );
}
