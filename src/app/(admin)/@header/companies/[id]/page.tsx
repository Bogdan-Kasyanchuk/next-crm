import { fetchCompanyData } from '@/lib/data';
import Header from '@/ui/header';

type Props = {
    params: Promise<{ id: string }>
};

export default async function Page(props: Props) {
    const { id } = await props.params;

    const company = await fetchCompanyData(id);

    if (!company) {
        return null;
    }

    return <Header>{company.title}</Header>;
}
