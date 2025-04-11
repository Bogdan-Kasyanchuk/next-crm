import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import CompanyPromotions from '@/components/company-promotions';
import { fetchCompany } from '@/lib/data';
import ActionButton from '@/ui/action-button';
import Company from '@/ui/company';
import Loader from '@/ui/loader/loader';
import Search from '@/ui/search';
import Toolbar from '@/ui/toolbar';

type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ query?: string; }>
};

export default async function Page(props: Props) {
    const { id } = await props.params;

    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';

    const company = await fetchCompany(id);

    if (!company) {
        notFound();
    }

    return (
        <div className='l-page__content'>
            <Toolbar
                actions={
                    <>
                        <ActionButton
                            rout={`/companies/${id}/company-update`}
                            label='Update company'
                        />
                        <ActionButton
                            rout={`/companies/${id}/promotion-new`}
                            label='Add promotion'
                        />
                    </>
                }
            >
                <Search placeholder="Search promotions..." />
            </Toolbar>

            <div className="col-span-3">
                <Company company={company} />
            </div>

            <div className="col-span-9">
                <Suspense
                    key={query}
                    fallback={<Loader />}
                >
                    <CompanyPromotions
                        companyId={id}
                        query={query}
                    />
                </Suspense>
            </div>
        </div>
    );
}