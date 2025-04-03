'use client';

import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

import Button from './button';

type SubmitButtonProps = {
    children: ReactNode;
};

export default function SubmitButton(props: SubmitButtonProps) {
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
