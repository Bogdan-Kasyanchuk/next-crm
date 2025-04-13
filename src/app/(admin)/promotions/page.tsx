import { Suspense } from 'react';

import PromotionsPage from '@/components/promotions-page';
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
            <Toolbar >
                <Search placeholder="Search promotions..." />
            </Toolbar>

            <div className='col-span-12'>
                <Suspense
                    key={query}
                    fallback={<Loader />}
                >
                    <PromotionsPage query={query} />
                </Suspense>
            </div>
        </div>
    );
}