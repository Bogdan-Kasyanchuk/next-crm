'use client';

import Image from 'next/image';
import { useTransition } from 'react';

import Button from './button';

import { deleteCompany } from '@/lib/actions';

type Props = {
    id: string,
};

export default function DeleteCompanyButton(props: Props) {
    const [isPending, startTransition] = useTransition();

    return (
        <Button
            className='!px-2.5'
            disabled={isPending}
            onClick={
                async () => {
                    startTransition(async () => {
                        await deleteCompany(props.id);
                    });
                }
            }
        >
            <Image
                width={18}
                height={18}
                src='/icons/trash.svg'
                alt='Delete'
            />
        </Button>
    );
}
