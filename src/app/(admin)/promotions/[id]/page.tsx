import { notFound } from 'next/navigation';

import { fetchPromotion } from '@/lib/data';
import ActionButton from '@/ui/action-button';
import Promotion from '@/ui/promotion-copy';
import Toolbar from '@/ui/toolbar';

type Props = {
    params: Promise<{ id: string }>
};

export default async function Page(props: Props) {
    const { id } = await props.params;

    const promotion = await fetchPromotion(id);

    if (!promotion) {
        notFound();
    }

    return (
        <div className='l-page__content'>
            <Toolbar
                actions={
                    <ActionButton
                        rout={`/promotions/${id}/promotion-update`}
                        label='Update promotion'
                    />
                }
            >
                <></>
            </Toolbar>

            <div className="col-span-3">
                <Promotion promotion={promotion} />
            </div>
        </div>
    );
}