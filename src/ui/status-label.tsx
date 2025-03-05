import clsx from 'clsx';
import { CompanyStatus } from '@/enums';

type Props = {
    status: CompanyStatus;
    disabled?: boolean;
};

export default function StatusLabel(props: Props) {
    const labelByStatus = {
        [CompanyStatus.ACTIVE]: 'Active',
        [CompanyStatus.NOT_ACTIVE]: 'Not Active',
        [CompanyStatus.PENDING]: 'Pending',
        [CompanyStatus.SUSPENDED]: 'Suspended',
    };

    const label = labelByStatus[props.status];

    return (
        <div
            className={clsx(
                'inline-flex items-center py-1 px-2.5 gap-1.5 rounded-3xl text-sm font-semibold',
                props.status === CompanyStatus.ACTIVE && 'text-green-700 bg-green-100',
                props.status === CompanyStatus.NOT_ACTIVE && 'text-red-700 bg-red-100',
                props.status === CompanyStatus.PENDING && 'text-orange-700 bg-orange-100',
                props.status === CompanyStatus.SUSPENDED && 'text-blue-700 bg-blue-100',
                {
                    ['opacity-75 cursor-not-allowed']: props.disabled,
                }
            )}
        >
            <div className='w-1.5 h-1.5 bg-current rounded-full' />
            {label}
        </div>
    );
}
