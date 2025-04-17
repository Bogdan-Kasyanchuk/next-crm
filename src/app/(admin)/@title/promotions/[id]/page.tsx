import { fetchPromotion } from '@/lib/data';

type Props = {
    params: Promise<{ id: string }>
};

export default async function Page(props: Props) {
    const { id } = await props.params;

    const promotion = await fetchPromotion(id);

    if (!promotion) {
        return null;
    }

    return (
        <>{promotion.title}</>
    );
}