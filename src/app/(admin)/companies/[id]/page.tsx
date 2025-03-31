import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import AddPromotionButton from '@/components/add-promotion-button';
import CompanyPromotions from '@/components/company-promotions';
import { fetchCompanyData } from '@/lib/data';
import Company from '@/ui/company';
import Header from '@/ui/header';
import Loader from '@/ui/loader/loader';
import SearchInput from '@/ui/search-input';
import Toolbar from '@/ui/toolbar';

type Props = {
    params: Promise<{ id: string }>
};

export default async function Page(props: Props) {
    const { id } = await props.params

    const company = await fetchCompanyData(id);

    if (!company) {
        notFound();
    }

    return (
        <div className='l-page'>
            <Header>{company.title}</Header>

            <div className='l-page__content'>
                <Toolbar action={<AddPromotionButton id={id} />}>
                    <SearchInput />
                </Toolbar>

                <div className="col-span-3">
                    <Company company={company} />
                </div>

                <div className="col-span-9">
                    <Suspense fallback={<Loader />}>
                        <CompanyPromotions id={id} />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
