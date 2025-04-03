'use client';

import { ReactNode, useTransition } from 'react';

import Button from './button';

type Props<T> = {
    children: ReactNode,
    actionProps: T,
    className: string,
    action: (args: T) => Promise<void>
};

export default function DeleteButton<T>(props: Props<T>) {
    const [isPending, startTransition] = useTransition();

    return (
        <Button
            type='button'
            className={props.className}
            disabled={isPending}
            onClick={
                async () => {
                    startTransition(async () => {
                        await props.action(props.actionProps);
                    });
                }
            }
        >
            {props.children}
        </Button>
    );
}

