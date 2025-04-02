import { ReactNode } from 'react';

type ToolbarProps = {
    children: ReactNode;
    action: ReactNode;
}

export default function Toolbar(props: ToolbarProps) {
    return (
        <div className="col-span-12 flex items-center gap-5 mb-5">
            <div className="grow">{props.children}</div>
            {props.action}
        </div>
    );
}
