import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import AddPromotionButton from '@/components/add-promotion-button';
import CompanyPromotions from '@/components/company-promotions';
import { fetchCompanyData } from '@/lib/data';
import Company from '@/ui/company';
import Loader from '@/ui/loader/loader';
import SearchInput from '@/ui/search-input';
import Toolbar from '@/ui/toolbar';

type Props = {
    params: { id: string }
};

export default async function Page(props: Props) {
    const company = await fetchCompanyData(props.params.id);

    if (!company) {
        notFound();
    }

    return (
        <div className='l-page__content'>
            <Toolbar action={<AddPromotionButton id={props.params.id} />}>
                <SearchInput />
            </Toolbar>

            <div className="col-span-3">
                <Company company={company} />
            </div>

            <div className="col-span-9">
                <Suspense fallback={<Loader />}>
                    <CompanyPromotions id={props.params.id} />
                </Suspense>
            </div>
        </div>
    );
}