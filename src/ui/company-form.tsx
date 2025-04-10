import Image from 'next/image';

import { CompanyStatusType } from '@/enums';
import { categories, countries } from '@/mock/data';
import { randomImage } from '@/mock/randomImage';
import { CodeCategory, CodeCountry } from '@/types';
import InputField from '@/ui/input-field';
import SelectField from '@/ui/select-field';
import SubmitButton from '@/ui/submit-button';

type Props = {
    title: string,
    initialValues?: {
        status: CompanyStatusType,
        codeCountry: string,
        title: string,
        codeCategory: string,
        joinedAt: string,
        description?: string,
    },
    action: (formData: FormData) => Promise<void>
}

export default function CompanyForm(props: Props) {
    const logo = randomImage(200, 200);

    return (
        <form
            action={props.action}
            className="flex flex-col gap-10"
        >
            <p className="text-xl leading-[30px]">{props.title}</p>

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
                        defaultValue={props.initialValues?.status}
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
                        defaultValue={props.initialValues?.codeCountry}
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
                        defaultValue={props.initialValues?.title}
                        label="Title"
                        placeholder="Title"
                        name="title"
                    />

                    <SelectField
                        required
                        defaultValue={props.initialValues?.codeCategory}
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
                        defaultValue={props.initialValues?.joinedAt}
                        label="Joined date"
                        type="date"
                        name="joinedAt"
                    />

                    <InputField
                        defaultValue={props.initialValues?.description}
                        label="Description"
                        placeholder="Description"
                        name="description"
                    />
                </div>
            </div>

            <SubmitButton >
                {props.title === 'Update company' ? 'Update' : 'Create'}
            </SubmitButton>
        </form>
    );
}

