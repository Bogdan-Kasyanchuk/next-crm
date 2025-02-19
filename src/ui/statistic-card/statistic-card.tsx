import clsx from 'clsx';
import styles from './styles.module.css';

export type Props = {
  label: string;
  value: number;
};

export default function StatisticCard(props: Props) {
  return (
    <div
      className={clsx(
        styles.gradient,
        'rounded p-7 bg-purple-200 text-gray-900 text-left',
      )}
    >
      <p
        className={clsx(
          'text-left text-sm mb-5 before:w-4 before:h-0.5 before:rounded before:inline-block before:mr-2 before:align-middle before:bg-gray-900',
        )}
      >
        {props.label}
      </p>
      <p className="text-6xl font-semibold">{props.value}</p>
    </div>
  );
}
