import Image from 'next/image';

import { CompanyStatusType } from '@/enums';
import { createCompany } from '@/lib/actions';
import { categories, countries, Country } from '@/mock/data';
import { randomImage } from '@/mock/randomImage';

import InputField from './input-field';
import SelectField from './select-field';
import SubmitButton from './submit-button';

export default function CompanyForm() {

    return (
        <form
            action={createCompany}
            className="flex flex-col gap-10"
        >
            <p className="mb-0.5 text-xl">Add new company</p>
            <div className="flex gap-6">
                <div className="flex flex-col flex-1 gap-5">
                    <Image
                        className="rounded-full w-[160px] h-[160px] mx-auto"
                        width={160}
                        height={160}
                        src={randomImage(200, 200)}
                        alt="Image"
                    />
                    <input
                        type="text"
                        name="logo"
                        value={randomImage(200, 200)}
                        className="hidden"
                    />
                    <SelectField
                        required
                        label="Status"
                        name="status"
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
                                )
                            )
                        }
                    </SelectField>

                    <SelectField
                        required
                        label="Country"
                        name="countryCode"
                    >
                        {
                            (Object.keys(countries) as Country[]).map(
                                (code) => (
                                    <option
                                        key={code}
                                        value={code}
                                    >
                                        {countries[code]}
                                    </option>
                                )
                            )
                        }
                    </SelectField>
                </div>

                <div className="flex flex-col flex-1 gap-5">
                    <InputField
                        required
                        label="Name"
                        placeholder="Name"
                        name="title"
                    />
                    <SelectField
                        required
                        label="Category"
                        name="category"
                    >
                        {
                            categories.map(
                                (option) => (
                                    <option
                                        key={option}
                                        value={option}
                                    >
                                        {option}
                                    </option>
                                ))
                        }
                    </SelectField>
                    <InputField
                        required
                        label="Joined date"
                        type="date"
                        name="joinedAt"
                    />
                    <InputField
                        required
                        label="Description"
                        placeholder="Description"
                        name="description"
                    />
                </div>
            </div>
            <SubmitButton >
                Add company
            </SubmitButton>
        </form>
    );
}
