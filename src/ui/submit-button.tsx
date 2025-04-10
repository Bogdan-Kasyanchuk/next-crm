'use client';

import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

import Button from '@/ui/button';

type Props = {
    children: ReactNode;
};

export default function SubmitButton(props: Props) {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            disabled={pending}
        >
            {props.children}
        </Button>
    );
}
