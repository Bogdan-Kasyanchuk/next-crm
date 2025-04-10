import { StatisticCardType } from '@/enums';
import { fetchStatistics } from '@/lib/data';
import StatisticCard from '@/ui/statistic-card/statistic-card';

export default async function Statistics() {
    const statistics = await fetchStatistics();

    return (
        <>
            {
                statistics
                    ? <div className='grid grid-cols-2 gap-5 xl:grid-cols-5'>
                        {
                            statistics.map(
                                (statistic, i) => (
                                    <StatisticCard
                                        key={i}
                                        type={StatisticCardType.GRADIENT}
                                        statistic={statistic}
                                    />
                                )
                            )
                        }
                    </div>
                    : <div className='border border-gray-300 rounded flex justify-center items-center w-full h-full'>
                        <p className="text-5xl">Statistics not found</p>
                    </div>
            }
        </>
    );
}
