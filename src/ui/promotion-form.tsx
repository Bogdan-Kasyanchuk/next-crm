import Image from 'next/image';

import { randomImage } from '@/mock/randomImage';

import InputField from './input-field';
import SubmitButton from './submit-button';

type PromotionFormProps = {
    title: string,
    initialValues?: {
        title: string,
        discount: string;
        description?: string;
    },
    action: (formData: FormData) => Promise<void>
}

export default function PromotionForm(props: PromotionFormProps) {
    const image = randomImage(400, 200);

    return (
        <form
            action={props.action}
            className="flex flex-col gap-10"
        >
            <p className="mb-0.5 text-xl">{props.title}</p>

            <div className="flex gap-6">
                <div className="flex flex-col flex-1">
                    <label className="mb-2 text-base color-gray-900 inline-block">
                        Image
                    </label>
                    <div className="h-[236px] relative">
                        <Image
                            fill
                            src={image}
                            alt="Image"
                        />
                    </div>

                    <input
                        type="text"
                        name="image"
                        value={image}
                        className="hidden"
                    />
                </div>

                <div className="flex flex-col flex-1 gap-5">
                    <InputField
                        required
                        defaultValue={props.initialValues?.title}
                        label="Title"
                        placeholder="Title"
                        name="title"
                    />

                    <InputField
                        required
                        defaultValue={props.initialValues?.discount}
                        label="Discount amount"
                        placeholder="-40%"
                        name="discount"
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
                {props.title === 'Update promotion' ? 'Update' : 'Create'}
            </SubmitButton>
        </form>
    );
}

