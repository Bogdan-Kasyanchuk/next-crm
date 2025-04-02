import { StatisticCardType } from '@/enums';
import { fetchStatistics } from '@/lib/data';
import StatisticCard from '@/ui/statistic-card/statistic-card';

export default async function Statistics() {
    const statistics = await fetchStatistics();

    return (
        <div className='grid grid-cols-2 gap-5 xl:grid-cols-4'>
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
    );
}
