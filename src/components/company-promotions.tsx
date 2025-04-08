import React from 'react';

import { fetchCompanyPromotions } from '@/lib/data';
import Promotion from '@/ui/promotion';

type Props = {
    id: string
};

export default async function CompanyPromotions(props: Props) {
    const promotions = await fetchCompanyPromotions(props.id);

    return (
        <>
            {
                promotions.length > 0
                    ? <div className="grid grid-cols-12 gap-5">
                        {
                            promotions.map(
                                (promotion) => (
                                    <div
                                        key={promotion.id}
                                        className="col-span-4"
                                    >
                                        <Promotion promotion={promotion} />
                                    </div>
                                )
                            )
                        }
                    </div>
                    : <div className='border border-gray-300 rounded flex justify-center items-center w-full h-full'>
                        <p className="text-5xl">No promotions</p>
                    </div>
            }
        </>
    );
}
