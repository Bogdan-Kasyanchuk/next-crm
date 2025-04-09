import { actionCreatePromotion } from '@/lib/actions';
import PromotionForm from '@/ui/promotion-form';

type Props = {
    params: Promise<{ id: string }>
};

export default async function Page(props: Props) {
    const { id } = await props.params;

    const createPromotionWithCompanyId = actionCreatePromotion.bind(null, id);

    return (
        <div className='l-page__content'>
            <div className='col-span-12'>
                <PromotionForm
                    title='Add new promotion'
                    action={createPromotionWithCompanyId}
                />
            </div>
        </div>
    );
}