'use client';

import Image from 'next/image';
import { useState } from 'react';

import { CompanyStatusType } from '@/enums';
import { actionUpdateCompany } from '@/lib/actions';
import Button from '@/ui/button';
import CompanyForm from '@/ui/company-form';
import Modal from '@/ui/modal';

type Props = {
    id: string,
    status: CompanyStatusType,
    codeCountry: string,
    title: string,
    codeCategory: string,
    joinedAt: string,
    description?: string,
};

export default function UpdateCompany(props: Props) {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const actionUpdateCompanyWithId = actionUpdateCompany.bind(null, props.id);

    return (
        <>
            <Button
                className='!px-2.5'
                onClick={
                    () => {
                        setIsOpenModal(true);
                    }
                }
            >
                <Image
                    width={18}
                    height={18}
                    src='/icons/pencil.svg'
                    alt='Edit'
                />
            </Button>

            <Modal
                show={isOpenModal}
                onClose={
                    () => {
                        setIsOpenModal(false);
                    }
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
                            status: props.status,
                            codeCountry: props.codeCountry,
                            title: props.title,
                            codeCategory: props.codeCategory,
                            joinedAt: props.joinedAt,
                            description: props.description
                        }
                    }
                />
            </Modal>
        </>
    );
}
