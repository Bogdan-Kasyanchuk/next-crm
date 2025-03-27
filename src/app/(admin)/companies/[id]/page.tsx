import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>
};

export default async function Page(props: Props) {

  const { id } = await props.params

  if (id === 'not-found') {
    notFound();
  }

  return (
    <div className="py-6 px-10 grid grid-cols-12 gap-5">
      {id}
    </div>

    // <div className="py-6 px-10 grid grid-cols-12 gap-5">
    //   <div className="col-span-3">
    //     <CompanyInfo companyId={params.id} />
    //   </div>
    //   <div className="col-span-9">
    //     <CompanyPromotions companyId={params.id} />
    //   </div>
    // </div>
  );
}
