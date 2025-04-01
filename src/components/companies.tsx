import { fetchCompaniesData } from '@/lib/data';
import CompanyRow from '@/ui/company-table/company-row';
import CompanyTable from '@/ui/company-table/company-table';

export default async function Companies() {
    const companies = await fetchCompaniesData();

    return (
        <CompanyTable>
            {
                companies.map(
                    (company, i) => (
                        <CompanyRow key={i}
                            company={company}
                        />
                    ))
            }
        </CompanyTable>
    );
}
