import clsx from 'clsx';
import styles from './styles.module.css';
import { StatisticCardTypes } from '@/enums';
import { StatisticCard as StatisticCardType } from '@/types';

type Props = {
    type: StatisticCardTypes;
    stat: StatisticCardType;
};

export default function StatisticCard(props: Props) {
    return (
        <div
            className={clsx(
                'rounded flex flex-col justify-between',
                props.type === StatisticCardTypes.DARK &&
                    'p-3 bg-gray-900 odd:text-purple-200 even:text-lime-200 text-right',
                props.type === StatisticCardTypes.GRADIENT && [
                    styles.gradient,
                    'p-5 bg-purple-200 text-gray-900 text-left',
                ]
            )}
        >
            <p
                className={clsx(
                    'text-left before:w-4 before:h-0.5 before:rounded',
                    props.type === StatisticCardTypes.DARK &&
                        'text-sm mb-1 text-zinc-50 before:block before:mb-2 before:bg-zinc-50',
                    props.type === StatisticCardTypes.GRADIENT &&
                        'text-xs mb-5 before:inline-block before:mr-2 before:align-middle before:bg-gray-900'
                )}
            >
                {props.stat.label}
            </p>
            <p className='text-6xl font-semibold'>{props.stat.value}</p>
        </div>
    );
}
