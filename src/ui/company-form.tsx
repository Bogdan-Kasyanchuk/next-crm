'use client';

import { Form, Formik } from 'formik';

import { CompanyStatusType } from '@/enums';
import { categoriesData, countriesData } from '@/temp/data';

import Button from './button';
import InputField from './input-field';
import LogoUploader from './logo-uploader';

export type CompanyFieldValues = {
    title: string;
    description: string;
    status: CompanyStatusType;
    joinedDate: string;
    categoryId: string;
    countryId: string;
};

const initialValues: CompanyFieldValues = {
    title: '',
    description: '',
    status: CompanyStatusType.ACTIVE,
    joinedDate: '',
    categoryId: '',
    countryId: '',
};

type CompanyFormProps = {
    onSubmit?: (values: CompanyFieldValues) => void | Promise<void>;
}

export default function CompanyForm({ onSubmit }: CompanyFormProps) {

    const handleSubmit = (values: CompanyFieldValues) => {

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
                <p className="mb-0.5 text-xl">Add new company</p>
                <div className="flex gap-6">
                    <div className="flex flex-col flex-1 gap-5">
                        <LogoUploader
                            label="Logo"
                            placeholder="Upload photo"
                        />
                        <InputField
                            required
                            label="Status"
                            placeholder="Status"
                            name="status"
                            as="select"
                            className="capitalize"
                        >
                            {
                                (Object.values(CompanyStatusType) as CompanyStatusType[]).map(
                                    (status) => (
                                        <option
                                            key={status}
                                            value={status}
                                        >
                                            {status}
                                        </option>
                                    ),
                                )
                            }
                        </InputField>

                        <InputField
                            required
                            label="Country"
                            placeholder="Country"
                            name="countryId"
                            as="select"
                        >
                            {
                                countriesData.map((country, index) => (
                                    <option
                                        key={index}
                                        value={country.title}
                                    >
                                        {country.title}
                                    </option>
                                ))
                            }
                        </InputField>
                    </div>
                    <div className="flex flex-col flex-1 gap-5">
                        <InputField
                            required
                            label="Name"
                            placeholder="Name"
                            name="title"
                        />
                        <InputField
                            required
                            label="Category"
                            placeholder="Category"
                            name="categoryId"
                            as="select"
                        >
                            {
                                categoriesData.map((category, index) => (
                                    <option
                                        key={index}
                                        value={category.label}
                                    >
                                        {category.label}
                                    </option>
                                ))
                            }
                        </InputField>
                        <InputField
                            required
                            label="Joined date"
                            type="date"
                            name="joinedDate"
                        />
                        <InputField
                            required
                            label="Description"
                            placeholder="Description"
                            name="description"
                        />
                    </div>
                </div>
                <Button
                    type="submit"
                    disabled={false}
                >
                    Add company
                </Button>
            </Form>
        </Formik>
    );
}
