import { StatisticCardType } from '@/enums';
import { fetchCategoriesData } from '@/lib/data';
import StatisticCard from '@/ui/statistic-card/statistic-card';

export default async function Categories() {
    const categories = await fetchCategoriesData();

    return (
        <div className='grid h-full grid-cols-4 gap-3'>
            {
                categories.map(
                    (category) => (
                        <StatisticCard
                            key={category.label}
                            type={StatisticCardType.DARK}
                            statistic={category}
                        />
                    )
                )
            }
        </div>
    );
}
