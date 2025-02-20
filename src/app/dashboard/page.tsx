import Categories from '@/components/categories';
import Countries from '@/components/countries';
import Promotions from '@/components/promotions';
import Sales from '@/components/sales';
import Statistics from '@/components/statistics';
import Header from '@/ui/header';
import Loader from '@/ui/loader';
import { Suspense } from 'react';

export default async function Page() {
    return (
        <div className='flex flex-col grow'>
            <Header>Dashboard</Header>
            <div className='grid grid-cols-12 gap-5 p-5 overflow-y-auto grow'>
                <div className='col-span-12'>
                    <Suspense fallback={<Loader />}>
                        <Statistics />
                    </Suspense>
                </div>
                <div className='col-span-5'>
                    <Suspense fallback={<Loader />}>
                        <Sales />
                    </Suspense>
                </div>
                <div className='col-span-7'>
                    <Suspense fallback={<Loader />}>
                        <Categories />
                    </Suspense>
                </div>
                <div className='col-span-6'>
                    <Suspense fallback={<Loader />}>
                        <Countries />
                    </Suspense>
                </div>
                <div className='col-span-6'>
                    <Suspense fallback={<Loader />}>
                        <Promotions />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
