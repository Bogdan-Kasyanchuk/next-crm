'use client';

import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

export type ModalProps = {
    children?: React.ReactNode;
    show: boolean;
    onClose: () => void;
}

export default function Modal(props: ModalProps) {
    return (
        <Transition.Root
            as={Fragment}
            show={props.show}
        >
            <Dialog
                as="div"
                className="px-5 fixed inset-0 z-50 flex items-center"
                onClose={props.onClose}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 transition-opacity" />
                </Transition.Child>
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all p-7 mx-auto sm:my-10 w-full sm:max-w-2xl">
                    {props.children}
                </Dialog.Panel>
            </Dialog>
        </Transition.Root>
    );
}
