import { actionCreateCompany } from '@/lib/actions';
import CompanyForm from '@/ui/company-form';

export default function Page() {
    return (
        <div className='l-page__content'>
            <div className='col-span-12'>
                <CompanyForm
                    title='Add new company'
                    action={actionCreateCompany}
                />
            </div>
        </div>
    );
}