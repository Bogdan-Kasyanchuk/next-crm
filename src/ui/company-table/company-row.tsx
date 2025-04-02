'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { CompanyStatusType } from '@/enums';
import { deleteCompany } from '@/lib/actions';
import { CompanyMapper } from '@/types';

import Button from '../button';
import StatusLabel from '../status-label';

type Props = {
    company: CompanyMapper;
};

export default function CompanyRow(props: Props) {

    return (
        <tr className='text-center text-sm text-gray-900 bg-white h-13'>
            <td
                className={
                    clsx(
                        'text-blue-700 border-l-4 rounded-l min-w-[140px]',
                        props.company.status === CompanyStatusType.ACTIVE && 'border-green-100',
                        props.company.status === CompanyStatusType.NOT_ACTIVE && 'border-red-100',
                        props.company.status === CompanyStatusType.PENDING && 'border-orange-100',
                        props.company.status === CompanyStatusType.SUSPENDED && 'border-blue-100',
                    )
                }
            >
                {props.company.category}
            </td>
            <td className='min-w-[200px] pl-5 text-start'>
                <Link
                    href={`/companies/${props.company.id}`}
                    className='inline-block hover:opacity-75 hover:text-red-500'
                >
                    <div className='flex items-center gap-2.5'>
                        <Image
                            width={32}
                            height={32}
                            src={props.company.logo}
                            alt={props.company.title}
                            className='rounded-full w-8 h-8'
                        />
                        {props.company.title}
                    </div>
                </Link>
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
                        className={
                            clsx(
                                props.company.hasPromotions ? 'text-green-700' : 'text-red-700'
                            )
                        }
                    >
                        {props.company.hasPromotions ? 'Yes' : 'No'}
                    </span>
                </div>
            </td>
            <td className='min-w-[120px]'>{props.company.country.title}</td>
            <td className='rounded-r min-w-[130px]'>
                {new Date(props.company.joinedAt).toLocaleDateString('uk-UA')}
            </td>
            <td className='w-[100px]'>
                <Button
                    onClick={
                        () => {
                            deleteCompany(props.company.id);
                        }
                    }
                >
                    Delete
                </Button>
            </td>
        </tr>
    );
}
