import Link from 'next/link';

export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center h-full gap-10'>
            <h1 className='text-6xl text-center'>
                Welcome to CRM
                <br />
                <span className='font-bold text-red-500'>TrueScape</span>
            </h1>

            <Link
                href='/dashboard'
                className='text-5xl text-blue-500 hover:underline'
            >
                Go to Dashboard
            </Link>
        </div>
    );
}