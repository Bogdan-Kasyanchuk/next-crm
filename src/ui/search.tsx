'use client';

import Image from 'next/image';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

type Props = {
    placeholder: string
}

export default function Search(props: Props) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);

        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className="relative w-96">
            <input
                type="text"
                defaultValue={searchParams.get('query')?.toString()}
                placeholder={props.placeholder}
                className="text-sm flex-1 py-3 pl-10 pr-3 w-full h-11 rounded border border-gray-300 focus:outline-none focus:border-gray-900"
                onChange={
                    (e) => {
                        handleSearch(e.target.value);
                    }
                }
            />
            <Image
                width={20}
                height={20}
                src="/icons/magnifying-glass.svg"
                alt="Search icon"
                className="absolute top-1/2 -translate-y-1/2 left-3"
            />
        </div>
    );
}
