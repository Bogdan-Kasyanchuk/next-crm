import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import StatusLabel from '../status-label';
import { Company } from '@/types';
import { CompanyStatus } from '@/enums';

type Props = {
    company: Company;
};

export default function CompanyRow(props: Props) {
    return (
        <tr className='text-center text-sm text-gray-900 bg-white h-13'>
            <td className={clsx(
                'text-blue-700 border-l-4 rounded-l min-w-[140px]',
                props.company.status === CompanyStatus.ACTIVE && 'border-green-100',
                props.company.status === CompanyStatus.NOT_ACTIVE && 'border-red-100',
                props.company.status === CompanyStatus.PENDING && 'border-orange-100',
                props.company.status === CompanyStatus.SUSPENDED && 'border-blue-100',
            )}
            >
                {props.company.category}
            </td>
            <td className='min-w-[230px]'>
                <div className='flex items-center justify-center gap-2.5'>
                    <Image
                        width={32}
                        height={32}
                        src={props.company.avatar || '/images/costo.png'}
                        alt={props.company.title}
                    />
                    {props.company.title}
                </div>
            </td>
            <td className='min-w-[140px]'>
                <StatusLabel status={props.company.status} />
            </td>
            <td className='min-w-[130px]'>
                <div className='inline-flex items-center gap-1'>
                    <Image
                        width={16}
                        height={16}
                        src={`/icons/${props.company.hasPromotions ? 'check' : 'x-mark'}.svg`}
                        alt='promotion icon'
                    />
                    <span
                        className={clsx(
                            props.company.hasPromotions ? 'text-green-700' : 'text-red-700'
                        )}
                    >
                        {props.company.hasPromotions ? 'Yes' : 'No'}
                    </span>
                </div>
            </td>
            <td className='min-w-[120px]'>{props.company.country}</td>
            <td className='rounded-r min-w-[130px]'>
                {new Date(props.company.joinedAt).toLocaleDateString('uk-UA')}
            </td>
        </tr>
    );
}
