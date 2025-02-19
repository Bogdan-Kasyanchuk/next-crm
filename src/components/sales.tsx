import DashboardCard from '@/ui/dashboard-card';
import SummaryTable from '@/ui/summary-table/summary-table';
import SummaryTableCell from '@/ui/summary-table/summary-table-cell';
import SummaryTableHeader from '@/ui/summary-table/summary-table-header';

const data = [
  {
    id: '01',
    title: 'Costco Wholesale',
    sold: 432,
    income: 600,
  },
  {
    id: '02',
    title: 'Costco Wholesale',
    sold: 432,
    income: 600,
  },
  {
    id: '03',
    title: 'Costco Wholesale',
    sold: 432,
    income: 600,
  },
  {
    id: '04',
    title: 'Costco Wholesale',
    sold: 432,
    income: 600,
  },
  {
    id: '05',
    title: 'Costco Wholesale',
    sold: 432,
    income: 600,
  },
];

export default async function Page() {
  return (
    <DashboardCard label="Sales details">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map((item) => (
          <tr key={item.id}>
            <SummaryTableCell>{item.title}</SummaryTableCell>
            <SummaryTableCell align="center">{item.sold}</SummaryTableCell>
            <SummaryTableCell align="center">{`$${item.income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
