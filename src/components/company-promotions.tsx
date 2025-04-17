import { fetchCompanyPromotions } from '@/lib/data';
import Promotion from '@/ui/promotion';

type Props = {
    companyId: string,
    query: string
};

export default async function CompanyPromotions(props: Props) {
    const promotions = await fetchCompanyPromotions(props.companyId, props.query);

    return (
        <>
            {
                promotions.length > 0
                    ? <div className="grid grid-cols-12 gap-5">
                        {
                            promotions.map(
                                (promotion) => (
                                    <Promotion
                                        key={promotion.id}
                                        className="col-span-4"
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
