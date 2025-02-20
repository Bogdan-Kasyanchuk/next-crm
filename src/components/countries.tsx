import { fetchCountriesData } from '@/lib/data';
import DashboardCard from '@/ui/dashboard-card';
import clsx from 'clsx';
import Image from 'next/image';

export default async function Countries() {
    const countries = await fetchCountriesData();

    return (
        <DashboardCard label='Countries of companies'>
            <div className='flex items-end gap-5 px-5 pb-5'>
                <div>
                    {countries.map((item, i) => (
                        <p
                            key={i}
                            className={clsx(
                                'text-sm text-gray-900 font-medium flex items-center gap-2',
                                'before:w-2 before:h-2 before:rounded-full before:bg-purple-200'
                            )}
                        >{`${item.title} - ${item.count}`}</p>
                    ))}
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
