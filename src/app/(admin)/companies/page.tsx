import { Suspense } from 'react';

import Companies from '@/components/companies';
import ActionButton from '@/ui/action-button';
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
            <Toolbar
                actions={
                    <ActionButton
                        rout='/companies/company-new'
                        label='Add company'
                    />
                }
            >
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