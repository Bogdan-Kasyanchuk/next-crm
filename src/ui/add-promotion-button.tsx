'use client';

import { useRouter } from 'next/navigation';

import Button from '@/ui/button';

type Props = {
    id: string
};

export default function AddPromotionButton(props: Props) {
    const router = useRouter();

    return (
        <Button
            onClick={
                () => {
                    router.push(`/companies/${props.id}/promotion-new`, { scroll: false });
                }
            }
        >
            Add promotion
        </Button>
    );
}
