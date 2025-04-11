'use client';

import { useRouter } from 'next/navigation';

import Button from '@/ui/button';

type Props = {
    label: string
    rout: string
};

export default function ActionButton(props: Props) {
    const router = useRouter();

    return (
        <Button
            onClick={
                () => {
                    router.push(props.rout, { scroll: false });
                }
            }
        >
            {props.label}
        </Button>
    );
}
