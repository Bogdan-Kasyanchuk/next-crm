import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function Title(props: Props) {
    return (
        <p className='grow text-3xl font-bold'>{props.children}</p>
    );
}