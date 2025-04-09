'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { CompanyStatusType } from '@/enums';
import { actionUpdateCompany } from '@/lib/actions';
import { actionDeleteCompany } from '@/lib/actions';
import { CompanyMapper } from '@/types';

import Button from '../button';
import CompanyForm from '../company-form';
import DeleteButton from '../delete-button';
import Modal from '../modal';
import StatusLabel from '../status-label';

type Props = {
    company: CompanyMapper;
};

export default function CompanyRow(props: Props) {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const actionUpdateCompanyWithId = actionUpdateCompany.bind(null, props.company.id);

    const normalizedDate = new Date(props.company.joinedAt).toLocaleDateString('uk-UA');

    return (
        <>
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
                <td className='rounded-r min-w-[130px]'>{normalizedDate}</td>
                <td className='w-[86px] min-w-[86px]'>
                    <div className='inline-flex items-center gap-x-2.5'>
                        <DeleteButton
                            className='!px-2.5'
                            actionProps={{ id: props.company.id }}
                            action={actionDeleteCompany}
                        >
                            <Image
                                width={18}
                                height={18}
                                src='/icons/trash.svg'
                                alt='Delete'
                            />
                        </DeleteButton>
                        <Button
                            className='!px-2.5'
                            onClick={
                                () => { setIsOpenModal(true); }
                            }
                        >
                            <Image
                                width={18}
                                height={18}
                                src='/icons/pencil.svg'
                                alt='Edit'
                            />
                        </Button>
                    </div>
                </td>
            </tr >

            <Modal
                show={isOpenModal}
                onClose={
                    () => { setIsOpenModal(false); }
                }
            >
                <CompanyForm
                    title='Update company'
                    action={
                        async (data) => {
                            await actionUpdateCompanyWithId(data);
                            setIsOpenModal(false);
                        }
                    }
                    initialValues={
                        {
                            status: props.company.status,
                            codeCountry: props.company.country.code,
                            title: props.company.title,
                            codeCategory: props.company.category,
                            joinedAt: normalizedDate.split('.').reverse().join('-'),
                            description: props.company.description
                        }
                    }
                />
            </Modal>
        </>
    );
}
