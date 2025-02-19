import StatCard from '@/ui/stat-card/stat-card';

const data = [
  {
    label: 'Total promotions',
    value: 432,
  },
  {
    label: 'Total categories',
    value: 8,
  },
  {
    label: 'New companies',
    value: 28,
  },
  {
    label: 'Total active companies',
    value: 670,
  },
];

export default async function Statistics() {
  return (
    <div className="grid grid-cols-2 gap-5 xl:grid-cols-4">
      {data.map((item) => (
        <div key={item.label}>
          <StatCard label={item.label} value={item.value} />
        </div>
      ))}
    </div>
  );
}
