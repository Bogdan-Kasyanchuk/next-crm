import React from 'react';

import { fetchCompanyPromotionsData } from '@/lib/data';
import Promotion from '@/ui/promotion';

type Props = {
    id: string
};

export default async function CompanyPromotions(props: Props) {
    const companyPromotions = await fetchCompanyPromotionsData(props.id);

    return (
        <>
            {
                !companyPromotions.length
                    ? <div className="flex items-center justify-center w-full h-full">
                        <p className="text-5xl">No promotions</p>
                    </div>
                    : <div className="grid grid-cols-12 gap-5">
                        {
                            companyPromotions.map(
                                (promotion, index) => (
                                    <div key={index} className="col-span-4">
                                        <Promotion promotion={promotion} />
                                    </div>
                                )
                            )
                        }
                    </div>
            }
        </>
    );
}
