'use client';

import { CloseButton, Dialog, DialogPanel } from '@headlessui/react';
import Image from 'next/image';
import { ReactNode } from 'react';

import Button from '@/ui/button';

export type Props = {
    children?: ReactNode;
    show: boolean;
    onClose: () => void;
}

export default function Modal(props: Props) {
    return (
        <Dialog
            open={props.show}
            as="div"
            className="px-5 fixed inset-0 z-50 flex items-center justify-center bg-black/70 data-[closed]:opacity-0"
            transition
            onClose={props.onClose}
        >

            <DialogPanel className="relative overflow-hidden rounded-lg bg-white shadow-xl p-5 mx-auto sm:my-10 w-full sm:max-w-2xl">
                {props.children}
                <CloseButton
                    as={Button}
                    className='text-xl absolute top-5 right-5 !p-1.5'
                >
                    <Image
                        width={18}
                        height={18}
                        src='/icons/close.svg'
                        alt='Close'
                    />
                </CloseButton>
            </DialogPanel>
        </Dialog>
    );
}
