import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import AddPromotionButton from '@/components/add-promotion-button';
import CompanyInfo from '@/components/company-info';
import CompanyPromotions from '@/components/company-promotions';
import Header from '@/ui/header';
import Loader from '@/ui/loader/loader';
import SearchInput from '@/ui/search-input';
import Toolbar from '@/ui/toolbar';

type Props = {
  params: Promise<{ id: string }>
};

export default async function Page(props: Props) {

  const { id } = await props.params

  if (id === 'not-found') {
    notFound();
  }

  return (
    <div className='l-page'>
      <Header>Costco Wholesale</Header>

      <div className='l-page__content'>
        <Toolbar action={<AddPromotionButton id={id} />}>
          <SearchInput />
        </Toolbar>

        <div className="col-span-3">
          <Suspense fallback={<Loader />}>
            <CompanyInfo />
          </Suspense>
        </div>

        <div className="col-span-9">
          <Suspense fallback={<Loader />}>
            <CompanyPromotions />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
