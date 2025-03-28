import clsx from 'clsx';
import { ComponentProps } from 'react';

type Props = ComponentProps<'button'>;

export default function Button(props: Props) {
    const { disabled, ...rest } = props;
    return (
        <button
            className={clsx(
                'py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded',
                !disabled && 'hover:bg-gray-800 active:bg-gray-950',
                disabled && 'text-zinc-100',
            )}
            {...rest}
        />
    );
}
