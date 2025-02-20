import Sidebar from '@/ui/sidebar/sidebar';
import React from 'react';

export interface LayoutProps {
    children: React.ReactNode;
    stats: React.ReactNode;
    sales: React.ReactNode;
    categories: React.ReactNode;
    countries: React.ReactNode;
    promotions: React.ReactNode;
}

export default function Template({
    children,
    stats,
    sales,
    categories,
    countries,
    promotions,
}: LayoutProps) {
    return (
        <div className='flex flex-col grow'>
            {children}
            <div className='grid grid-cols-12 gap-5 p-5 overflow-y-auto grow'>
                <div className='col-span-12'>{stats}</div>
                <div className='col-span-5'>{sales}</div>
                <div className='col-span-7'>{categories}</div>
                <div className='col-span-6'>{countries}</div>
                <div className='col-span-6'>{promotions}</div>
            </div>
        </div>
    );
}
