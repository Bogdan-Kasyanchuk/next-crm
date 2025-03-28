import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    modal: ReactNode;
};

export default function Layout(props: Props) {
    return (
        <>
            {props.children}

            {props.modal}
        </>
    );
}
