'use client';

import { Form, Formik } from 'formik';
import React from 'react';

import Button from './button';
import InputField from './input-field';
import LogoUploader from './logo-uploader';

export type PromotionFieldValues = {
    title: string;
    description: string;
    discount: string | number;
};

const initialValues: PromotionFieldValues = {
    title: '',
    description: '',
    discount: '',
};

type PromotionFormProps = {
    onSubmit?: (values: PromotionFieldValues) => void | Promise<void>;
}

export default function PromotionForm({ onSubmit }: PromotionFormProps) {
    const handleSubmit = async (values: PromotionFieldValues) => {

        if (onSubmit) {
            onSubmit(values);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            <Form className="flex flex-col gap-10">
                <p className="mb-0.5 text-xl">Add new promotion</p>
                <div className="flex flex-col gap-5">
                    <InputField
                        required
                        label="Title"
                        placeholder="Title"
                        name="title"
                    />
                    <InputField
                        required
                        label="Description"
                        placeholder="Description"
                        name="description"
                    />
                    <InputField
                        required
                        type="number"
                        label="Discount"
                        placeholder="Discount"
                        name="discount"
                    />
                    <LogoUploader
                        square
                        label="Image"
                        placeholder="Upload photo"
                    />
                </div>
                <Button
                    type="submit"
                    disabled={false}
                >
                    Add promotion
                </Button>
            </Form>
        </Formik>
    );
}
