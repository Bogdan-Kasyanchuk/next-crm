import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    modal: ReactNode;
    header: ReactNode;
};

export default function Layout(props: Props) {
    return (
        <div className='l-page'>
            {props.header}

            {props.children}

            {props.modal}
        </div>
    );
}
