import Image from 'next/image';
import Links from './links';
import ExitButton from './exit-button';

export default function Sidebar() {
  return (
    <aside className="w-40 h-full lg:w-60 shrink-0">
      <div className="flex flex-col h-full overflow-y-auto bg-gray-900">
        <Image
          className="py-8 mx-auto mb-10"
          width={122}
          height={25}
          src="/icons/logo.svg"
          alt="logo"
        />
        <Links />
        <ExitButton />
      </div>
    </aside>
  );
}
