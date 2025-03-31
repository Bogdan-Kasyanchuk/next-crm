'use client';

import { useRouter } from 'next/navigation';

import CompanyForm from '@/ui/company-form';
import Modal from '@/ui/modal';

export default function Page() {
    const router = useRouter();

    return (
        <Modal show={true} onClose={() => { router.back() }} >
            <CompanyForm onSubmit={() => { router.back() }} />
        </Modal>
    );
}
