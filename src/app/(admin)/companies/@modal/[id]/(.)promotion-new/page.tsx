'use client';

import { useRouter, useParams } from 'next/navigation';

import Modal from '@/ui/modal';
import PromotionForm from '@/ui/promotion-form';

export default function Page() {
    const router = useRouter();
    const { id } = useParams<{ id: string }>();

    return (
        <Modal
            show={true}
            onClose={
                () => { router.back(); }
            }
        >
            <PromotionForm companyId={id} />
        </Modal>
    );
}
