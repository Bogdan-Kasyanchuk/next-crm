'use client';

import Image from 'next/image';
import { useState } from 'react';

import Button from './button';
import Modal from './modal';
import PromotionForm from './promotion-form';

import { actionUpdatePromotion } from '@/lib/actions';

type Props = {
    id: string,
    title: string,
    discount: string;
    description?: string;
}

export default function UpdatePromotion(props: Props) {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const actionUpdatePromotionWithId = actionUpdatePromotion.bind(null, props.id);

    return (
        <>
            <Button
                className='!p-2'
                onClick={
                    () => {
                        setIsOpenModal(true);
                    }
                }
            >
                <Image
                    width={18}
                    height={18}
                    src='/icons/pencil.svg'
                    alt='Edit'
                />
            </Button>

            <Modal
                show={isOpenModal}
                onClose={
                    () => {
                        setIsOpenModal(false);
                    }
                }
            >
                <PromotionForm
                    title='Update promotion'
                    action={
                        async (data) => {
                            await actionUpdatePromotionWithId(data);
                            setIsOpenModal(false);
                        }
                    }
                    initialValues={
                        {
                            title: props.title,
                            discount: props.discount,
                            description: props.description
                        }
                    }
                />
            </Modal>
        </>
    );
}
