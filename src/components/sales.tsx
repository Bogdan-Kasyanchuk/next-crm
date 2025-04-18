import Image from 'next/image';
import Link from 'next/link';

import { fetchSales } from '@/lib/data';
import DashboardCard from '@/ui/dashboard-card';
import SummaryTable from '@/ui/summary-table/summary-table';
import SummaryTableCell from '@/ui/summary-table/summary-table-cell';
import SummaryTableHeader from '@/ui/summary-table/summary-table-header';

export default async function Sales() {
    const sales = await fetchSales();

    return (
        <>
            {
                sales
                    ? <DashboardCard label='Sales details'>
                        <SummaryTable
                            headers={
                                <>
                                    <SummaryTableHeader>Company</SummaryTableHeader>
                                    <SummaryTableHeader align='center'>Sold</SummaryTableHeader>
                                    <SummaryTableHeader align='center'>Income</SummaryTableHeader>
                                </>
                            }
                        >
                            {
                                sales.map(
                                    (item, i) => (
                                        <tr key={i}>
                                            <SummaryTableCell>
                                                <Link
                                                    href={`/companies/${item.id}`}
                                                    className='inline-block hover:opacity-75 hover:text-red-500'
                                                >
                                                    <div className='flex items-center gap-2'>
                                                        <Image
                                                            width={20}
                                                            height={20}
                                                            src={item.logo}
                                                            alt={item.title}
                                                            className='rounded-full w-5 h-5'
                                                        />
                                                        {item.title}
                                                    </div>
                                                </Link>
                                            </SummaryTableCell>
                                            <SummaryTableCell align='center'>{item.sold}</SummaryTableCell>
                                            <SummaryTableCell align='center'>{`$${item.income}`}</SummaryTableCell>
                                        </tr>
                                    )
                                )
                            }
                        </SummaryTable>
                    </DashboardCard>
                    : <div className='border border-gray-300 rounded flex justify-center items-center w-full h-full'>
                        <p className="text-5xl">Sales not found</p>
                    </div>
            }
        </>

    );
}
