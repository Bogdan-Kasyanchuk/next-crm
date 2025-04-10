'use client';

import { useRouter } from 'next/navigation';

import Button from '@/ui/button';

export default function AddCompanyButton() {
    const router = useRouter();

    return (
        <Button
            onClick={
                () => {
                    router.push('/companies/company-new', { scroll: false });
                }
            }
        >
            Add company
        </Button>
    );
}
