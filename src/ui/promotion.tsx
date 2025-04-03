import Image from 'next/image';
import React from 'react';

import { deletePromotion } from '@/lib/actions';
import { PromotionMapper } from '@/types';

import Button from './button';
import DeleteButton from './delete-button';

type PromotionProps = {
    promotion: PromotionMapper;
}

export default function Promotion({ promotion }: PromotionProps) {
    return (
        <div className="rounded overflow-hidden	bg-gray-100 relative">
            <div className="relative w-full h-[200px] bg-gray-300">
                <Image
                    fill
                    src={promotion.image}
                    alt={promotion.title}
                />
                <div className="w-14 h-14 absolute top-0 left-px rounded-br-full bg-lime-200" />
                <div className="w-14 h-14 absolute inset-0 py-3 pr-3 pl-0.5 rounded-br-full bg-gray-900">
                    <p className="text-center text-xs font-bold text-lime-200">{`-${promotion.discount}%`}</p>
                </div>
            </div>
            <div className="flex flex-col p-5 gap-3">
                <p className="text-base font-semibold text-gray-900">
                    {promotion.title}
                </p>
                <p className="text-sm text-gray-900">{promotion.description}</p>
            </div>
            <div className='absolute top-0 right-0 inline-flex items-center gap-x-2.5'>
                <DeleteButton
                    className='!p-1.5'
                    actionProps={
                        {
                            companyId: promotion.companyId,
                            id: promotion.id
                        }
                    }
                    action={deletePromotion}
                >
                    <Image
                        width={18}
                        height={18}
                        src='/icons/trash.svg'
                        alt='Delete'
                    />
                </DeleteButton>
                <Button className='!p-1.5'>
                    <Image
                        width={18}
                        height={18}
                        src='/icons/pencil.svg'
                        alt='Edit'
                    />
                </Button>
            </div>
        </div>
    );
}
