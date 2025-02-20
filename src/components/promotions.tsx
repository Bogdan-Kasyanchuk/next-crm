import { fetchPromotionsData } from '@/lib/data';
import DashboardCard from '@/ui/dashboard-card';
import SummaryTable from '@/ui/summary-table/summary-table';
import SummaryTableCell from '@/ui/summary-table/summary-table-cell';
import SummaryTableHeader from '@/ui/summary-table/summary-table-header';

export default async function Promotions() {
    const promotions = await fetchPromotionsData();

    return (
        <DashboardCard label='Promotions'>
            <SummaryTable
                headers={
                    <>
                        <SummaryTableHeader>Company</SummaryTableHeader>
                        <SummaryTableHeader>Name</SummaryTableHeader>
                        <SummaryTableHeader align='center'>%</SummaryTableHeader>
                    </>
                }
            >
                {promotions.map((item, i) => (
                    <tr key={i}>
                        <SummaryTableCell>{item.company}</SummaryTableCell>
                        <SummaryTableCell>{item.title}</SummaryTableCell>
                        <SummaryTableCell align='center'>{`-${item.discount}%`}</SummaryTableCell>
                    </tr>
                ))}
            </SummaryTable>
        </DashboardCard>
    );
}
