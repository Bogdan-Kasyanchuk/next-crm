import React from 'react';

import { fetchCompanyPromotionsData } from '@/lib/data';
import Promotion from '@/ui/promotion';

export default async function CompanyPromotions() {
  const companyPromotions = await fetchCompanyPromotionsData();

  return (
    <div className="grid grid-cols-12 gap-5">
      {companyPromotions.map(
        (promotion, index) => (
          <div key={index} className="col-span-4">
            <Promotion promotion={promotion} />
          </div>
        ))}
    </div>
  );
}
