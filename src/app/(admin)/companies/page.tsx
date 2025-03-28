import AddCompanyButton from '@/components/add-company-button';
import Companies from '@/components/companies';
import Header from '@/ui/header';
import SearchInput from '@/ui/search-input';
import Toolbar from '@/ui/toolbar';

export default async function Page() {
    return (
        <div className='l-page'>
            <Header>Companies</Header>

            <div className='l-page__content'>
                <Toolbar action={<AddCompanyButton />}>
                    <SearchInput />
                </Toolbar>

                <div className='col-span-12'>
                    <Companies />
                </div>
            </div>
        </div>
    );
}
