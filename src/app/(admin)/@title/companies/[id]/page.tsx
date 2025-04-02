import { fetchCompanyData } from '@/lib/data';
import Title from '@/ui/title';

type Props = {
    params: { id: string }
};

export default async function Page(props: Props) {
    const company = await fetchCompanyData(props.params.id);

    if (!company) {
        return null;
    }

    return (
        <Title>{company.title}</Title>
    );
}