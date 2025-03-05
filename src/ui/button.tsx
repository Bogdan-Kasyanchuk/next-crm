'use client';

import { ComponentProps } from 'react';

type Props = ComponentProps<'button'>;

export default function Button(props: Props) {
    return (
        <button
            {...props}
            className={
                'py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded'
            }
        />
    );
}
