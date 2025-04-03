import { fetchCompany } from '@/lib/data';

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
        <>{company.title}</>
    );
}