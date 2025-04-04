import Image from 'next/image';

import { CompanyStatusType } from '@/enums';
import { actionCreateCompany } from '@/lib/actions';
import { categories, countries, CodeCountry, CodeCategory } from '@/mock/data';
import { randomImage } from '@/mock/randomImage';

import InputField from './input-field';
import SelectField from './select-field';
import SubmitButton from './submit-button';

export default function CompanyForm() {
    const logo = randomImage(200, 200);

    return (
        <form
            action={actionCreateCompany}
            className="flex flex-col gap-10"
        >
            <p className="mb-0.5 text-xl">Add new company</p>

            <div className="flex gap-6">
                <div className="flex flex-col flex-1 gap-5">
                    <div>
                        <label className="text-base color-gray-900">
                            Logo
                        </label>
                        <Image
                            className="rounded-full w-[148px] h-[148px] mx-auto"
                            width={160}
                            height={160}
                            src={logo}
                            alt="Logo"
                        />
                        <input
                            type="text"
                            name="logo"
                            value={logo}
                            className="hidden"
                        />
                    </div>

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
                        name="codeCountry"
                    >
                        {
                            (Object.keys(countries) as CodeCountry[]).map(
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
                        label="Title"
                        placeholder="Title"
                        name="title"
                    />

                    <SelectField
                        required
                        label="Category"
                        name="codeCategory"
                    >
                        {
                            (Object.keys(categories) as CodeCategory[]).map(
                                (code) => (
                                    <option
                                        key={code}
                                        value={code}
                                    >
                                        {categories[code]}
                                    </option>
                                )
                            )
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
