'use client';

import { useRouter } from 'next/navigation';

import Modal from '@/ui/modal';
import PromotionForm from '@/ui/promotion-form';

export default function Page() {
    const router = useRouter();

    return (
        <Modal show={true} onClose={() => { router.back() }} >
            <PromotionForm onSubmit={() => { router.back() }} />
        </Modal>
    )
}
