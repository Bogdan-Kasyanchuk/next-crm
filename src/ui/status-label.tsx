import clsx from 'clsx';

import { CompanyStatusType } from '@/enums';

type Props = {
    status: CompanyStatusType;
    disabled?: boolean;
};

export default function StatusLabel(props: Props) {
    const labelByStatus = {
        [CompanyStatusType.ACTIVE]: 'Active',
        [CompanyStatusType.NOT_ACTIVE]: 'Not Active',
        [CompanyStatusType.PENDING]: 'Pending',
        [CompanyStatusType.SUSPENDED]: 'Suspended',
    };

    const label = labelByStatus[props.status];

    return (
        <div
            className={
                clsx(
                    'inline-flex items-center py-1 px-2.5 gap-1.5 rounded-3xl text-sm font-semibold',
                    props.status === CompanyStatusType.ACTIVE && 'text-green-700 bg-green-100',
                    props.status === CompanyStatusType.NOT_ACTIVE && 'text-red-700 bg-red-100',
                    props.status === CompanyStatusType.PENDING && 'text-orange-700 bg-orange-100',
                    props.status === CompanyStatusType.SUSPENDED && 'text-blue-700 bg-blue-100',
                    {
                        ['opacity-75 cursor-not-allowed']: props.disabled,
                    }
                )
            }
        >
            <div className='w-1.5 h-1.5 bg-current rounded-full' />
            {label}
        </div>
    );
}
