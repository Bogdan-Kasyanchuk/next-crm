import { fetchCompany } from '@/lib/data';
import Title from '@/ui/title';

type Props = {
    params: Promise<{ id: string }>
};

export default async function Page(props: Props) {
    const { id } = await props.params;

    const company = await fetchCompany(id);

    if (!company) {
        return null;
    }

    return (
        <Title>{company.title}</Title>
    );
}