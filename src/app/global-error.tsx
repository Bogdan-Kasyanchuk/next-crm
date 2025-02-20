'use client';

import React from 'react';

export interface GlobalErrorProps {}

export default function Error({}: GlobalErrorProps) {
    return (
        <html>
            <body>
                <main className='h-full'>
                    <div className='flex flex-col items-center justify-center h-screen gap-10'>
                        <p className='text-3xl'>Something globally went wrong</p>
                    </div>
                </main>
            </body>
        </html>
    );
}
