import { ReactNode } from 'react';
import Image from 'next/image';

export type Props = {
  children: ReactNode;
};

export default function Header(props: Props) {
  return (
    <header className="flex items-center gap-5 px-10 py-6 border-b border-gray-300">
      <p className="flex-1 text-3xl font-semibold text-gray-900">
        {props.children}
      </p>
      <div className="self-stretch w-px bg-gray-300" />
      <div className="flex gap-3">
        <Image width={44} height={44} src="/images/avatar.png" alt="Avatar" />
        <div>
          <p className="text-base font-semibold text-gray-900">Adam Smith</p>
          <p className="text-sm font-light text-gray-900">
            adamsmith@gmail.com
          </p>
        </div>
      </div>
    </header>
  );
}
