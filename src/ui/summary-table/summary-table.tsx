import { ReactNode } from 'react';

type Props = {
    headers: ReactNode;
    children?: ReactNode;
};

export default function SummaryTable(props: Props) {
    return (
        <table className='w-full border-separate table-auto border-spacing-0'>
            <thead className='sticky top-0'>
                <tr>{props.headers}</tr>
            </thead>
            <tbody className='[&>tr:nth-child(2n)]:bg-gray-100 [&>tr:nth-child(2n+1)]:bg-white'>
                {props.children}
            </tbody>
        </table>
    );
}
