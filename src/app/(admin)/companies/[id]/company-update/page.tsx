import { notFound } from 'next/navigation';

import { actionUpdateCompany } from '@/lib/actions';
import { fetchCompany } from '@/lib/data';
import CompanyForm from '@/ui/company-form';

type Props = {
    params: Promise<{ id: string }>
};

export default async function Page(props: Props) {
    const { id } = await props.params;

    const company = await fetchCompany(id);

    if (!company) {
        notFound();
    }

    const actionUpdateCompanyWithId = actionUpdateCompany.bind(null, id);

    return (
        <div className='l-page__content'>
            <div className='col-span-12'>
                <CompanyForm
                    title='Update company'
                    action={actionUpdateCompanyWithId}
                    initialValues={
                        {
                            status: company.status,
                            codeCountry: company.country.code,
                            title: company.title,
                            codeCategory: company.category.code,
                            joinedAt: new Date(company.joinedAt).toLocaleDateString('uk-UA').split('.').reverse().join('-'),
                            description: company.description
                        }
                    }
                />
            </div>
        </div>
    );
}