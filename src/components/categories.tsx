import { StatisticCardType } from '@/enums';
import { fetchCategories } from '@/lib/data';
import StatisticCard from '@/ui/statistic-card/statistic-card';

export default async function Categories() {
    const categories = await fetchCategories();

    return (
        <>
            {
                categories
                    ? <div className='grid h-full grid-cols-4 gap-3'>
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
                    : <div className='border border-gray-300 rounded flex justify-center items-center w-full h-full'>
                        <p className="text-5xl">Categories not found</p>
                    </div>
            }
        </>
    );
}
