'use client';

import Image from 'next/image';
import { useTransition } from 'react';

import Button from './button';

import { deletePromotion } from '@/lib/actions';

type Props = {
    companyId: string,
    id: string,
};

export default function DeletePromotionButton(props: Props) {
    const [isPending, startTransition] = useTransition();

    return (
        <Button
            className='!p-1.5'
            disabled={isPending}
            onClick={
                async () => {
                    startTransition(async () => {
                        await deletePromotion(props.companyId, props.id);
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
