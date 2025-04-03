import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import AddPromotionButton from '@/components/add-promotion-button';
import CompanyPromotions from '@/components/company-promotions';
// import { fetchCompany } from '@/lib/data';
import { CompanyShema } from '@/types';
import Company from '@/ui/company';
import Loader from '@/ui/loader/loader';
import SearchInput from '@/ui/search-input';
import Toolbar from '@/ui/toolbar';

async function getCompany(id: string) {
    const res = await fetch(`${process.env.API_HOST}/companies/${id}`);
    const company: CompanyShema = await res.json();

    if (!company) notFound();
    return company;
}

export async function generateStaticParams() {
    const companies = await fetch(`${process.env.API_HOST}/companies`).then((res) => res.json());

    return companies.map((company: CompanyShema) => ({
        id: String(company.id),
    }));
}

type Props = {
    params: Promise<{ id: string }>
};

export default async function Page(props: Props) {
    const { id } = await props.params;

    const company = await getCompany(id);

    // const company = await fetchCompany(id);

    if (!company) {
        notFound();
    }

    return (
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
    );
}