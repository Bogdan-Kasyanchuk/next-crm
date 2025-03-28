import Image from 'next/image';

import { Company as CompanyType } from '@/types';
import StatusLabel from '@/ui/status-label';


type CompanyProps = {
  company: CompanyType;
}

export default function Company(props: CompanyProps) {
  return (
    <div className="flex flex-col gap-5 sticky top-0">
      <div className="flex flex-col items-center p-7 gap-5 bg-gray-900 rounded">
        <div className="w-20 h-20 rounded-full bg-blue-500">
          <Image src={props.company.avatar} width={80} height={80} alt="company avatar" className='rounded-full' />
        </div>
        <p className="pb text-base font-semibold text-white">{props.company.title}</p>
        <StatusLabel status={props.company.status} />
      </div>
      <div className="p-7 text-base text-gray-900 bg-gray-100 rounded">
        <p className="pb-5 text-xl font-semibold">About company</p>
        <p className="pb-3">{`Category: ${props.company.category}`}</p>
        <p className="pb-3">{`Country: ${props.company.country}`}</p>
        <p className="pb-3">{`Joined date: ${new Date(
          props.company.joinedAt,
        ).toLocaleDateString('uk')}`}</p>
        <div className="w-full h-px my-8 bg-gray-300" />
        {
          props.company.description &&
          <p>{props.company.description}</p>
        }
      </div>
    </div>
  );
}
