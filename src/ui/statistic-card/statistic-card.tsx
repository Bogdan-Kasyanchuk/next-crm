import clsx from 'clsx';

import { StatisticCardType } from '@/enums';
import { StatisticsMapper } from '@/types';

import './statistic-card.css';

type Props = {
    type: StatisticCardType;
    statistic: StatisticsMapper[number];
};

export default function StatisticCard(props: Props) {
    return (
        <div
            className={
                clsx(
                    'rounded flex flex-col justify-between',
                    props.type === StatisticCardType.DARK &&
                    'p-3 bg-gray-900 odd:text-purple-200 even:text-lime-200 text-right',
                    props.type === StatisticCardType.GRADIENT && 'c-statistic-card__gradient p-5 bg-purple-200 text-gray-900 text-left',
                )
            }
        >
            <p
                className={
                    clsx(
                        'text-left before:w-4 before:h-0.5 before:rounded',
                        props.type === StatisticCardType.DARK &&
                        'text-sm mb-1 text-zinc-50 before:block before:mb-2 before:bg-zinc-50',
                        props.type === StatisticCardType.GRADIENT &&
                        'text-xs mb-5 before:inline-block before:mr-2 before:align-middle before:bg-gray-900'
                    )
                }
            >
                {props.statistic.label}
            </p>
            <p
                className={
                    clsx('text-6xl font-semibold', props.type === StatisticCardType.GRADIENT && 'pl-6',)
                }
            >
                {props.statistic.value}
            </p>
        </div>
    );
}
