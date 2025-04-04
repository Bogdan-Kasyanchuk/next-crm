import PromotionForm from '@/ui/promotion-form';

type Props = {
    params: Promise<{ id: string }>
};

export default async function Page(props: Props) {
    const { id } = await props.params;

    return (
        <div className='l-page__content'>
            <div className='col-span-12'>
                <PromotionForm companyId={id} />
            </div>
        </div>
    );
}