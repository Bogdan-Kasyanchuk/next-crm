import clsx from 'clsx';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

type Props = ComponentPropsWithoutRef<'select'> & {
    children: ReactNode;
    label?: string;
}

export default function SelectField(props: Props) {
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
            <select
                id={id}
                className={clsx('p-3 h-11 text-sm rounded border border-gray-300 shadow', className)}
                {...rest}
            >
                {props.children}
            </select>
        </div>
    );
}
