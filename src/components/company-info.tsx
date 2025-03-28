import { fetchCompanyData } from '@/lib/data';
import Company from '@/ui/company';

export default async function CompanyInfo() {
  const company = await fetchCompanyData();

  return (
    <Company company={company} />
  );
}
