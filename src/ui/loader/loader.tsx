import clsx from 'clsx';
import './loader.css';

type Props = {
    className?: string
};

export default function Loader(props: Props) {
    return (
        <div className={clsx('c-loader', props.className)}>
            <div className='c-loader__inner'></div>
        </div>
    );
}
