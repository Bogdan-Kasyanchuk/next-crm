'use client';

import { useRouter, useParams } from 'next/navigation';

import { actionCreatePromotion } from '@/lib/actions';
import Modal from '@/ui/modal';
import PromotionForm from '@/ui/promotion-form';

export default function Page() {
    const router = useRouter();
    const { id } = useParams<{ id: string }>();

    const createPromotionWithCompanyId = actionCreatePromotion.bind(null, id);

    return (
        <Modal
            show={true}
            onClose={
                () => { router.back(); }
            }
        >
            <PromotionForm
                title='Add new promotion'
                action={createPromotionWithCompanyId}
            />
        </Modal>
    );
}
