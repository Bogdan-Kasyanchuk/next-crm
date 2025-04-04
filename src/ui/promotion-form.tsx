import Image from 'next/image';

import { actionCreatePromotion } from '@/lib/actions';
import { randomImage } from '@/mock/randomImage';

import InputField from './input-field';
import SubmitButton from './submit-button';

export type PromotionFormProps = {
    companyId: string;
}

export default function PromotionForm(props: PromotionFormProps) {
    const image = randomImage(400, 200);

    const createPromotionWithCompanyId = actionCreatePromotion.bind(null, props.companyId);

    return (
        <form
            action={createPromotionWithCompanyId}
            className="flex flex-col gap-10"
        >
            <p className="mb-0.5 text-xl">Add new promotion</p>

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
                        label="Title"
                        placeholder="Title"
                        name="title"
                    />

                    <InputField
                        required
                        label="Discount amount"
                        placeholder="-40%"
                        name="discount"
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
                Add promotion
            </SubmitButton>
        </form>
    );
}

