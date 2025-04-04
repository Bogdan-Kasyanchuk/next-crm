import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

type InputProps = ComponentPropsWithoutRef<'input'> & {
    label?: string;
}

export default function InputField(props: InputProps) {
    const { label, id, className, ...rest } = props;

    return (
        <div className="flex flex-col">
            {
                label &&
                <label
                    htmlFor={id}
                    className="mb-2 text-base color-gray-900"
                >
                    {label}
                </label>
            }
            <input
                id={id}
                className={clsx('p-3 h-11 text-sm rounded border border-gray-300 shadow', className)}
                {...rest}
            />
        </div>
    );
}
