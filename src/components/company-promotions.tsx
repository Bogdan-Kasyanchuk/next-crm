'use client';

import Promotion from '@/ui/promotion';
import React from 'react';


export type CompanyPromotionsProps = {
  companyId: string;
}

export default function CompanyPromotions(props: CompanyPromotionsProps) {

  return (
    <div className="grid grid-cols-12 gap-5">
      {data?.map((promotion) => (
        <div key={promotion.id} className="col-span-4">
          <Promotion promotion={promotion} />
        </div>
      ))}
    </div>
  );
}
