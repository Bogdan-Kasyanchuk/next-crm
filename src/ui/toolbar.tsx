import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    action: ReactNode;
}

export default function Toolbar(props: Props) {
    return (
        <div className="col-span-12 flex items-center gap-5 -mx-5 p-5 -mt-5 sticky -top-5 bg-background z-1">
            <div className="grow">{props.children}</div>
            {props.action}
        </div>
    );
}
