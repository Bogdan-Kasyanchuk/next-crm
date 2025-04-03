import AddCompanyButton from '@/ui/add-company-button';
import Companies from '@/components/companies';
import SearchInput from '@/ui/search-input';
import Toolbar from '@/ui/toolbar';

export default function Page() {
    return (
        <div className='l-page__content'>
            <Toolbar action={<AddCompanyButton />}>
                <SearchInput />
            </Toolbar>

            <div className='col-span-12'>
                <Companies />
            </div>
        </div>
    );
}