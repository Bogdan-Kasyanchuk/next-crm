'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import Button from '@/ui/button';

type AddPromotionButtonProps = {
    id: string
};

export default function AddPromotionButton(props: AddPromotionButtonProps) {
    const router = useRouter();

    return (
        <Button
            onClick={
                () => {
                    router.push(`/companies/${props.id}/new-promotion`, { scroll: false });
                }
            }
        >
            Add promotion
        </Button>
    );
}
