'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import Button from '@/ui/button';

export default function AddCompanyButton() {
  const router = useRouter();
  
  return (
    <Button onClick={
      () => {
        router.push('/companies/new', { scroll: false })
      }
    }>
      Add company
    </Button>
  );
}
