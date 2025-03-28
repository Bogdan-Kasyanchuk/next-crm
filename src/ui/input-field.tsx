'use client';

import { Field, FieldAttributes } from 'formik';

type InputFieldProps = FieldAttributes<string> & {
  label?: string;
}

export default function InputField(props: InputFieldProps) {
  const { label, id, ...rest } = props;

  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      <Field
        id={id}
        className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
        {...rest}
      />
    </div>
  );
}
