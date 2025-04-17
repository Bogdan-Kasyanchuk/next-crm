import { fetchPromotionsPage } from '@/lib/data';
import Promotion from '@/ui/promotion';

type Props = {
    query: string;
};

export default async function PromotionsPage(props: Props) {
    const promotions = await fetchPromotionsPage(props.query);

    return (
        <>
            {
                promotions
                    ? <div className="grid grid-cols-12 gap-5">
                        {
                            promotions.map(
                                (promotion) => (
                                    <Promotion
                                        key={promotion.id}
                                        className="col-span-3"
                                        promotion={promotion}
                                    />
                                )
                            )
                        }
                    </div>
                    : <div className='border border-gray-300 rounded flex justify-center items-center w-full h-full'>
                        <p className="text-5xl">Promotions not found</p>
                    </div>
            }
        </>
    );
}
