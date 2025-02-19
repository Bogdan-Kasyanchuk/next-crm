import Statistics from '@/components/statistics';
import Header from '@/ui/header';

export default async function Page() {
  return (
    <div className="flex flex-col grow">
      <Header>Dashboard</Header>
      <div className="grid grid-cols-12 gap-5 p-5 grow">
        <div className="col-span-12">
          <Statistics />
        </div>
        {/* <div className="col-span-5">{sales}</div>
        <div className="col-span-7">{categories}</div>
        <div className="col-span-6">{countries}</div>
        <div className="col-span-6">{promotions}</div> */}
      </div>
    </div>
  );
}
