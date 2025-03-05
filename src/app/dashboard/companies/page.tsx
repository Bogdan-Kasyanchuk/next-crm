import Companies from '@/components/companies';
import Header from '@/ui/header';

export default async function Page() {
    return (
        <div className='page'>
            <Header>Companies</Header>

            <div className='page__content'>
                <div className='col-span-12'>
                    <Companies />
                </div>
            </div>
        </div>
    );
}
