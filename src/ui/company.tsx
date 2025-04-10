import Image from 'next/image';

import { CompanyMapper } from '@/types';
import StatusLabel from '@/ui/status-label';

type Props = {
    company: CompanyMapper;
}

export default function Company(props: Props) {
    return (
        <div className="flex flex-col gap-5 sticky top-[64px]">
            <div className="flex flex-col items-center p-7 gap-5 bg-gray-900 rounded">
                <div className="w-20 h-20 rounded-full bg-blue-500">
                    <Image
                        src={props.company.logo}
                        width={80}
                        height={80}
                        alt={props.company.title}
                        className='rounded-full w-20 h-20'
                    />
                </div>
                <p className="pb text-base font-semibold text-white">{props.company.title}</p>
                <StatusLabel status={props.company.status} />
            </div>
            <div className="p-7 text-base text-gray-900 bg-gray-100 rounded">
                <p className="pb-5 text-xl font-semibold">About company</p>
                <p className="pb-3">{`Category: ${props.company.category.title}`}</p>
                <p className="pb-3">{`Country: ${props.company.country.title}`}</p>
                <p className="pb-3">
                    {
                        `Joined date: ${new Date(props.company.joinedAt,
                        ).toLocaleDateString('uk')}`
                    }
                </p>
                <div className="w-full h-px my-8 bg-gray-300" />
                {
                    props.company.description &&
                    <p>{props.company.description}</p>
                }
            </div>
        </div>
    );
}
