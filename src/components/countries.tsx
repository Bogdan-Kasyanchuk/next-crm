import clsx from 'clsx';
import Image from 'next/image';

import { fetchCountries } from '@/lib/data';
import DashboardCard from '@/ui/dashboard-card';

export default async function Countries() {
    const countries = await fetchCountries();

    return (

        <DashboardCard label='Countries of companies'>

            <div className='flex items-end gap-5 px-5 pb-5'>
                <div>
                    {
                        countries.map(
                            (country, i) => (
                                <p
                                    key={i}
                                    className={
                                        clsx(
                                            'text-sm text-gray-900 font-medium flex items-center gap-2',
                                            'before:w-2 before:h-2 before:rounded-full before:bg-purple-200'
                                        )
                                    }
                                >
                                    {`${country.title} - ${country.countCompanies}`}
                                </p>
                            )
                        )
                    }
                </div>
                <div className='grow'>
                    <Image
                        width={395}
                        height={262}
                        src='/images/world.svg'
                        alt='world'
                        className='w-full'
                    />
                </div>
            </div>
        </DashboardCard>
    );
}
