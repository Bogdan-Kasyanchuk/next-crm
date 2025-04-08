import Image from 'next/image';
import Link from 'next/link';

import { fetchPromotions } from '@/lib/data';
import DashboardCard from '@/ui/dashboard-card';
import SummaryTable from '@/ui/summary-table/summary-table';
import SummaryTableCell from '@/ui/summary-table/summary-table-cell';
import SummaryTableHeader from '@/ui/summary-table/summary-table-header';

export default async function Promotions() {
    const promotions = await fetchPromotions();

    return (
        <>
            {
                promotions
                    ? <DashboardCard label='Promotions'>
                        <SummaryTable
                            headers={
                                <>
                                    <SummaryTableHeader>Company</SummaryTableHeader>
                                    <SummaryTableHeader>Name</SummaryTableHeader>
                                    <SummaryTableHeader align='center'>%</SummaryTableHeader>
                                </>
                            }
                        >
                            {
                                promotions.map(
                                    (promotion, i) => (
                                        <tr key={i}>
                                            <SummaryTableCell>
                                                <Link
                                                    href={`/companies/${promotion.company.id}`}
                                                    className='inline-block hover:opacity-75 hover:text-red-500'
                                                >
                                                    <div className='flex items-center gap-2'>
                                                        <Image
                                                            width={20}
                                                            height={20}
                                                            src={promotion.company.logo}
                                                            alt={promotion.company.title}
                                                            className='rounded-full w-5 h-5'
                                                        />
                                                        {promotion.company.title}
                                                    </div>
                                                </Link>
                                            </SummaryTableCell>
                                            <SummaryTableCell>{promotion.title}</SummaryTableCell>
                                            <SummaryTableCell align='center'>
                                                {`-${promotion.discount}%`}
                                            </SummaryTableCell>
                                        </tr>
                                    )
                                )
                            }
                        </SummaryTable>
                    </DashboardCard>
                    : <div className='border border-gray-300 rounded flex justify-center items-center w-full h-full'>
                        <p className="text-5xl">Promotions not found</p>
                    </div>
            }
        </>

    );
}
