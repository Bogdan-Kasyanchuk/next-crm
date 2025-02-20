import Companies from '@/components/companies';
import Header from '@/ui/header';

export default async function Page() {
    return (
        <div className='flex flex-col grow'>
            <Header>Companies</Header>
            <Companies />
        </div>
    );
}
