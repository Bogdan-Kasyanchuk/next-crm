'use client';

import { useRouter } from 'next/navigation';

import { actionCreateCompany } from '@/lib/actions';
import CompanyForm from '@/ui/company-form';
import Modal from '@/ui/modal';

export default function Page() {
    const router = useRouter();

    return (
        <Modal
            show={true}
            onClose={
                () => { router.back(); }
            }
        >
            <CompanyForm
                title='Add new company'
                action={actionCreateCompany}
            />
        </Modal>
    );
}
