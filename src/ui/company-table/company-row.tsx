import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import StatusLabel from '../status-label';
import { Companies } from '@/types';

export type Props = {
    company: Companies[number];
};

export default function CompanyRow(props: Props) {
    return (
        <tr className='text-center text-gray-900 bg-white h-14'>
            <td className='text-xs font-medium text-blue-700 border-l-4 border-blue-700 rounded-l'>
                {props.company.category}
            </td>
            <td>
                <div className='flex items-center justify-center gap-2'>
                    <Image
                        width={32}
                        height={32}
                        src={props.company.avatar || '/images/costo.png'}
                        alt={props.company.title}
                    />
                    {props.company.title}
                </div>
            </td>
            <td>
                <StatusLabel status={props.company.status} />
            </td>
            <td>
                <div className='inline-flex items-center gap-1'>
                    <Image
                        width={16}
                        height={16}
                        src={`/icons/${props.company.hasPromotions ? 'check' : 'x-mark'}.svg`}
                        alt='promotion icon'
                    />
                    <span
                        className={clsx(
                            'text-sm font-medium',
                            props.company.hasPromotions ? 'text-green-700' : 'text-red-700'
                        )}
                    >
                        {props.company.hasPromotions ? 'Yes' : 'No'}
                    </span>
                </div>
            </td>
            <td>{props.company.country}</td>
            <td className='rounded-r'>
                {new Date(props.company.joinedAt).toLocaleDateString('uk-UA')}
            </td>
        </tr>
    );
}
