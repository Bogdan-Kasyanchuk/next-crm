import Header from '@/ui/header';

export default async function Page() {
  return (
    <div className="flex flex-col grow">
      <Header>Companies</Header>
      <div className="flex items-center justify-center grow">Content</div>
    </div>
  );
}
