import { Suspense } from 'react';

import Categories from '@/components/categories';
import Countries from '@/components/countries';
import Promotions from '@/components/promotions';
import Sales from '@/components/sales';
import Statistics from '@/components/statistics';
import Header from '@/ui/header';
import Loader from '@/ui/loader/loader';

export default async function Page() {
    return (
        <div className='l-page'>
            <Header>Dashboard</Header>

            <div className='l-page__content'>
                <div className='col-span-12 h-[292px] xl:h-[136px]'>
                    <Suspense fallback={<Loader />}>
                        <Statistics />
                    </Suspense>
                </div>
                <div className='col-span-12 h-[276px] xl:col-span-5 xl:h-[248px]'>
                    <Suspense fallback={<Loader />}>
                        <Sales />
                    </Suspense>
                </div>
                <div className='col-span-12 h-[248px] xl:col-span-7'>
                    <Suspense fallback={<Loader />}>
                        <Categories />
                    </Suspense>
                </div>
                <div className='col-span-12 h-[351px] xl:col-span-6 2xl:h-[388px]'>
                    <Suspense fallback={<Loader />}>
                        <Countries />
                    </Suspense>
                </div>
                <div className='col-span-12 h-[384px] xl:col-span-6 xl:h-[351px] 2xl:h-[388px]'>
                    <Suspense fallback={<Loader />}>
                        <Promotions />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
