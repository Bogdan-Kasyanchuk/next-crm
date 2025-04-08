import { fetchCompanies } from '@/lib/data';
import CompanyRow from '@/ui/company-table/company-row';
import CompanyTable from '@/ui/company-table/company-table';

export default async function Companies() {
    const companies = await fetchCompanies();

    return (
        <>
            {
                companies
                    ? <CompanyTable>
                        {
                            companies.map(
                                (company) => (
                                    <CompanyRow
                                        key={company.id}
                                        company={company}
                                    />
                                )
                            )
                        }
                    </CompanyTable>
                    : <div className='border border-gray-300 rounded flex justify-center items-center w-full h-full'>
                        <p className="text-5xl">Сompanies not found</p>
                    </div>
            }
        </>
    );
}
