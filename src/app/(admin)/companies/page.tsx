import { Suspense } from 'react';

import Companies from '@/components/companies';
import AddCompanyButton from '@/ui/add-company-button';
import Loader from '@/ui/loader/loader';
import Search from '@/ui/search';
import Toolbar from '@/ui/toolbar';

type Props = {
    searchParams: Promise<{ query?: string; }>
};

export default async function Page(props: Props) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';

    return (
        <div className='l-page__content'>
            <Toolbar action={<AddCompanyButton />}>
                <Search placeholder="Search companies..." />
            </Toolbar>

            <div className='col-span-12'>
                <Suspense
                    key={query}
                    fallback={<Loader />}
                >
                    <Companies query={query} />
                </Suspense>
            </div>
        </div>
    );
}